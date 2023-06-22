import bwinScrapeUrl from '@lib/api/bwin/bwinScrapeUrl';
import promisifyRequestsList from '@lib/utils/promisifyRequestsList';

/* Füttert Scraping Funktion mit den Urls, sammelt 
die Rückgaben und gibt sie in einer Array zürück */
const scrapeData = async (): Promise<string[][] | undefined> => {
  /* TODO: Weitere Wettbewerbe integrieren */
  const urlList = [
    //europe
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/premier-league-102841', //eng, premier league
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-one-101551', //eng, league one
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-two-101550', //eng, league two
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/championship-102839', //eng, efl championship
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/finnland-15/ykkonen-102176', //fin, ykkonen
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-1-102843', //fra, ligue 1
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-2-102376', //fra, ligue 2
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/bundesliga-102842', //ger, bundesliga
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/2-bundesliga-102845', //ger, 2. bundesliga
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/3-liga-102377', //ger, 3. bundesliga
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/irland-23/premier-division-102208', //irl, premier division
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/island-49/1-deild-102194', //isl, 1.deilid
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-a-102846', //ita, serie a
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-b-102848', // ita, serie b
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/norwegen-21/eliteserien-102275', //nor, eliteserien
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-102829', //spa, la liga
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-2-102830', //spa, la liga 2
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/allsvenskan-102831', //swe, allsvenskan
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/1-division-norra-102217', //swe, 1 division norra
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/damallsvenskan-102219', //swe, damallsvenskan
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/s%C3%BCper-lig-102832', //tur, süper lig
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/1-lig-102226', //tur, 1. lig
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/2-lig-102893', //tur, 2. lig

    //asia
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/j-league-cup-102671', //jap, j league cup
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/j2-league-101400', //jap, j league 2
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/emperor-cup-102812', //jap, emperor cup

    //america
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/liga-profesional-de-futbol-102540', //arg, liga profesional
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/primera-nacional-102234', //arg, primera nacional
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/primera-b-metropolitana-102117', //arg, primera b metropolitana
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/brasileiro-serie-a-102838', //bra, serie a
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/brasileiro-serie-b-102361', //bra, serie b
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/copa-do-brasil-102723', //bra, copa do brasil
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/kanada-94/premier-league-100012', //can, premier league
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/chile-56/primera-b-102157', //chi, primera b
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/kolumbien-45/primera-a-apertura-102161', //col, primera a
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/ecuador-110/ligapro-primera-a-102171', //ecu, ligapro primera a
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/peru-59/segunda-division-102363', //per, segunda division
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/uruguay-47/primera-division-102231', //uru, primera division
    'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/nordamerika-9/major-league-soccer-102849', //usa, major soccer league

    //africa

    //oceania
  ];

  try {
    return await promisifyRequestsList(urlList, bwinScrapeUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
