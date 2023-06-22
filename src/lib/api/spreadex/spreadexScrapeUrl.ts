import { Browser } from 'puppeteer';

/* Scraping Logik für spreadex */
/* TODO: Saubermachen */
const spreadexScrapeUrl = async (
  url: string,
  browser: Browser
): Promise<string[]> => {
  try {
    const page = await browser.newPage();
    //Macht, dass die Seite richtig geladen wird im headless mode
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    );

    await page.goto(url, { timeout: 0 });
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    // TODO: Wait for element and close page, if no games
    // await page.waitForSelector('.gl-MarketGroupContainer ');

    const pageData: string[] = await page.evaluate(() => {
      // Wenn keine Matches, return leeres Array
      if ($('#matches').length === 0) return [''];

      const results: string[] = [];
      //Push Wettbewerbsname
      results.push($('.header__page-title').text().replace('-', '/'));

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
    //TODO: Fehler richtig abfangen und nur leeres Array returnen, wenn ein Timeout beim warten auf Selector vorliegt
    return [''];
    // throw e;
  }
};

export default spreadexScrapeUrl;