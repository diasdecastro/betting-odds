import * as cheerio from 'cheerio';
import { scrapeData } from './scrapeData';

/* Datenstruktur für ein Spiel */
/* TODO: Spiel Datum/Uhrzeit hinzufügen */
/* TODO: Was ist der Unterschied zwischen ein Typ ein ein Interface */
interface FootballGameModel {
  competition: string;
  games: {
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
  let competitionName: string;

  const scrapedData: string[] | undefined = await scrapeData();

  // fill games array with data
  scrapedData?.map((item) => {
    const $ = cheerio.load(item);

    if ($(item).hasClass('CompetitionHeader-styles-competition-header')) {
      // leagueCounter++;
      competitionName = $(item)
        .find('.CompetitionTitle-styles-title')
        .text()
        .split('/ ')[1];

      games.push({ competition: competitionName, games: [] });
    } else if (
      $(item).hasClass(
        'SportsCompetitionsEvents-styles-competitions-events-block'
      )
    ) {
      let count = 1;
      $(item)
        .find('.EventRow-styles-event-row')
        .toArray()
        .forEach((item) => {
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
          // console.log(games?.find((item) => item.competition === competitionName));
          games
            ?.find((item) => item.competition === competitionName)
            ?.games.push({
              team1: team1,
              team2: team2,
              odds: {
                team1Win: team1Win,
                draw: draw,
                team2Win: team2Win,
              },
            });
        });
    }
  });

  return games;
};

export default getGames;
