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

    const pageData: string[] = await page.evaluate(() => {
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

    //push competition url as last element for link. link for game is inaccessible.
    pageData.push(url);

    page.close();

    return pageData;
  } catch (e) {
    throw e;
  }
};

/* Füttert Scraping Funktion mit den Urls, sammelt die Rückgaben und gibt sie in einer Array zürück */
const scrapeData = async (): Promise<string[][] | undefined> => {
  /* TODO: Weitere Wettbewerbe integrieren */
  const urlList = [
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/47/fo/c', //eng, pl
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9736/fo/c66', //esp, la liga
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9740/fo/c66', //esp, la liga 2
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9737/fo/c66', //ita, serie a
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9739/fo/c66', //ita, serie b
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9746/fo/c66', //deu, bl
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9747/fo/c66', //deu, 2.bl
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9953/fo/c66', //tur, süper lig
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/79/fo/c66', //int, cl
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9750/fo/c66', //bra, serie a
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/14737/fo/c66', //jpn, j-league
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15794/fo/c66', //arg, primera nacional
    'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9751/fo/c66', //arg, liga profesional
  ];

  try {
    return await promisifyRequestsList(urlList, scrapeSingleUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
