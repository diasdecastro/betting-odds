import { Page } from 'puppeteer';

/* Scraping Logik für Betway */
const neobetScrapeUrl = async (
  competition: string,
  page: Page
): Promise<string[]> => {
  try {
    await page.bringToFront();
    await page.waitForSelector('.OnsiteContestRow', { timeout: 0 });
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    const pageData: string[] = await page.evaluate(() => {
      // Wenn keine Matches, return leeres Array
      // if ($('.events-list__grid__event').length === 0) return [''];

      const results: string[] = [];

      const oddsArray = $(
        '.ContestStatsAndBetmarkets__RowWrapper-sc-pee85c-0'
      ).toArray();

      $('.OnsiteContestRow')
        .toArray()
        .forEach((item, index) => {
          results.push(item.outerHTML + oddsArray[index].outerHTML);
        });

      return results;
    });

    return [competition, ...pageData];
  } catch (e) {
    return [''];
  }
};

export default neobetScrapeUrl;
