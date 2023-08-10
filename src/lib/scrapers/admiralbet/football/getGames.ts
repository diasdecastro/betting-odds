import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import admiralbetScrapeUrl from '../admiralbetScrapeUrl';
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
    admiralbetScrapeUrl
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
        let date = $('asw-mini-scoreboard-phases')
          .find('span')
          .text()
          ?.split('. ')[1]
          ?.replace(' • ', ' ');
        // TODO: Fall Spiel ist live
        const team1 = $('asw-mini-scoreboard-competitors')
          .find('div')
          .eq(0)
          .text()
          ?.trim();
        const team2 = $('asw-mini-scoreboard-competitors')
          .find('div')
          .eq(1)
          .text()
          ?.trim();
        const team1Win = $('asw-sports-grid-row-market')
          .eq(0)
          .find('asw-sports-grid-row-selection')
          .eq(0)
          .text();
        const draw = $('asw-sports-grid-row-market')
          .eq(0)
          .find('asw-sports-grid-row-selection')
          .eq(1)
          .text();
        const team2Win = $('asw-sports-grid-row-market')
          .eq(0)
          .find('asw-sports-grid-row-selection')
          .eq(2)
          .text();

        await storeGameData(conn, 'admiralbet_football_games', [
          competitionCountry,
          competitionName,
          link,
          getStandardizedDateFormat(date, 'admiralbet'),
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
