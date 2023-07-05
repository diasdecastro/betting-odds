import * as cheerio from 'cheerio';
import { scrapeData } from './scrapeData';
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
  // fill games array with data
  pageData?.forEach((competition) => {
    competition?.forEach((competitionElem, index) => {
      const $ = cheerio.load(competitionElem);

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
        let date = '';
        let dateTime = '';
        [
          ...$(
            '.SportsCompetitionsEvents-styles-competitions-events-block'
          ).children(),
        ].forEach((item) => {
          if ($(item).hasClass('EventDateHeader-styles-event-date-header')) {
            date = $(item).text();
          } else {
            dateTime =
              date + ', ' + $(item).find('.EventDateTime-styles-time').text();
            const link = '/de/event' + $(item).attr('href')?.split('/event')[1];
            const team1 = $(item)
              .find('.EventTeams-styles-team-title')
              .eq(0)
              .text();
            const team2 = $(item)
              .find('.EventTeams-styles-team-title')
              .eq(1)
              .text();
            const team1Win = $(item)
              .find('.EventOddButton-styles-odd-button')
              .eq(0)
              .text();
            const draw = $(item)
              .find('.EventOddButton-styles-odd-button')
              .eq(1)
              .text();
            const team2Win = $(item)
              .find('.EventOddButton-styles-odd-button')
              .eq(2)
              .text();

            games
              ?.find(
                (obj) =>
                  obj.competition.country === competitionCountry &&
                  obj.competition.name === competitionName
              )
              ?.games.push({
                link: link,
                date: getNormalizedDateFormat(dateTime, 'tipico'),
                team1: team1,
                team2: team2,
                odds: {
                  team1Win: getNormalizedOddsFormat(team1Win),
                  draw: getNormalizedOddsFormat(draw),
                  team2Win: getNormalizedOddsFormat(team2Win),
                },
              });
          }
        });
      }
    });
  });

  return games;
};

export default getGames;
