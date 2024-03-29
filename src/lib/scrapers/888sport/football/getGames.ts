import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import _888sportScrapeUrl from '../888sportScrapeUrl';
import scrapeAllUrls from '@lib/utils/scrapeAllUrls';
import {
  getStandardizedDateFormat,
  getStandardizedOddsFormat,
} from '@lib/utils/standardizeDataHelper';

/* TODO: Typ Definition auslagern */
/* Datenstruktur für Fussball */
interface FootballModel {
  bookie: string;
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

/* Gibt Array mit Einträge des Typens FootballModel zurück */
const getGames = async (): Promise<FootballModel[] | void> => {
  const games: FootballModel[] = [];

  const scrapedData: string[][] | undefined = await scrapeAllUrls(
    competitionUrlList,
    _888sportScrapeUrl
  );

  if (scrapedData.length === 0) return;

  let competitionCountry: string;
  let competitionName: string;

  scrapedData?.forEach((competition) => {
    // Wenn das Element leer ist, spring zum nächsten
    if (!competition[0]) return;

    competition?.forEach((competitionData, index) => {
      const $ = load(competitionData);

      /* Das erste Element der Array mit den gescrapten Daten eines einzelnen Wettbewerbs 
      ist immer der Wettbewerbsname */
      if (index === 0) {
        // Wenn der Wettbewerb kein Name hat, spring zum nächsten
        if (competitionData === '') return;

        competitionCountry = competitionData.split(' / ')[0];
        competitionName = competitionData.split(' / ')[1];

        games.push({
          bookie: '888sport',
          competition: {
            country: competitionCountry,
            name: competitionName,
          },
          games: [],
        });
      } else {
        [...$('.eventList__content-section')].forEach((gameDay) => {
          [...$(gameDay).find('.bet-card')].forEach((game) => {
            const date = $(game).find('time').attr('datetime') || '';

            const link = $(game).find('.event-description').attr('href') || '';

            const team1 = $(game).find('.event-name__text').eq(0).text();

            const team2 = $(game).find('.event-name__text').eq(1).text();

            const team1Win = $(game)
              .find('.bb-sport-event__selection')
              .eq(0)
              .text();

            const draw = $(game)
              .find('.bb-sport-event__selection')
              .eq(1)
              .text();

            const team2Win = $(game)
              .find('.bb-sport-event__selection')
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
                date: getStandardizedDateFormat(date, '888sport'),
                team1: team1.trim(),
                team2: team2.trim(),
                //TODO: Odds richtig interpretieren, sodass es einheitlich ist.
                odds: {
                  team1Win: getStandardizedOddsFormat(team1Win),
                  draw: getStandardizedOddsFormat(draw),
                  team2Win: getStandardizedOddsFormat(team2Win),
                },
              });
          });
        });
      }
    });
  });

  return games;
};

export default getGames;
