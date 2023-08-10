import { Page } from 'puppeteer';

/* Scraping Logik für Betway */
const bwinScrapeUrl = async (
  competition: string,
  page: Page
): Promise<string[]> => {
  try {
    await page.bringToFront();
    await page.waitForSelector('.widget-slot', { timeout: 0 });
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    //FIXME: Competition Name wird gepusht, auch wenn keine Spiel sind
    //FIXME: Land wird als Competition Name gepusht, wenn kein Competition Name vorhanden ist
    const pageData: string[] = await page.evaluate(() => {
      // Wenn keine Matches, return leeres Array
      if ($('.grid-option-group').length === 0) return [''];

      const results: string[] = [];

      $('.grid-group-x1')
        .find('.grid-event-wrapper')
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

export default bwinScrapeUrl;
