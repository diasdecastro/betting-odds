import tipicoScrapeUrl from '@lib/api/tipico/tipicoScrapeUrl';
import queueScrapedUrls from '@lib/utils/queueScrapedUrls';

/* Scraping Logik für Tipico */
export const scrapeData = async (): Promise<string[][]> => {
  /* TODO: Weitere Wettbewerbe hinzufügen */
  const competitionUrlList = [
    //europe
    {
      competition: 'ENG / Premier League',
      url: 'https://sports.tipico.de/de/alle/1101/1301',
    },
    {
      competition: 'FIN / Veikkausliiga',
      url: 'https://sports.tipico.de/de/alle/1101/31301',
    },
    {
      competition: 'FIN / Ykkönen',
      url: 'https://sports.tipico.de/de/alle/1101/527301',
    },
    {
      competition: 'INT / Champions League',
      url: 'https://sports.tipico.de/de/alle/1101/742110',
    },
    {
      competition: 'IRL / Premier Division',
      url: 'https://sports.tipico.de/de/alle/1101/79301',
    },
    {
      competition: 'IRL / First Division',
      url: 'https://sports.tipico.de/de/alle/1101/718301',
    },
    {
      competition: 'NOR / Eliteserien',
      url: 'https://sports.tipico.de/de/alle/1101/5301',
    },
    {
      competition: 'NOR / First Division',
      url: 'https://sports.tipico.de/de/alle/1101/6301',
    },

    //asia
    {
      competition: 'CHN / Super League',
      url: 'https://sports.tipico.de/de/alle/1101/652301',
    },
    {
      competition: 'JPN / J1 League',
      url: 'https://sports.tipico.de/de/alle/1101/82301',
    },
    {
      competition: 'JPN / J2 League',
      url: 'https://sports.tipico.de/de/alle/1101/3034301',
    },
    {
      competition: 'JPN / J3 League',
      url: 'https://sports.tipico.de/de/alle/1101/10327301',
    },
    {
      competition: 'JPN / J. League Cup',
      url: 'https://sports.tipico.de/de/alle/1101/virtual_japanLeagueCupFootballAllGroupMatches',
    },
    {
      competition: 'JPN / Emperors Cup',
      url: 'https://sports.tipico.de/de/alle/1101/5126301',
    },
    {
      competition: 'KOR / K-League 1',
      url: 'https://sports.tipico.de/de/alle/1101/3284301',
    },
    {
      competition: 'KOR / K-League 2',
      url: 'https://sports.tipico.de/de/alle/1101/6230301',
    },
    {
      competition: 'KOR / K3 League',
      url: 'https://sports.tipico.de/de/alle/1101/93820301',
    },

    //america
    {
      competition: 'ARG / Primera División', // Gleich Liga Profesional de Futbol
      url: 'https://sports.tipico.de/de/alle/1101/68301',
    },
    {
      competition: 'ARG / Primera Nacional', // Gruppe A
      url: 'https://sports.tipico.de/de/alle/1101/37309301',
    },
    {
      competition: 'ARG / Primera Nacional', // Gruppe B
      url: 'https://sports.tipico.de/de/alle/1101/37310301',
    },
    {
      competition: 'ARG / Primera B',
      url: 'https://sports.tipico.de/de/alle/1101/85016301',
    },
    {
      competition: 'BRA / Série A',
      url: 'https://sports.tipico.de/de/alle/1101/83301',
    },
    {
      competition: 'BRA / Série B',
      url: 'https://sports.tipico.de/de/alle/1101/1449301',
    },
    {
      competition: 'BRA / Série C',
      url: 'https://sports.tipico.de/de/alle/1101/27213301',
    },
    {
      competition: 'COL / Categoría Primera A', // Gruppe A
      url: 'https://sports.tipico.de/de/alle/1101/81703301',
    },
    {
      competition: 'COL / Categoría Primera A', // Gruppe B
      url: 'https://sports.tipico.de/de/alle/1101/81705301',
    },
    {
      competition: 'CHL / Primera División',
      url: 'https://sports.tipico.de/de/alle/1101/67280301',
    },
    {
      competition: 'CHL / Primera B',
      url: 'https://sports.tipico.de/de/alle/1101/61476301',
    },
    {
      competition: 'ECU / Serie A', // ?
      url: 'https://sports.tipico.de/de/alle/1101/16887301',
    },
    {
      competition: 'ECU / Serie B', // ?
      url: 'https://sports.tipico.de/de/alle/1101/77667301',
    },
    {
      competition: 'PER / Liga 1',
      url: 'https://sports.tipico.de/de/alle/1101/34468301',
    },
    {
      competition: 'PER / Liga 2',
      url: 'https://sports.tipico.de/de/alle/1101/13431301',
    },
    {
      competition: 'URY / Primera División', // Gruppe A
      url: 'https://sports.tipico.de/de/alle/1101/57777301',
    },
    {
      competition: 'URY / Primera División',
      url: 'https://sports.tipico.de/de/alle/1101/60005301',
    },
    {
      competition: 'USA / Major League Soccer',
      url: 'https://sports.tipico.de/de/alle/1101/18301',
    },
    {
      competition: 'USA / USL Championship',
      url: 'https://sports.tipico.de/de/alle/1101/78360301',
    },
    //africa

    //oceania
    {
      competition: 'AUS / NPL', // Victoria
      url: 'https://sports.tipico.de/de/alle/1101/10216301',
    },
    {
      competition: 'AUS / NPL', // South Australia
      url: 'https://sports.tipico.de/de/alle/1101/31384301',
    },
    {
      competition: 'AUS / NPL', // Queensland
      url: 'https://sports.tipico.de/de/alle/1101/31283301',
    },
    {
      competition: 'AUS / NPL', // Western Australia
      url: 'https://sports.tipico.de/de/alle/1101/31499301',
    },
    {
      competition: 'AUS / NPL', // Capital Football
      url: 'https://sports.tipico.de/de/alle/1101/31281301',
    },
    {
      competition: 'AUS / NPL', // Tasmania
      url: 'https://sports.tipico.de/de/alle/1101/31508301',
    },
    {
      competition: 'AUS / NPL', // Northern NSW
      url: 'https://sports.tipico.de/de/alle/1101/31378301',
    },
    {
      competition: 'AUS / NPL', // New South Wales
      url: 'https://sports.tipico.de/de/alle/1101/31300301',
    },
  ];

  /* const urlList = [
    'https://sports.tipico.de/de/alle/1101/83301', //bra, serie a
    'https://sports.tipico.de/de/alle/1101/13431301', //per, Segunda Division
  ]; */

  try {
    return await queueScrapedUrls(competitionUrlList, tipicoScrapeUrl);
  } catch (e) {
    throw e;
  }
};
