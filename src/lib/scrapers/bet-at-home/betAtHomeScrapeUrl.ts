import { Page } from 'puppeteer';

/* Scraping Logik für Betway */
const betAtHomeScrapeUrl = async (
  competitionUrlObj: { competition: string; url: string },
  page: Page
): Promise<string[]> => {
  try {
    await page.bringToFront();
    await page.waitForSelector('.sport-bet-widgets', { timeout: 0 });
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    const pageData: string[] = await page.evaluate(() => {
      // Wenn keine Matches, return leeres Array
      // if ($('.grid-option-group').length === 0) return [''];

      const results: string[] = [];

      $('.h-bgTo-04517f')
        .toArray()
        .forEach((item) => {
          results.push('<table>' + item.outerHTML + '</table>');
        });

      return results;
    });

    return [competitionUrlObj.competition, ...pageData];
  } catch (e) {
    return [''];
  }
};

export default betAtHomeScrapeUrl;
