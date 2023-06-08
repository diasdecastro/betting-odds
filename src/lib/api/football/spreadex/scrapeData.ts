import { Browser } from 'puppeteer';

import promisifyRequestsList from '@lib/utils/promisifyRequestsList';

/* Scraping Logik für Betway */
/* TODO: Saubermachen */
const scrapeSingleUrl = async (
  url: string,
  browser: Browser
): Promise<string[]> => {
  try {
    const page = await browser.newPage();

    await page.goto(url);
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    // TODO: Wait for element and close page, if no games
    // await page.waitForSelector('.gl-MarketGroupContainer ');

    const scrapedData: string[] = await page.evaluate(() => {
      const results: string[] = [];
      //Push Wettbewerbsname
      results.push($('.header__page-title').text());
      //Push Spiele
      $('#matches')
        .find('content')
        .toArray()
        .forEach((item) => {
          results.push(item.outerHTML);
        });

      return results;
    });

    page.close();

    return scrapedData;
  } catch (e) {
    throw e;
  }
};

/* Füttert Scraping Funktion mit den Urls, sammelt die Rückgaben und gibt sie in einer Array zürück */
const scrapeData = async (): Promise<string[][] | undefined> => {
  /* 
    Urls zu scrapen
    Enthält: 
        TODO: Deutschland (Bundesliga[x], 2.Bundesliga[x], 3.Bundesliga) 
        TODO: England (Premier League[x], League 1, League 2)
        Italien (Serie A, Serie B)
        Spanien (La Liga, La Liga 2)
        TODO: Türkei (Süper Lig[x], 1.Lig)
        TODO: Frankreich (Ligue 1, Ligue 2)
  */
  /* TODO: Weitere Wettbewerbe integrieren */
  const urlList = [
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/47/fo/c', //en, pl
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9736/fo/c66', //es, la liga
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9740/fo/c66', //es, la liga 2
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9737/fo/c66', //it, serie a
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9739/fo/c66', //it, serie b
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9746/fo/c66', //de, bl
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9747/fo/c66', //de, 2.bl
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9953/fo/c66', //tr, süper lig
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/79/fo/c66', //int, cl
  ];

  try {
    return await promisifyRequestsList(urlList, scrapeSingleUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
