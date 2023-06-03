import { Browser } from 'puppeteer';
import { startBrowser } from '@lib/utils/browser';

/* Scraping Logik für Betway */
const scrapeUrl = async (url: string, browser: Browser) => {
  try {
    const page = await browser.newPage();

    await page.goto(url);
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });
    //Check ob Seite Spiele hat
    const pageHasNoGames = (await page.$('.bb-message-button-card')) !== null;
    if (pageHasNoGames) {
      page.close();
      return;
    }

    //Warte bis Spiele geladen sind
    await page.waitForSelector('.eventList__content-section');

    const scrapedData: string[] = await page.evaluate(() => {
      const results: string[] = [];
      //Competition Name
      results.push(
        $('.bb-breadcrumbs__lastVisible')
          .find('.bb-breadcrumbs__levelTwo__text')
          .text()
      );

      //Matches in competition
      $('.eventList__content-section')
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
        TODO: Deutschland (Bundesliga [x], 2.Bundesliga, 3.Bundesliga) 
        TODO: England (Premier League, League 1, League 2)
        Italien (Serie A, Serie B)
        Spanien (La Liga, La Liga 2)
        Türkei (Süper Lig, 1.Lig)
        TODO: Frankreich (Ligue 1 [x], Ligue 2)
  */
  /* TODO: Weitere Wettbewerbe integrieren */
  const urls = [
    'https://www.888sport.de/fussball/deutschland/bundesliga/',
    'https://www.888sport.de/fussball/italien/serie-a/',
    'https://www.888sport.de/fu%C3%9Fball/italien/italien-serie-b-t-319569/',
    'https://www.888sport.de/fussball/spanien/la-liga/',
    'https://www.888sport.de/fu%C3%9Fball/spanien/spain-segunda-division-t-319629/',
    'https://www.888sport.de/fussball/frankreich/ligue-1/',
    'https://www.888sport.de/fu%C3%9Fball/t%C3%BCrkei/t%C3%BCrkei-s%C3%BCper-lig-t-320219/',
    'https://www.888sport.de/fu%C3%9Fball/t%C3%BCrkei/t%C3%BCrkei-1-lig-t-320221/',
  ];

  try {
    const browser = await startBrowser();

    if (browser === undefined) throw new Error('Browser is undefined');

    const scrapedData: string[][] = [];

    /* Promises in der Queue und wartet bis alle ausgeführt wurden */
    const promises = urls.map(async (url) => {
      const data = await scrapeUrl(url, browser);
      if (data !== undefined) scrapedData.push(data);
    });
    await Promise.all(promises);

    // Schließt den Browser und gibt Array zurück
    browser.close();
    return scrapedData;
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
