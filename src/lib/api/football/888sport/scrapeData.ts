import { Browser } from 'puppeteer';

import promisifyRequestsList from '@lib/utils/promisifyRequestsList';

/* Scraping Logik für Betway */
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
    //Check ob Seite Spiele hat
    const pageHasNoGames = (await page.$('.bb-message-button-card')) !== null;
    if (pageHasNoGames) {
      page.close();
      return [''];
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
      $('.tournamentEventsList')
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
  /* TODO: Weitere Wettbewerbe integrieren */
  const urlList = [
    'https://www.888sport.de/fussball/deutschland/bundesliga/', //deu, Bundesliga
    'https://www.888sport.de/fussball/italien/serie-a/', //ita, Serie A
    'https://www.888sport.de/fu%C3%9Fball/italien/italien-serie-b-t-319569/', //ita, Serie B
    'https://www.888sport.de/fussball/spanien/la-liga/', //esp, La Liga
    'https://www.888sport.de/fu%C3%9Fball/spanien/spain-segunda-division-t-319629/', //esp, Segunda Div
    'https://www.888sport.de/fussball/frankreich/ligue-1/', //fra, Ligue 1
    'https://www.888sport.de/fu%C3%9Fball/t%C3%BCrkei/t%C3%BCrkei-s%C3%BCper-lig-t-320219/', //tur, Süper Lig
    'https://www.888sport.de/fu%C3%9Fball/t%C3%BCrkei/t%C3%BCrkei-1-lig-t-320221/', //tur, 1 Lig
    'https://www.888sport.de/fu%C3%9Fball/argentinien/argentina-primera-nacional-t-320380/', //arg, Primera Nacional
    'https://www.888sport.de/fu%C3%9Fball/argentinien/argentina-superliga-t-153362/', //arg, Superliga
  ];

  try {
    return await promisifyRequestsList(urlList, scrapeSingleUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
