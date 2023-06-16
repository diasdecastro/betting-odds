import { Browser } from 'puppeteer';

/* Scraping Logik für Betway */
const bwinScrapeUrl = async (
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
    await page.bringToFront();
    await page.waitForSelector('.widget-slot');
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    //FIXME: Competition Name wird gepusht, auch wenn keine Spiel sind
    //FIXME: Land wird als Competition Name gepusht, wenn kein Competition Name vorhanden ist
    const pageData: string[] = await page.evaluate(() => {
      const results = [];
      //push competition name first
      const country = $('.breadcrumb-item')
        .eq(-2)
        .find('.breadcrumb-title')
        .text();

      const competition = $('.breadcrumb-item')
        .last()
        .find('.breadcrumb-title')
        .text();

      results.push(`${country} / ${competition}`);

      $('.grid-group-x1')
        .find('.grid-event-wrapper')
        .toArray()
        .forEach((item) => {
          results.push(item.outerHTML);
        });
      console.log(results);
      return results;
    });

    await page.close();

    return pageData;
  } catch (e) {
    return [''];
    throw e;
  }
};

export default bwinScrapeUrl;
