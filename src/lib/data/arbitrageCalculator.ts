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

interface ArbitrageBets {
  competition: {
    country: string;
    name: string;
  };
  arbitrageOportunities: {
    games: object[][];
    // strategy: object;
  }[];
}

//NOTE: Kein Arbitrage gefunden. Zwingen und testen
// TODO: Zukünftig Rechner für andere Formate hinzufügen
// TODO: Typen strikter machen
// TODO: Error Handling
// TODO: Optimale Strategie implementieren
const arbitrageCalculator = (
  competitionBundleArr: CompetitionBundle[]
): ArbitrageBets[] => {
  const results: ArbitrageBets[] = [];
  competitionBundleArr.forEach((competitionBundle) => {
    competitionBundle.gameBundles.forEach((bundle) => {
      if (bundle.length < 3) return;

      const permutations = [
        ['team1Win', 'draw', 'team2Win'],
        ['team1Win', 'team2Win', 'draw'],
        ['draw', 'team1Win', 'team2Win'],
        ['draw', 'team2Win', 'team1Win'],
        ['team2Win', 'team1Win', 'draw'],
        ['team2Win', 'draw', 'team1Win'],
      ];

      for (let i = 0; i < bundle.length - 3; i++) {
        for (let j = i + 1; j < bundle.length - 2; j++) {
          for (let k = j + 1; k < bundle.length - 1; k++) {
            permutations.forEach((order) => {
              const p1 = 1 / bundle[i].gameData.odds[order[0]];
              const p2 = 1 / bundle[j].gameData.odds[order[1]];
              const p3 = 1 / bundle[k].gameData.odds[order[2]];

              const oportunitiesArray = results?.find(
                (obj) =>
                  obj.competition.country ===
                    competitionBundle.competition.country &&
                  obj.competition.name === competitionBundle.competition.name
              );

              if ((p1 + p2 + p3 < 1 || true) && oportunitiesArray) {
                oportunitiesArray.arbitrageOportunities.games.push([
                  bundle[i],
                  bundle[j],
                  bundle[k],
                ]);
              } else {
                results.push({
                  competition: {
                    country: competitionBundle.competition.country,
                    name: competitionBundle.competition.name,
                  },
                  arbitrageOportunities: {
                    games: [[bundle[i], bundle[j], bundle[k]]],
                  },
                });
              }
            });
          }
        }
      }
    });
  });
  return results;
};

export default arbitrageCalculator;

/* 
  Beispiel für competitionBundle:
  {
    "competition": {
        "country": "ESP",
        "name": "La Liga"
    },
    "gameBundles": [
        [
            {
                "bookie": "888sport",
                "gameData": {
                    "link": "/fußball/spanien/spain-primera-division/ud-almeria-v-rayo-vallecano-e-3050120/",
                    "date": "2023-08-11T17:30:00.000Z",
                    "team1": "UD Almería",
                    "team2": "Rayo Vallecano",
                    "odds": {
                        "team1Win": 2.4,
                        "draw": 3.25,
                        "team2Win": 3
                    }
                }
            },
            {
                "bookie": "bwin",
                "gameData": {
                    "link": "/de/sports/events/almeria-rayo-2:5495984",
                    "date": "2023-08-13T19:00:00.000Z",
                    "team1": " UD Almeria",
                    "team2": " Rayo Vallecano",
                    "odds": {
                        "team1Win": 2.4,
                        "draw": 3.4,
                        "team2Win": 2.87
                    }
                }
            }
        ]
    ]
}
*/
