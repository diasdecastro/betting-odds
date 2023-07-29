import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import neobetScrapeUrl from '../neobetScrapeUrl';
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
    neobetScrapeUrl
  );
  // console.log('test: ', scrapedData);

  if (scrapedData.length === 0) return;

  let competitionCountry: string;
  let competitionName: string;

  scrapedData?.map((competition) => {
    // Wenn das Element leer ist, spring zum nächsten
    if (!competition[0]) return;

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
          bookie: 'neobet',
          competition: {
            country: competitionCountry,
            name: competitionName,
          },
          games: [],
        });
      } else {
        const link = $('a').eq(0).attr('href') || '';
        const date = $('.ContestStatusLabel__Label-sc-1p28e2l-0')
          .text()
          .replace('. ', ' ');

        // TODO: Fall Spiel ist live
        const team1 = $('.Participant__Label-sc-f8w5qy-3').eq(0).text();
        const team2 = $('.Participant__Label-sc-f8w5qy-3').eq(1).text();
        const team1Win = $('.BetmarketColumn__InnerColumn-sc-1kdcezp-1')
          .eq(0)
          .find('.OddButton__Odd-sc-3w8t8y-1')
          .eq(0)
          .text();
        const draw = $('.BetmarketColumn__InnerColumn-sc-1kdcezp-1')
          .eq(0)
          .find('.OddButton__Odd-sc-3w8t8y-1')
          .eq(1)
          .text();
        const team2Win = $('.BetmarketColumn__InnerColumn-sc-1kdcezp-1')
          .eq(0)
          .find('.OddButton__Odd-sc-3w8t8y-1')
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
            date: getStandardizedDateFormat(date, 'neobet'),
            team1: team1.trim(),
            team2: team2.trim(),
            odds: {
              team1Win: getStandardizedOddsFormat(team1Win),
              draw: getStandardizedOddsFormat(draw),
              team2Win: getStandardizedOddsFormat(team2Win),
            },
          });
      }
    });
  });

  return games;
};

export default getGames;
