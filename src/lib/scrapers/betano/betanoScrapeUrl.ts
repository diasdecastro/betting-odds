import { Page } from 'puppeteer';

/* Scraping Logik für Betway */
const betanoScrapeUrl = async (
  competitionUrlObj: { competition: string; url: string },
  page: Page
): Promise<string[]> => {
  try {
    await page.bringToFront();
    await page.waitForSelector('.league-block', { timeout: 0 });
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    const pageData: string[] = await page.evaluate(() => {
      // Wenn keine Matches, return leeres Array
      if ($('.events-list__grid__event').length === 0) return [''];

      const results: string[] = [];

      $('.events-list__grid__event')
        .toArray()
        .forEach((item) => {
          results.push(item.outerHTML);
        });

      return results;
    });

    return [competitionUrlObj.competition, ...pageData];
  } catch (e) {
    return [''];
  }
};

export default betanoScrapeUrl;
