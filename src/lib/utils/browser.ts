import { Browser, launch } from 'puppeteer';

export const startBrowser = async (): Promise<Browser | undefined> => {
  let browser;
  try {
    console.log('Opening Browser...');
    browser = await launch({
      headless: false,
      args: ['--diable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
    });
  } catch (e) {
    throw e;
  }
  return browser;
};
