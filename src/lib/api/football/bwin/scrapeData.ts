import { Browser } from 'puppeteer';

import promisifyRequestsList from '@lib/utils/promisifyRequestsList';

/* Scraping Logik für Betway */
const scrapeSingleUrl = async (
  url: string,
  browser: Browser
): Promise<string[]> => {
  try {
    const page = await browser.newPage();

    await page.goto(url, { timeout: 0 });
    await page.bringToFront();
    await page.waitForSelector('.widget-slot');
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    const pageData: string[] = await page.evaluate(() => {
      const results = [];
      //push competition name first
      const competition = $('.breadcrumb-item')
        .last()
        .find('.breadcrumb-title')
        .text();
      results.push(competition);

      $('.grid-group-x1')
        .find('.grid-event-wrapper')
        .toArray()
        .forEach((item) => {
          results.push(item.outerHTML);
        });
      console.log(results);
      return results;
    });

    await page.close();

    return pageData;
  } catch (e) {
    throw e;
  }
};

/* Füttert Scraping Funktion mit den Urls, sammelt 
die Rückgaben und gibt sie in einer Array zürück */
const scrapeData = async (): Promise<string[][] | undefined> => {
  /* TODO: Weitere Wettbewerbe integrieren */
  const urlList = [
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/bundesliga-102842', //deu, bundesliga
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/2-bundesliga-102845', //deu, 2. bundesliga
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/3-liga-102377', //deu, 3. bundesliga
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/premier-league-102841', //eng, premier league
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-one-101551', //eng, league one
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-two-101550', //eng, league two
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-a-102846', //ita, serie a
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-b-102848', // ita, serie b
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-102829', //esp, la liga
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-2-102830', //esp la liga 2
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/s%C3%BCper-lig-102832', //tur, süper lig
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/1-lig-102226', //tur, 1. lig
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-1-102843', //fra, ligue 1
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-2-102376', //fra, ligue 2
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/liga-profesional-de-futbol-102540', //arg, liga profesional
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/primera-nacional-102234', //arg, primera nacional
  ];

  try {
    return await promisifyRequestsList(urlList, scrapeSingleUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
