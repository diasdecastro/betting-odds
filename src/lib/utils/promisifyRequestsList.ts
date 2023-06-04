import { Browser } from 'puppeteer';
import startBrowser from './browser';

const promisifyRequestsList = async (
  urlList: string[],
  scrapeSingleUrl: (url: string, browser: Browser) => Promise<string[]>
): Promise<string[][]> => {
  try {
    const browser = await startBrowser();

    if (browser === undefined) throw new Error('Browser is undefined');

    const scrapedData: string[][] = [];

    /* Promises in der Queue und wartet bis alle ausgeführt wurden */
    const promises = urlList.map(async (url) => {
      const data = await scrapeSingleUrl(url, browser);
      if (data !== undefined) scrapedData.push(data);
    });
    await Promise.all(promises);

    // Schließt den Browser und gibt Array zurück
    browser.close();
    return scrapedData;
  } catch (e) {
    throw e;
  }
};

export default promisifyRequestsList;
