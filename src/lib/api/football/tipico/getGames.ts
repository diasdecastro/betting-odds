import * as cheerio from 'cheerio';
import { scrapeData } from './scrapeData';

/* Datenstruktur für ein Spiel */
interface FootballGameModel {
  competition: string;
  games: {
    link: string;
    date: string;
    team1: string;
    team2: string;
    odds: {
      team1Win: string;
      draw: string;
      team2Win: string;
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
        games.push({ competition: competitionElem, games: [] });
      } else {
        let date = '';
        [
          ...$(
            '.SportsCompetitionsEvents-styles-competitions-events-block'
          ).children(),
        ].forEach((item) => {
          if ($(item).hasClass('EventDateHeader-styles-event-date-header')) {
            date = $(item).text();
          } else {
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
              ?.find((item) => item.competition === competition[0])
              ?.games.push({
                link: link,
                date: date,
                team1: team1,
                team2: team2,
                odds: {
                  team1Win: team1Win,
                  draw: draw,
                  team2Win: team2Win,
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
