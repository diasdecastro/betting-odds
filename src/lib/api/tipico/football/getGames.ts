import * as cheerio from 'cheerio';
import { scrapeData } from './scrapeData';
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
  const games: Array<FootballGameModel> = [];

  const pageData: string[][] | undefined = await scrapeData();
  // fill games array with data
  pageData?.forEach((competition) => {
    competition?.forEach((competitionElem, index) => {
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
                  obj.competition.country === competition[0].split(' / ')[0] &&
                  obj.competition.name === competition[0].split(' / ')[1]
              )
              ?.games.push({
                link: link,
                date: normalizeDateFormat(dateTime, 'tipico'),
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
      }
    });
  });

  return games;
};

export default getGames;
