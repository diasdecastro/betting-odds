import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import merkurSportsScrapeUrl from '../merkurSportsScrapeUrl';
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
    merkurSportsScrapeUrl
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
        const link = `/en/game/${$('.market').attr('id')?.split('-')[0]}` || '';
        const date = (
          $('.standings__time').text().trim().split(' ')[1] +
          $('.standings__starttime').text()
        ).trim();

        // TODO: Fall Spiel ist live
        const team1 = $('.game__team').eq(0).attr('title') || '';
        const team2 = $('.game__team').eq(1).attr('title') || '';
        const team1Win = $('.market-list__element')
          .eq(0)
          .find('.odd-value')
          .eq(0)
          .text();
        const draw = $('.market-list__element')
          .eq(0)
          .find('.odd-value')
          .eq(1)
          .text();
        const team2Win = $('.market-list__element')
          .eq(0)
          .find('.odd-value')
          .eq(2)
          .text();

        await storeGameData(conn, 'merkur_sports_football_games', [
          competitionCountry,
          competitionName,
          link,
          getStandardizedDateFormat(date, 'merkur-sports'),
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
