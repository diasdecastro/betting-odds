import * as cheerio from 'cheerio';
import scrapeData from './scrapeData';
import {
  getNormalizedDateFormat,
  getNormalizedOddsFormat,
} from '@lib/utils/normalizeDataHelper';

/* Datenstruktur für ein Spiel */
interface FootballGameModel {
  competition: {
    country: string;
    name: string;
  };
  games: {
    link: string;
    date: Date;
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

  let competitionCountry: string;
  let competitionName: string;

  pageData?.map((competition) => {
    // link to competition page is the last element
    const link = competition[competition.length - 1] || '';
    competition.map((competitionElem, index) => {
      const $ = cheerio.load(competitionElem);

      // first element is always the name of the competition. the rest are games bundled by date
      if (index === 0) {
        //continue to next competition, if has no competition name
        if (competitionElem === '') return;

        competitionCountry = competitionElem.split(' / ')[0];
        competitionName = competitionElem.split(' / ')[1];

        games.push({
          competition: {
            country: competitionCountry,
            name: competitionName,
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
                obj.competition.country === competitionCountry &&
                obj.competition.name === competitionName
            )
            ?.games.push({
              link: link,
              date: getNormalizedDateFormat(date, 'spreadex'),
              team1: team1,
              team2: team2,
              odds: {
                team1Win: getNormalizedOddsFormat(team1Win),
                draw: getNormalizedOddsFormat(draw),
                team2Win: getNormalizedOddsFormat(team2Win),
              },
            });
        });
      }
    });
  });

  return games;
};

export default getGames;
