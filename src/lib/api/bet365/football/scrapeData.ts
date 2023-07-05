import bet365ScrapeUrl from '@lib/api/bet365/bet365ScrapeUrl';
import promisifyRequestsList from '@lib/utils/queueScrapedUrls';

const scrapeData = async (): Promise<string[][] | undefined> => {
  const urlList = [
    'https://www.bet365.de/#/AC/B1/C1/D1002/E88369731/G40/H^1/', // Brasilien, Serie A
  ];
  try {
    return promisifyRequestsList(urlList, bet365ScrapeUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
