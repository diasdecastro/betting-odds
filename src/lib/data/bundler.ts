import Fuse from 'fuse.js';

interface CompetitionBundle {
  competition: {
    country: string;
    name: string;
  };
  gameBundles: {
    bookie: string;
    gameData: object;
  }[][];
}

/* Diese Funktion nimmt die gescrapete Daten von den Einzelnen Bookies und bundelt die
die Spiele zusammen */
/* TODO: Scheint zu Funktionieren. TESTEN, TESTEN, TESTEN */
/* TODO: Auf Datum Prüfen */
//TODO: Typen strikter machen
//TODO: Error Handling
const bundler = (...bookieScrapedData: any[][]): CompetitionBundle[] => {
  let allScrapedData: any[][] = [];
  let results: CompetitionBundle[] = [];
  for (const dataFromBookie of bookieScrapedData) {
    allScrapedData.push(dataFromBookie);
  }

  allScrapedData.forEach((bookie) => {
    bookie.forEach((bookieCompetitionObj) => {
      let getCompetition: CompetitionBundle;
      const findCompetitionInResults = results.find(
        (obj) =>
          obj.competition.country ===
            bookieCompetitionObj.competition.country &&
          obj.competition.name === bookieCompetitionObj.competition.name
      );

      if (findCompetitionInResults) {
        getCompetition = findCompetitionInResults;
      } else {
        getCompetition = {
          competition: {
            country: bookieCompetitionObj.competition.country,
            name: bookieCompetitionObj.competition.name,
          },
          gameBundles: [],
        };
        results.push(getCompetition);
      }

      let bool = true;
      bookieCompetitionObj.games.forEach((game) => {
        if (getCompetition.gameBundles.length > 0) {
          getCompetition.gameBundles.forEach((bundle) => {
            const fuseTeam1 = new Fuse(bundle, {
              keys: ['gameData.team1'],
              includeScore: true,
              minMatchCharLength: 4,
              threshold: 0.5,
            });
            const fuseTeam2 = new Fuse(bundle, {
              keys: ['gameData.team2'],
              includeScore: true,
              minMatchCharLength: 4,
              threshold: 0.5,
            });

            let searchTeam1 = fuseTeam1.search(game.team1);
            let searchTeam2 = fuseTeam2.search(game.team2);

            let bestMatch = null;
            let bestScore = Infinity;
            let totalScore;

            for (let i = 0; i < getCompetition.gameBundles.length; i++) {
              const scoreTeam1 =
                (searchTeam1[i] && searchTeam1[i].score) || Infinity;
              const scoreTeam2 =
                (searchTeam2[i] && searchTeam2[i].score) || Infinity;
              totalScore = scoreTeam1 + scoreTeam2;

              if (totalScore < bestScore) {
                bestScore = totalScore;
                bestMatch = getCompetition.gameBundles[i];
              }
            }
            if (totalScore < 1) {
              bool = false;
              bestMatch?.push({
                // totalScore: totalScore,
                bookie: bookieCompetitionObj.bookie,
                gameData: game,
              });
            }
          });
        } else {
          bool = false;
          getCompetition.gameBundles.push([
            {
              // totalScore: 'initial',
              bookie: bookieCompetitionObj.bookie,
              gameData: game,
            },
          ]);
        }

        if (bool) {
          getCompetition.gameBundles.push([
            {
              // totalScore: 'initial 2',
              bookie: bookieCompetitionObj.bookie,
              gameData: game,
            },
          ]);
        }
      });
    });
  });

  return results;
};

export default bundler;
