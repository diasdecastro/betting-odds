import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import bwinScrapeUrl from '../bwinScrapeUrl';
import scrapeAllUrls from '@lib/utils/scrapeAllUrls';
import {
  getNormalizedDateFormat,
  getNormalizedOddsFormat,
} from '@lib/utils/normalizeDataHelper';

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
const getGames = async (): Promise<FootballModel[]> => {
  const games: FootballModel[] = [];

  const scrapedData: string[][] | undefined = await scrapeAllUrls(
    competitionUrlList,
    bwinScrapeUrl
  );

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
          bookie: 'bwin',
          competition: {
            country: competitionCountry,
            name: competitionName,
          },
          games: [],
        });
      } else {
        const link = $('a').attr('href') || '';
        let date = '';
        if ($('.live-icon').length > 0) {
          date = 'live';
        } else {
          date = $('.starting-time').text().replace(' / ', ', ');
        }
        const team1 = $('.participants-pair-game > .participant-wrapper')
          .eq(0)
          .find('.participant')
          .text();
        const team2 = $('.participants-pair-game > .participant-wrapper')
          .eq(1)
          .find('.participant')
          .text();
        const team1Win = $('.grid-event-wrapper')
          .find('.grid-option-group')
          .eq(0)
          .find('.option-value')
          .eq(0)
          .text();
        const draw = $('.grid-event-wrapper')
          .find('.grid-option-group')
          .eq(0)
          .find('.option-value')
          .eq(1)
          .text();
        const team2Win = $('.grid-event-wrapper')
          .find('.grid-option-group')
          .eq(0)
          .find('.option-value')
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
            date: getNormalizedDateFormat(date, 'bwin'),
            team1: team1.trim(),
            team2: team2.trim(),
            odds: {
              team1Win: getNormalizedOddsFormat(team1Win),
              draw: getNormalizedOddsFormat(draw),
              team2Win: getNormalizedOddsFormat(team2Win),
            },
          });
      }
    });
  });

  return games;
};

export default getGames;
