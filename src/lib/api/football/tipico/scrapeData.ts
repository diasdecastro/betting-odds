import { Browser } from 'puppeteer';

import promisifyRequestsList from '@lib/utils/promisifyRequestsList';

const scrapeSingleUrl = async (
  url: string,
  browser: Browser
): Promise<string[]> => {
  const page = await browser.newPage();
  await page.goto(url);
  await page.addScriptTag({
    url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
  });

  await page.waitForSelector(
    '.SportsCompetitionsEvents-styles-competitions-events-block'
  );

  // Speichert Elemente von der Seite zurückgegeben werden in einer Array
  const scrapedData: string[] = await page.evaluate(() => {
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

  return scrapedData;
};

/* Scraping Logik für Tipico */
export const scrapeData = async (): Promise<string[][]> => {
  /* TODO: Weitere Wettbewerbe hinzufügen */
  const urlList = [
    'https://sports.tipico.de/de/alle/1101/742110', //int, Champions League
    'https://sports.tipico.de/de/alle/1101/68301', //arg, Liga Profesional de Futbol
    'https://sports.tipico.de/de/alle/1101/37309301', //arg, Primera Nacional, Gruppe A
    'https://sports.tipico.de/de/alle/1101/85016301', //arg, Primera B, Clausura
    'https://sports.tipico.de/de/alle/1101/83301', //bra, serie a
    'https://sports.tipico.de/de/alle/1101/1449301', //bra, serie b
    'https://sports.tipico.de/de/alle/1101/27213301', //bra, serie c, gruppe a
    'https://sports.tipico.de/de/alle/1101/652301', //chi, super league
    'https://sports.tipico.de/de/alle/1101/16887301', //ecu, primera a
    'https://sports.tipico.de/de/alle/1101/77667301', //ecu, primera b
    'https://sports.tipico.de/de/alle/1101/31301', //fin, veikkausliiga
    'https://sports.tipico.de/de/alle/1101/527301', //fin, Ykkonen
    'https://sports.tipico.de/de/alle/1101/79301', //irl, Premier Division
    'https://sports.tipico.de/de/alle/1101/718301', //irl, First Division
    'https://sports.tipico.de/de/alle/1101/82301', //jpn, J-League
    'https://sports.tipico.de/de/alle/1101/3034301', //jpn, J-League 2
    'https://sports.tipico.de/de/alle/1101/10327301', //jpn, J-League 3
  ];
  // const url =
  //   'https://sports.tipico.de/de/alle/1101/7201,46201,31201,1201,32201,30201/19301,4301,101301,62301,33301,3301,34301,84301,1301,37301,36301,43301,8343301,41301,42301';

  try {
    return await promisifyRequestsList(urlList, scrapeSingleUrl);
  } catch (e) {
    throw e;
  }
};
