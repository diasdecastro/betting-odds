import * as cheerio from 'cheerio';
import scrapeData from './scrapeData';

/* Datenstruktur für ein Spiel */
/* TODO: Spiel Datum/Uhrzeit hinzufügen */
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
  const games: FootballGameModel[] = [];
  let competitionCounter = 0;

  const scrapedData: string[][] | undefined = await scrapeData();

  scrapedData?.map((competition) => {
    competition.map((gamesInCompetition, index) => {
      const $ = cheerio.load(gamesInCompetition);
      if (index === 0) {
        games.push({ competition: gamesInCompetition, games: [] });
      } else {
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

        games[competitionCounter]['games'].push({
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

    competitionCounter += 1;
  });

  return games;
};

export default getGames;