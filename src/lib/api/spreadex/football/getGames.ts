import * as cheerio from 'cheerio';
import scrapeData from './scrapeData';
import {
  normalizeDateFormat,
  normalizeCompetitionName,
  normalizeTeamName,
  normalizeOddsString,
} from '@lib/utils/normalizeDataHelper';

/* Datenstruktur für ein Spiel */
interface FootballGameModel {
  competition: {
    country: string;
    name: string;
  };
  games: {
    link: string;
    date: string;
    team1: string;
    team2: string;
    odds: {
      team1Win: number;
      draw: number;
      team2Win: number;
    };
  }[];
}

/* Modelliert Array mit HTML-Strings im Format GameModel 
  und gibt Array mit Elemente im gewünschten Format zurück */
const getGames = async (): Promise<FootballGameModel[]> => {
  const games: FootballGameModel[] = [];

  const pageData: string[][] | undefined = await scrapeData();

  pageData?.map((competition) => {
    // link to competition page is the last element
    const link = competition[competition.length - 1] || '';
    competition.map((competitionElem, index) => {
      const $ = cheerio.load(competitionElem);

      // first element is always the name of the competition. the rest are games bundled by date
      if (index === 0) {
        //continue to next competition, if has no competition name
        if (competitionElem === '') return;
        games.push({
          competition: {
            country: competitionElem.split(' / ')[0],
            name: competitionElem.split(' / ')[1],
          },
          games: [],
        });
      } else {
        [...$('sx-coupon-panel-item')].map((game) => {
          const date = $(game).find('.cpi__stats-start-time').text();
          const team1 = $(game).find('.name').text().split(' v ')[0];
          const team2 = $(game).find('.name').text().split(' v ')[1];
          const team1Win = $(game).find('.spx-price-button').eq(0).text();
          const draw = $(game).find('.spx-price-button').eq(1).text();
          const team2Win = $(game).find('.spx-price-button').eq(2).text();

          games
            ?.find(
              (obj) =>
                obj.competition.country === competition[0].split(' / ')[0] &&
                obj.competition.name === competition[0].split(' / ')[1]
            )
            ?.games.push({
              link: link,
              date: date,
              team1: team1,
              team2: team2,
              odds: {
                team1Win: normalizeOddsString(team1Win),
                draw: normalizeOddsString(draw),
                team2Win: normalizeOddsString(team2Win),
              },
            });
        });
      }
    });
  });

  return games;
};

export default getGames;
