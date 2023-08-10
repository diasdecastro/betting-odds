import { Cluster } from 'puppeteer-cluster';

const startCluster = async (): Promise<Cluster | undefined> => {
  let cluster;
  try {
    console.log('Opening Cluster...');
    cluster = await Cluster.launch({
      concurrency: Cluster.CONCURRENCY_PAGE,
      maxConcurrency: 3,
      puppeteerOptions: {
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
        // ignoreHTTPSErrors: true,
      },
    });
  } catch (e) {
    return undefined;
  }
  return cluster;
};

export default startCluster;
