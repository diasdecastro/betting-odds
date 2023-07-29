import { Page } from 'puppeteer';
import startBrowser from './browser';

interface CompetitionUrlObject {
  competition: string;
  url: string;
}

/* Packt alle CompetitionURL in einer Queue, wartet bis die Seiten gescraped werden und
gibt die Ergebnisse zurück */
const scrapeAllUrls = async (
  competitionUrlList: CompetitionUrlObject[],
  scrapeSingleUrl: (
    competitionUrlObj: CompetitionUrlObject,
    page: Page
  ) => Promise<string[]>
): Promise<string[][]> => {
  const browser = await startBrowser();

  if (browser === undefined) throw new Error('Browser is undefined');

  const scrapedData: string[][] = [];

  const promises: Promise<void>[] = competitionUrlList.map(
    async (competitionUrlObj) => {
      const page = await browser.newPage();

      //Macht, dass die Seite richtig geladen wird im headless mode
      await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
      );

      try {
        if (competitionUrlObj.url === '') {
          await page.close();
          return;
        }
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

  console.log('Closing Browser...');
  await browser.close();
  return scrapedData;
};

export default scrapeAllUrls;
