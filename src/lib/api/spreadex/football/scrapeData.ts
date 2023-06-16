import spreadexScrapeUrl from '@lib/api/scrapers/spreadexScrapeUrl';
import promisifyRequestsList from '@lib/utils/promisifyRequestsList';

/* Füttert Scraping Funktion mit den Urls, sammelt die Rückgaben und gibt sie in einer Array zürück */
const scrapeData = async (): Promise<string[][] | undefined> => {
  /* 
    TODO: Weitere Wettbewerbe integrieren, wenn Wettbewerbe wieder losgehen.
    spreadex blendet nicht-laufenden Wettbewerbe aus. Hoffentlich benutzen sie jedes Jahr die gleiche URLs
    */
  const urlList = [
    //europe
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/47/fo/c', //eng, premier league
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15836/fo/c66', //fin, Ykkonen
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9746/fo/c66', //ger, bundesliga
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9747/fo/c66', //ger, 2.bundesliga
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15815/fo/c66', //ice, first division
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9737/fo/c66', //ita, serie a
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9739/fo/c66', //ita, serie b
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9736/fo/c66', //spa, la liga
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9740/fo/c66', //spa, la liga 2
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15941/fo/c66', //swe, division 1
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/16085/fo/c66', //swe, Damallsvenskan
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9953/fo/c66', //tur, süper lig
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/16039/fo/c66', //tur, 2. lig
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/79/fo/c66', //int(eur), champions league

    //asia
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/14737/fo/c66', //jap, j-league
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15795/fo/c66', //jap, j-league 2

    //america
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9751/fo/c66', //arg, liga profesional
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15794/fo/c66', //arg, primera nacional
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9750/fo/c66', //bra, serie a
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15852/fo/c66', //chi, primera b
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15820/fo/c66', //per, segunda division
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/5660/fo/c66', //usa, major league soccer

    //africa

    //oceania
  ];

  try {
    return await promisifyRequestsList(urlList, spreadexScrapeUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
