import { load } from 'cheerio';
import competitionUrlList from './competitionUrlList';
import tipicoScrapeUrl from '../tipicoScrapeUrl';
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
    tipicoScrapeUrl
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

        games.push({
          bookie: 'tipico',
          competition: {
            country: competitionCountry,
            name: competitionName,
          },
          games: [],
        });
      } else {
        let date = '';
        let dateTime = '';
        [
          ...$(
            '.SportsCompetitionsEvents-styles-competitions-events-block'
          ).children(),
        ].forEach((item) => {
          if ($(item).hasClass('EventDateHeader-styles-event-date-header')) {
            date = $(item).text();
          } else {
            dateTime =
              date + ', ' + $(item).find('.EventDateTime-styles-time').text();
            const link = '/de/event' + $(item).attr('href')?.split('/event')[1];
            const team1 = $(item)
              .find('.EventTeams-styles-team-title')
              .eq(0)
              .text();
            const team2 = $(item)
              .find('.EventTeams-styles-team-title')
              .eq(1)
              .text();
            const team1Win = $(item)
              .find('.EventOddButton-styles-odd-button')
              .eq(0)
              .text();
            const draw = $(item)
              .find('.EventOddButton-styles-odd-button')
              .eq(1)
              .text();
            const team2Win = $(item)
              .find('.EventOddButton-styles-odd-button')
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
                date: getStandardizedDateFormat(dateTime, 'tipico'),
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
      }
    });
  });

  return games;
};

export default getGames;
