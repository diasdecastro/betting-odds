import * as cheerio from 'cheerio';
import scrapeData from './scrapeData';
import {
  normalizeDateFormat,
  normalizeCompetitionName,
  normalizeTeamName,
  normalizeOddsString,
} from '@lib/utils/normalizeDataHelper';

// import { bwinDummyData } from '@lib/utils/dummy';

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

  const scrapedData: string[][] | undefined = await scrapeData();

  scrapedData?.map((competition) => {
    competition.map((competitionElem, index) => {
      const $ = cheerio.load(competitionElem);
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
        const link = $('a').attr('href') || '';
        const date = $('.starting-time').text();
        const team1 = $('.participants-pair-game > .participant-wrapper')
          .eq(0)
          .find('.participant')
          .text();
        const team2 = $('.participants-pair-game > .participant-wrapper')
          .eq(1)
          .find('.participant')
          .text();
        const team1Win = $('.grid-event-wrapper')
          .find('.grid-option-group')
          .eq(0)
          .find('.option-value')
          .eq(0)
          .text();
        const draw = $('.grid-event-wrapper')
          .find('.grid-option-group')
          .eq(0)
          .find('.option-value')
          .eq(1)
          .text();
        const team2Win = $('.grid-event-wrapper')
          .find('.grid-option-group')
          .eq(0)
          .find('.option-value')
          .eq(2)
          .text();

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
      }
    });
  });

  return games;
};

export default getGames;
