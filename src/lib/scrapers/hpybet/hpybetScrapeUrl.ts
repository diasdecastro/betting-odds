import { Page } from 'puppeteer';

/* Scraping Logik für Betway */
const hpyScrapeUrl = async (
  competitionUrlObj: { competition: string; url: string },
  page: Page
): Promise<string[]> => {
  try {
    await page.bringToFront();
    await page.waitForSelector('.row.rowPref', { timeout: 0 });
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    const pageData: string[] = await page.evaluate(() => {
      // Wenn keine Matches, return leeres Array
      if ($('.row.rowPref.ng-scope').length === 0) return [''];

      const results: string[] = [];

      $('.row.rowPref.ng-scope')
        .toArray()
        .forEach((item) => {
          const date = $(item).closest('[id*=__]').attr('id')?.split('__')[1];
          $(item).attr('date', date || '');
          results.push(item.outerHTML);
        });

      return results;
    });

    return [competitionUrlObj.competition, ...pageData];
  } catch (e) {
    return [''];
  }
};

export default hpyScrapeUrl;
