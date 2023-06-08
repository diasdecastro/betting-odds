import { Browser } from 'puppeteer';

import promisifyRequestsList from '@lib/utils/promisifyRequestsList';

/* Scraping Logik für Betway */
/* FIXME: Timeout fixen */
const scrapeSingleUrl = async (
  url: string,
  browser: Browser
): Promise<string[]> => {
  try {
    const page = await browser.newPage();

    await page.goto(url);
    await page.bringToFront();
    await page.waitForSelector('.widget-slot');
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    const scrapedData: string[] = await page.evaluate(() => {
      const results = [];
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

    return scrapedData;
  } catch (e) {
    throw e;
  }
};

/* Füttert Scraping Funktion mit den Urls, sammelt 
die Rückgaben und gibt sie in einer Array zürück */
/* TODO: Promisefy mehrfache URL-Scraping in Hilfsfunktion auslagern */
const scrapeData = async (): Promise<string[][] | undefined> => {
  /* 
        Urls zu scrapen
        Enthält: 
            Deutschland (Bundesliga, 2.Bundesliga, 3.Bundesliga) 
            England (Premier League, League 1, League 2)
            Italien (Serie A, Serie B)
            Spanien (La Liga, La Liga 2)
            Türkei (Süper Lig, 1.Lig)
            Frankreich (Ligue 1, Ligue 2)
    */
  /* TODO: Weitere Wettbewerbe integrieren */
  const urlList = [
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/bundesliga-102842',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/2-bundesliga-102845',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/3-liga-102377',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/premier-league-102841',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-one-101551',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-two-101550',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-a-102846',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-b-102848',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-102829',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-2-102830',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/s%C3%BCper-lig-102832',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/1-lig-102226',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-1-102843',
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-2-102376',
  ];

  try {
    return await promisifyRequestsList(urlList, scrapeSingleUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
