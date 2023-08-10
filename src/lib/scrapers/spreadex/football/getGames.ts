import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import spreadexScrapeUrl from '../spreadexScrapeUrl';
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
    spreadexScrapeUrl
  );

  if (scrapedData.length === 0) return;

  let competitionCountry: string;
  let competitionName: string;

  scrapedData?.map((competition) => {
    // Wenn das Element leer ist, spring zum nächsten
    if (!competition[0]) return;

    // Link zur Wettbewerbsseite in der letzten Stelle
    const link = competition[competition.length - 1] || '';

    competition.map((competitionData, index) => {
      const $ = load(competitionData);

      /* Das erste Element der Array mit den gescrapten Daten eines einzelnen Wettbewerbs 
      ist immer der Wettbewerbsname */
      if (index === 0) {
        // Wenn der Wettbewerb kein Name hat, spring zum nächsten
        if (competitionData === '') return;

        competitionCountry = competitionData.split(' / ')[0];
        competitionName = competitionData.split(' / ')[1];
      } else {
        [...$('sx-coupon-panel-item')].map(async (game) => {
          const date = $(game).find('.cpi__stats-start-time').text();
          const team1 = $(game).find('.name').text().split(' v ')[0];
          const team2 = $(game).find('.name').text().split(' v ')[1];
          const team1Win = $(game).find('.spx-price-button').eq(0).text();
          const draw = $(game).find('.spx-price-button').eq(1).text();
          const team2Win = $(game).find('.spx-price-button').eq(2).text();

          await storeGameData(conn, 'football', 'spreadex_football_games', [
            competitionCountry,
            competitionName,
            link,
            getStandardizedDateFormat(date, 'spreadex'),
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
      }
    });
  });
};

export default getGames;
