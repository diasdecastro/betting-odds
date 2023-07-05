import { Page } from 'puppeteer';
import startBrowser from './browser';

const promisifyRequestsList = async (
  competitionUrlList: { competition: string; url: string }[],
  scrapeSingleUrl: (
    competitionUrlObj: { competition: string; url: string },
    page: Page
  ) => Promise<string[]>
): Promise<string[][]> => {
  try {
    const browser = await startBrowser();

    if (browser === undefined) throw new Error('Browser is undefined');

    const scrapedData: string[][] = [];
    /* Promises in der Queue und wartet bis alle ausgeführt wurden */
    const promises: Promise<void>[] = competitionUrlList.map(
      async (competitionUrlObj) => {
        const page = await browser.newPage();

        //Macht, dass die Seite richtig geladen wird im headless mode
        await page.setUserAgent(
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
        );

        try {
          await page.goto(competitionUrlObj.url, { timeout: 0 });
        } catch (e) {
          await page.close();
          return;
        }
        await page.addScriptTag({
          url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        });

        const data: string[] = await scrapeSingleUrl(competitionUrlObj, page);
        if (data !== undefined) scrapedData.push(data);
        await page.close();
      }
    );

    await Promise.all(promises);

    // Schließt den Browser und gibt Array zurück
    await browser.close();
    return scrapedData;
  } catch (e) {
    throw e;
  }
};

export default promisifyRequestsList;
