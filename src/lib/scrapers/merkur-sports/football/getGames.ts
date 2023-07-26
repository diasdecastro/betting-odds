import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import merkurSportsScrapeUrl from '../merkurSportsScrapeUrl';
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
    merkurSportsScrapeUrl
  );

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
          bookie: 'merkur-sports',
          competition: {
            country: competitionCountry,
            name: competitionName,
          },
          games: [],
        });
      } else {
        const link = `en/game/${$('.market').attr('id')?.split('-')[0]}` || '';
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

        games
          ?.find(
            (obj) =>
              obj.competition.country === competitionCountry &&
              obj.competition.name === competitionName
          )
          ?.games.push({
            link: link,
            date: getStandardizedDateFormat(date, 'merkur-sports'),
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
