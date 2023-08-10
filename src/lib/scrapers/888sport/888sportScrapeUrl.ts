import { Page } from 'puppeteer';

/* Scraping Logik für Betway */
const _888sportScrapeUrl = async (
  competitionUrlObj: { competition: string; url: string },
  page: Page
): Promise<string[]> => {
  try {
    //Wartet auf Spiele oder Container für "Keine Spiele"
    await page.waitForFunction(
      () =>
        document.querySelectorAll(
          '.eventList__content-section, .bb-message-button-card'
        ).length,
      { timeout: 0 }
    );

    //if no games, return empty
    const pageHasNoGames = (await page.$('.bb-message-button-card')) !== null;
    if (pageHasNoGames) {
      return [''];
    }

    const pageData: string[] = await page.evaluate(() => {
      const results: string[] = [];

      //Matches in competition
      $('.tournamentEventsList')
        .toArray()
        .forEach((item) => {
          results.push(item.outerHTML);
        });

      return results;
    });

    return [competitionUrlObj.competition, ...pageData];
  } catch (e) {
    //TODO: Fehler richtig abfangen und nur leeres Array returnen, wenn ein Timeout beim warten auf Selector vorliegt
    return [''];
  }
};

export default _888sportScrapeUrl;
