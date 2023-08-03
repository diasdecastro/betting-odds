import { Browser, launch } from 'puppeteer';

const startBrowser = async (): Promise<Browser | undefined> => {
  let browser;
  try {
    console.log('Opening Browser...');
    browser = await launch({
      headless: 'new',
      args: [
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--disable-gpu',
        '--mute-audio',
        // '--disable-extensions',
        // '--no-zygote',
        // '--diable-setuid-sandbox',
        // '--single-process',
      ],
      ignoreHTTPSErrors: true,
    });
  } catch (e) {
    return undefined;
  }
  return browser;
};

export default startBrowser;
