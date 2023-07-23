import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import betanoScrapeUrl from '../betanoScrapeUrl';
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
    betanoScrapeUrl
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
          bookie: 'betano',
          competition: {
            country: competitionCountry,
            name: competitionName,
          },
          games: [],
        });
      } else {
        const link = $('a').eq(0).attr('href') || '';
        let date = '';
        date =
          $('.events-list__grid__info__datetime')
            .find('span')
            .eq(0)
            .text()
            .trim() +
          ' ' +
          $('.events-list__grid__info__datetime')
            .find('span')
            .eq(1)
            .text()
            .trim();
        // TODO: Fall Spiel ist live
        const team1 = $(
          '.events-list__grid__info__main__participants__participant-name'
        )
          .eq(0)
          .text();
        const team2 = $(
          'events-list__grid__info__main__participants__participant-name'
        )
          .eq(1)
          .text();
        const team1Win = $('.selections')
          .eq(0)
          .find('.selections__selection__odd')
          .eq(0)
          .text();
        const draw = $('.selections')
          .eq(0)
          .find('.selections__selection__odd')
          .eq(1)
          .text();
        const team2Win = $('.selections')
          .eq(0)
          .find('.selections__selection__odd')
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
            date: getStandardizedDateFormat(date, 'betano'),
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
