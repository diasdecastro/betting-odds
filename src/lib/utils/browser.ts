import { Browser, launch } from 'puppeteer';

const startBrowser = async (): Promise<Browser | undefined> => {
  let browser;
  try {
    console.log('Opening Browser...');
    browser = await launch({
      headless: true,
      args: ['--diable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
    });
  } catch (e) {
    throw e;
  }
  return browser;
};

export default startBrowser;
