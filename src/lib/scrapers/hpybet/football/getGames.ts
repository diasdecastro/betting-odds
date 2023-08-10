import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import hpyScrapeUrl from '../hpybetScrapeUrl';
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
    hpyScrapeUrl
  );

  if (scrapedData.length === 0) return;

  let competitionCountry: string;
  let competitionName: string;

  scrapedData?.map((competition) => {
    // Wenn das Element leer ist, spring zum nächsten
    if (!competition[0]) return;

    competition.map(async (competitionData, index) => {
      const $ = load(competitionData);

      /* Das erste Element der Array mit den gescrapten Daten eines einzelnen Wettbewerbs 
      ist immer der Wettbewerbsname */
      if (index === 0) {
        // Wenn der Wettbewerb kein Name hat, spring zum nächsten
        if (competitionData === '') return;

        competitionCountry = competitionData.split(' / ')[0];
        competitionName = competitionData.split(' / ')[1];
      } else {
        const link = $('a').eq(0).attr('href') || '';
        const date =
          $('div').attr('date')?.replaceAll('-', '.') +
          ' ' +
          $('.hourMatchFootball').text();

        // TODO: Fall Spiel ist live
        const team1 = $('a').eq(0).text().split(' - ')[0];
        const team2 = $('a').eq(0).text().split(' - ')[1];
        // Warum machen sie andersrum :(
        const team1Win = $('.eightFirstCol')
          .find('.footballBlueBetting')
          .eq(-1)
          .text();
        const draw = $('.eightFirstCol')
          .find('.footballBlueBetting')
          .eq(-2)
          .text();
        const team2Win = $('.eightFirstCol')
          .find('.footballBlueBetting')
          .eq(-3)
          .text();

        await storeGameData(conn, 'hpybet_football_games', [
          competitionCountry,
          competitionName,
          link,
          getStandardizedDateFormat(date, 'hpybet'),
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
      }
    });
  });
};

export default getGames;
