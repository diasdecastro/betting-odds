import { Browser } from 'puppeteer';

const bet365ScrapeUrl = async (
  url: string,
  browser: Browser
): Promise<string[]> => {
  try {
    const page = await browser.newPage();

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    );

    await page.goto(url, { timeout: 0 });
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });
    const pageData: string[] = await page.evaluate(() => {
      const results: string[] = [];
      //competition
      results.push(
        $('.sph-EventHeader_Label > span').text().replace('-', '/'),
        $('.src-MarketGroup_Container ').html()
      );
      return results;
    });
    await page.close();
    return pageData;
  } catch (e) {
    return [''];
  }
};
export default bet365ScrapeUrl;
