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
  // return scrapedData;

  scrapedData?.map((competition) => {
    competition.map((competitionElem, index) => {
      const $ = cheerio.load(competitionElem);
      // first element is always the name of the competition. the rest are games bundled by date
      if (index === 0) {
        games.push({ competition: competitionElem, games: [] });
      } else {
        // Yeah spread operator. Danke Stackoverflow für die Lösung, die ich nicht verstehe.
        // TODO: Den Kack verstehen
        [...$('.bet-card')].map((game) => {
          const team1 = $(game)
            .find('.event-description__competitor-text')
            .eq(0)
            .text();
          const team2 = $(game)
            .find('.event-description__competitor-text')
            .eq(1)
            .text();
          const team1Win = $(game)
            .find('.bb-sport-event__selection')
            .eq(0)
            .text();
          const draw = $(game).find('.bb-sport-event__selection').eq(1).text();
          const team2Win = $(game)
            .find('.bb-sport-event__selection')
            .eq(2)
            .text();

          /* console.log(
            games?.find((obj) => obj.competition === competition[0])?.games
          ); */
          games
            ?.find((obj) => obj.competition === competition[0])
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

        competitionCounter += 1;
      }
    });
  });

  return games;
};

export default getGames;