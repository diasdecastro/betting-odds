import { Page } from 'puppeteer';

/* Scraping Logik für Betway */
const tipwinScrapeUrl = async (
  competition: string,
  page: Page
): Promise<string[]> => {
  try {
    await page.bringToFront();
    await page.waitForSelector('.offer__team__name', { timeout: 0 });
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    const pageData: string[] = await page.evaluate(() => {
      // Wenn keine Matches, return leeres Array
      // if ($('.events-list__grid__event').length === 0) return [''];

      const results: string[] = [];

      $('.offer__body__row')
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

export default tipwinScrapeUrl;
