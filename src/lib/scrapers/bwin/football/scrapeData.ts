import bwinScrapeUrl from '@lib/scrapers/bwin/bwinScrapeUrl';
import queueScrapedUrls from '@lib/utils/queueScrapedUrls';

/* Füttert Scraping Funktion mit den Urls, sammelt 
die Rückgaben und gibt sie in einer Array zürück */
const scrapeData = async (): Promise<string[][] | undefined> => {
  /* TODO: Weitere Wettbewerbe integrieren */

  const competitionUrlList = [
    //europe
    {
      competition: 'ENG / Premier League',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/premier-league-102841',
    },
    {
      competition: 'ENG / EFL League One',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-one-101551',
    },
    {
      competition: 'ENG / EFL League Two',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-two-101550',
    },
    {
      competition: 'ENG / EFL Cup',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/championship-102839',
    },
    {
      competition: 'ESP / La Liga',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-102829',
    },
    {
      competition: 'ESP / La Liga 2',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-2-102830',
    },
    {
      competition: 'FIN / Ykkönen',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/finnland-15/ykkonen-102176',
    },
    {
      competition: 'FRA / Ligue 1',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-1-102843',
    },
    {
      competition: 'FRA / Ligue 2',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-2-102376',
    },
    {
      competition: 'GER / Bundesliga',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/bundesliga-102842',
    },
    {
      competition: 'GER / 2. Bundesliga',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/2-bundesliga-102845',
    },
    {
      competition: 'GER / 3. Liga',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/3-liga-102377',
    },
    {
      competition: 'IRL / Premier Division',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/irland-23/premier-division-102208',
    },
    {
      competition: 'ISL / 1. deild karla',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/island-49/1-deild-102194',
    },
    {
      competition: 'ITA / Serie A',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-a-102846',
    },
    {
      competition: 'ITA / Serie B',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-b-102848',
    },
    {
      competition: 'NOR / Eliteserien',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/norwegen-21/eliteserien-102275',
    },
    {
      competition: 'SWE / Allsvenskan',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/allsvenskan-102831',
    },
    {
      competition: 'SWE / Ettan', //Norra
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/1-division-norra-102217',
    },
    {
      competition: 'SWE / Damallsvenskan',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/damallsvenskan-102219',
    },
    {
      competition: 'TUR / Süper Lig',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/s%C3%BCper-lig-102832',
    },
    {
      competition: 'TUR / 1. Lig',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/1-lig-102226',
    },
    {
      competition: 'TUR / 2. Lig',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/2-lig-102893',
    },

    //asia
    {
      competition: 'JPN / J. League Cup',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/j-league-cup-102671',
    },
    {
      competition: 'JPN / J2 League',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/j2-league-101400',
    },
    {
      competition: 'JPN / Emperors Cup',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/emperor-cup-102812',
    },

    //america
    {
      competition: 'ARG / Primera División',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/liga-profesional-de-futbol-102540',
    },
    {
      competition: 'ARG / Primera Nacional',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/primera-nacional-102234',
    },
    {
      competition: 'ARG / Primera B',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/primera-b-metropolitana-102117',
    },
    {
      competition: 'BRA / Série A',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/brasileiro-serie-a-102838',
    },
    {
      competition: 'BRA / Série B',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/brasileiro-serie-b-102361',
    },
    {
      competition: 'BRA / Copa do Brasil',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/copa-do-brasil-102723',
    },
    {
      competition: 'CAN / Premier League',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/kanada-94/premier-league-100012',
    },
    {
      competition: 'CHL / Primera B',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/chile-56/primera-b-102157',
    },
    {
      competition: 'COL / Categoría Primera A',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/kolumbien-45/primera-a-apertura-102161',
    },
    {
      competition: 'ECU / Serie A',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/ecuador-110/ligapro-primera-a-102171',
    },
    {
      competition: 'PER / Liga 2',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/peru-59/segunda-division-102363',
    },
    {
      competition: 'URY / Primera División',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/uruguay-47/primera-division-102231',
    },
    {
      competition: 'USA / Major League Soccer',
      url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/nordamerika-9/major-league-soccer-102849',
    },
    //africa

    //oceania
  ];

  try {
    return await queueScrapedUrls(competitionUrlList, bwinScrapeUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
