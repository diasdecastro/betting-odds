import { Browser } from 'puppeteer';

/* Scraping Logik für Betway */
const _888sportScrapeUrl = async (
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

    //Warte bis Spiele geladen sind
    await page.waitForSelector(
      '.eventList__content-section, .bb-message-button-card'
    );

    //if no games, return empty
    const pageHasNoGames = (await page.$('.bb-message-button-card')) !== null;
    if (pageHasNoGames) {
      page.close();
      return [''];
    }

    const pageData: string[] = await page.evaluate(() => {
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

    return pageData;
  } catch (e) {
    throw e;
  }
};

export default _888sportScrapeUrl;
