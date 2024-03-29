import { Browser, launch } from 'puppeteer';

const startBrowser = async (): Promise<Browser | undefined> => {
  let browser;
  try {
    console.log('Opening Browser...');
    browser = await launch({
      headless: 'new',
      args: ['--diable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
    });
  } catch (e) {
    return undefined;
  }
  return browser;
};

export default startBrowser;
