import { Page } from 'puppeteer';

const tipicoScrapeUrl = async (
  competition: string,
  page: Page
): Promise<string[]> => {
  try {
    //Wartet auf Spiele oder Container für "Keine Spiele"
    await page.waitForFunction(
      () =>
        document.querySelectorAll(
          '.SportsCompetitionsEvents-styles-competitions-events-block, .NoEventsCta-styles-button'
        ).length,
      { timeout: 0 }
    );

    /* Klickt Cookie Banner weg */
    /* const hasCookieBanner = (await page.$('#_evidon-accept-button')) !== null;
    if (hasCookieBanner) await page.click('#_evidon-accept-button'); */

    // return empty, if no events
    const pageHasNoGames =
      (await page.$('.NoEventsCta-styles-button')) !== null;
    if (pageHasNoGames) {
      return [''];
    }

    // Speichert Elemente von der Seite zurückgegeben werden in einer Array
    const pageData: string[] = await page.evaluate(() => {
      const results: string[] = [];

      //Matches in competition
      $('.SportsCompetitionsEvents-styles-competitions-events-block')
        .toArray()
        .forEach((item) => {
          results.push(item.outerHTML);
        });

      return results;
    });

    return [competition, ...pageData];
  } catch (e) {
    //TODO: Fehler richtig abfangen und nur leeres Array returnen, wenn ein Timeout beim warten auf Selector vorliegt
    return [''];
  }
};

export default tipicoScrapeUrl;
