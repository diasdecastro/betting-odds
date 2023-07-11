import { Browser, Page } from 'puppeteer';

/* Scraping Logik für spreadex */
/* TODO: Saubermachen */
const spreadexScrapeUrl = async (
  competitionUrlObj: { competition: string; url: string },
  page: Page
): Promise<string[]> => {
  try {
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    // TODO: Wait for element and close page, if no games
    // await page.waitForSelector('.gl-MarketGroupContainer ');

    const pageData: string[] = await page.evaluate(() => {
      // Wenn keine Matches, return leeres Array
      if ($('#matches').length === 0) return [''];

      const results: string[] = [];

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
    pageData.push(competitionUrlObj.url);

    return [competitionUrlObj.competition, ...pageData];
  } catch (e) {
    //TODO: Fehler richtig abfangen und nur leeres Array returnen, wenn ein Timeout beim warten auf Selector vorliegt
    return [''];
    // throw e;
  }
};

export default spreadexScrapeUrl;
