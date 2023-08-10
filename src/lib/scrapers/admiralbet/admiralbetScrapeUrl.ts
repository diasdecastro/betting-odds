import { Page } from 'puppeteer';

/* Scraping Logik für Betway */
const admiralbetScrapeUrl = async (
  competition: string,
  page: Page
): Promise<string[]> => {
  try {
    await page.bringToFront();
    await page.waitForSelector('asw-sports-grid-row-event', { timeout: 0 });
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    const pageData: string[] = await page.evaluate(() => {
      // Wenn keine Matches, return leeres Array
      // if ($('asw-sports-grid-row-event').length === 0) return [''];

      const results: string[] = [];

      $('asw-sports-grid-row-event')
        .toArray()
        .forEach((item) => {
          results.push(item.outerHTML);
        });

      return results;
    });

    return [competition, ...pageData];
  } catch (e) {
    return [''];
  }
};

export default admiralbetScrapeUrl;
