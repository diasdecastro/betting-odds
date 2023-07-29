import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import spreadexScrapeUrl from '../spreadexScrapeUrl';
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

        games.push({
          bookie: 'spreadex',
          competition: {
            country: competitionCountry,
            name: competitionName,
          },
          games: [],
        });
      } else {
        [...$('sx-coupon-panel-item')].map((game) => {
          const date = $(game).find('.cpi__stats-start-time').text();
          const team1 = $(game).find('.name').text().split(' v ')[0];
          const team2 = $(game).find('.name').text().split(' v ')[1];
          const team1Win = $(game).find('.spx-price-button').eq(0).text();
          const draw = $(game).find('.spx-price-button').eq(1).text();
          const team2Win = $(game).find('.spx-price-button').eq(2).text();

          games
            ?.find(
              (obj) =>
                obj.competition.country === competitionCountry &&
                obj.competition.name === competitionName
            )
            ?.games.push({
              link: link,
              date: getStandardizedDateFormat(date, 'spreadex'),
              team1: team1.trim(),
              team2: team2.trim(),
              odds: {
                team1Win: getStandardizedOddsFormat(team1Win),
                draw: getStandardizedOddsFormat(draw),
                team2Win: getStandardizedOddsFormat(team2Win),
              },
            });
        });
      }
    });
  });

  return games;
};

export default getGames;
