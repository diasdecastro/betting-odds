import { startBrowser } from '@lib/utils/browser';

/* Scraping Logik für Tipico */
export const scrapeData = async (): Promise<string[] | undefined> => {
  /* 
        Url zu scrapen
        Enthält: 
            Deutschland (Bundesliga, 2.Bundesliga, 3.Bundesliga) 
            England (Premier League, League 1, League 2)
            Italien (Serie A, Serie B)
            Spanien (La Liga, La Liga 2)
            Türkei (Süper Lig, 1.Lig)
            Frankreich (Ligue 1, Ligue 2)
    */
  const url =
    'https://sports.tipico.de/de/alle/1101/7201,46201,31201,1201,32201,30201/19301,4301,101301,62301,33301,3301,34301,84301,1301,37301,36301,43301,8343301,41301,42301';

  try {
    // Browser wird geöffnet
    const browser = await startBrowser();
    if (browser === undefined) throw new Error('Browser is undefined');

    // Öffnet neues Tab im Browser, geht zu Seite und fügt Jquery zur Seite hinzu
    const page = await browser.newPage();
    await page.goto(url);
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    });

    // Speichert Elemente von der Seite zurückgegeben werden in einer Array
    const scrapedData: string[] = await page.evaluate(() => {
      return $('div.Sport-styles-sport-container > *')
        .toArray()
        .map((item) => item.outerHTML);
    });

    await page.close();

    // Schließt Browser und gibt Array zurück
    await browser.close();
    return scrapedData;
  } catch (e) {
    throw e;
  }
};
