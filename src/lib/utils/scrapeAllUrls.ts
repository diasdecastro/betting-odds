import { Page } from 'puppeteer';
import startCluster from './browserCluster';

interface CompetitionUrlObject {
  competition: string;
  url: string;
}

/* Packt alle CompetitionURL in einer Queue, wartet bis die Seiten gescraped werden und
gibt die Ergebnisse zurück */
const scrapeAllUrls = async (
  competitionUrlList: CompetitionUrlObject[],
  scrapeSingleUrl: (competition: string, page: Page) => Promise<string[]>
): Promise<string[][]> => {
  const scrapedData: string[][] = [];

  const cluster = await startCluster();

  if (cluster === undefined) throw new Error('Cluster is undefined');

  await cluster.task(async ({ page, data: competitionUrlObj }) => {
    //Macht, dass die Seite richtig geladen wird im headless mode
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    );
    //Fügt JQuery hinzu
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    await page.goto(competitionUrlObj.url);

    const data: string[] = await scrapeSingleUrl(
      competitionUrlObj.competition,
      page
    );
    if (data !== undefined) scrapedData.push(data);
    await page.close();
  });

  competitionUrlList.forEach((competitionUrlObj) => {
    return cluster.queue(competitionUrlObj);
  });

  await cluster.idle();
  console.log('Closing Cluster...');
  await cluster.close();
  return scrapedData;
};

export default scrapeAllUrls;
