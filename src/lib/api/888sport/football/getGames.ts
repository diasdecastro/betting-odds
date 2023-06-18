import * as cheerio from 'cheerio';
import scrapeData from './scrapeData';
import {
  normalizeDateFormat,
  normalizeCompetitionName,
  normalizeTeamName,
  normalizeOddsString,
} from '@lib/utils/normalizeDataHelper';

/* Datenstruktur für ein Spiel */
interface FootballGameModel {
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

/* Modelliert Array mit HTML-Strings im Format GameModel 
  und gibt Array mit Elemente im gewünschten Format zurück */
const getGames = async (): Promise<FootballGameModel[]> => {
  const games: FootballGameModel[] = [];

  const pageData: string[][] | undefined = await scrapeData();

  pageData?.forEach((competition) => {
    // go to next competition, if competition has no name
    if (!competition[0]) return;

    competition?.forEach((competitionElem, index) => {
      const $ = cheerio.load(competitionElem);
      // first element is always the name of the competition. the rest are games bundled by date
      if (index === 0) {
        //continue to next competition, if has no competition name
        if (competitionElem === '') return;
        games.push({
          competition: {
            country: competitionElem.split(' / ')[0],
            name: competitionElem.split(' / ')[1],
          },
          games: [],
        });
      } else {
        [...$('.eventList__content-section')].forEach((gameDay) => {
          // let date = $('.bb-content-section__title-item').eq(0).text();

          [...$(gameDay).find('.bet-card')].forEach((game) => {
            const date = $(game).find('time').attr('datetime') || '';

            const link = $(game).find('.event-description').attr('href') || '';

            const team1 = $(game).find('.event-name__text').eq(0).text();

            const team2 = $(game).find('.event-name__text').eq(1).text();

            const team1Win = $(game)
              .find('.bb-sport-event__selection')
              .eq(0)
              .text();

            const draw = $(game)
              .find('.bb-sport-event__selection')
              .eq(1)
              .text();

            const team2Win = $(game)
              .find('.bb-sport-event__selection')
              .eq(2)
              .text();

            games
              ?.find(
                (obj) =>
                  obj.competition.country === competition[0].split(' / ')[0] &&
                  obj.competition.name === competition[0].split(' / ')[1]
              )
              ?.games.push({
                link: link,
                date: normalizeDateFormat(date, '888sport'),
                team1: team1,
                team2: team2,
                //TODO: Odds richtig interpretieren, sodass es einheitlich ist.
                odds: {
                  team1Win: normalizeOddsString(team1Win),
                  draw: normalizeOddsString(draw),
                  team2Win: normalizeOddsString(team2Win),
                },
              });
          });
        });
      }
    });
  });

  return games;
};

export default getGames;
