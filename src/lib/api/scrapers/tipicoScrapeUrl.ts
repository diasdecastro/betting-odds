import { Browser } from 'puppeteer';

const tipicoScrapeUrl = async (
  url: string,
  browser: Browser
): Promise<string[]> => {
  const page = await browser.newPage();
  //Macht, dass die Seite richtig geladen wird im headless mode
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
  );

  await page.goto(url, { timeout: 0 });
  await page.addScriptTag({
    url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
  });

  await page.waitForSelector(
    '.SportsCompetitionsEvents-styles-competitions-events-block, .NoEventsCta-styles-button'
  );

  // return empty, if no events
  const pageHasNoGames = (await page.$('.NoEventsCta-styles-button')) !== null;
  if (pageHasNoGames) {
    await page.close();
    return [''];
  }

  // Speichert Elemente von der Seite zurückgegeben werden in einer Array
  const pageData: string[] = await page.evaluate(() => {
    const results: string[] = [];

    //Competition name
    results.push($('.CompetitionTitle-styles-title').text());

    //Matches in competition
    $('.SportsCompetitionsEvents-styles-competitions-events-block')
      .toArray()
      .forEach((item) => {
        results.push(item.outerHTML);
      });

    return results;
  });

  await page.close();

  return pageData;
};

export default tipicoScrapeUrl;
