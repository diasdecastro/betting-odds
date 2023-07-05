import spreadexScrapeUrl from '@lib/api/spreadex/spreadexScrapeUrl';
import promisifyRequestsList from '@lib/utils/promisifyRequestsList';

/* Füttert Scraping Funktion mit den Urls, sammelt die Rückgaben und gibt sie in einer Array zürück */
const scrapeData = async (): Promise<string[][] | undefined> => {
  /* 
    TODO: Weitere Wettbewerbe integrieren, wenn Wettbewerbe wieder losgehen.
    spreadex blendet nicht-laufenden Wettbewerbe aus. Hoffentlich benutzen sie jedes Jahr die gleiche URLs
    */
  const competitionUrls = [
    //europe
    {
      competition: 'ENG / Premier League',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/47/fo/c',
    },
    {
      competition: 'ESP / La Liga',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9736/fo/c66',
    },
    {
      competition: 'ESP / La Liga 2',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9740/fo/c66',
    },
    {
      competition: 'FIN / Ykkönen',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15836/fo/c66',
    },
    {
      competition: 'GER / Bundesliga',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9746/fo/c66',
    },
    {
      competition: 'GER / 2. Bundesliga',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9747/fo/c66',
    },
    {
      competition: 'ISL / Besta deild karla', // First Division?
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15815/fo/c66',
    },
    {
      competition: 'ITA / Serie A',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9737/fo/c66',
    },
    {
      competition: 'ITA / Serie B',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9739/fo/c66',
    },
    {
      competition: 'SWE / Allsvenskan', // First Division (Men)?
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15941/fo/c66',
    },
    {
      competition: 'SWE / Damallsvenskan', // First Division (Women)?
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/16085/fo/c66',
    },
    {
      competition: 'TUR / Süper Lig',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9953/fo/c66',
    },
    {
      competition: 'TUR / 2. Lig',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/16039/fo/c66',
    },
    {
      competition: 'INT / Champions League',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/79/fo/c66',
    },

    //asia
    {
      competition: 'JPN / J1 League',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/14737/fo/c66',
    },
    {
      competition: 'JPN / J2 League',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15795/fo/c66',
    },

    //america
    {
      competition: 'ARG / Primera División',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9751/fo/c66',
    },
    {
      competition: 'ARG / Primera Nacional',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15794/fo/c66',
    },
    {
      competition: 'BRA / Série A',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9750/fo/c66',
    },
    {
      competition: 'CHL / Primera B',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15852/fo/c66',
    },
    {
      competition: 'PER / Liga 2',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15820/fo/c66',
    },
    {
      competition: 'USA / Major Soccer League',
      url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/5660/fo/c66',
    },

    //africa

    //oceania
  ];

  try {
    return await promisifyRequestsList(competitionUrls, spreadexScrapeUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
