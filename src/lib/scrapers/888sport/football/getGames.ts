import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import _888sportScrapeUrl from '../888sportScrapeUrl';
import scrapeAllUrls from '@lib/utils/scrapeAllUrls';
import {
  getStandardizedDateFormat,
  getStandardizedOddsFormat,
} from '@lib/utils/standardizeDataHelper';
import { connectDb } from '@lib/utils/db';
import storeGameData from '@lib/data/storeGameData';

/* Gibt Array mit Einträge des Typens FootballModel zurück */
const getGames = async (): Promise<void> => {
  const conn = connectDb();

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
      } else {
        [...$('.eventList__content-section')].forEach((gameDay) => {
          [...$(gameDay).find('.bet-card')].forEach(async (game) => {
            const date = $(game).find('time').attr('datetime') || '';

            const link = $(game).find('.event-description').attr('href') || '';

            const team1 = $(game)
              .find('.event-name__text')
              .eq(0)
              .text()
              ?.trim();

            const team2 = $(game)
              .find('.event-name__text')
              .eq(1)
              .text()
              ?.trim();

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

            await storeGameData(conn, '888_sport_football_games', [
              competitionCountry,
              competitionName,
              link,
              getStandardizedDateFormat(date, '888sport'),
              team1,
              team2,
              getStandardizedOddsFormat(team1Win),
              getStandardizedOddsFormat(draw),
              getStandardizedOddsFormat(team2Win),
              getStandardizedDateFormat('', 'now'),
              false,
              link,
              getStandardizedOddsFormat(team1Win),
              getStandardizedOddsFormat(draw),
              getStandardizedOddsFormat(team2Win),
            ]);
          });
        });
      }
    });
  });
};

export default getGames;
