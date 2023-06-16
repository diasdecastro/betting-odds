import _888sportScrapeUrl from '@lib/api/scrapers/888sportScrapeUrl';
import promisifyRequestsList from '@lib/utils/promisifyRequestsList';

/* Füttert Scraping Funktion mit den Urls, sammelt die Rückgaben und gibt sie in einer Array zürück */
const scrapeData = async (): Promise<string[][] | undefined> => {
  /* TODO: Weitere Wettbewerbe integrieren */
  const urlList = [
    //europe
    'https://www.888sport.de/fu%C3%9Fball/finnland/finland-ykkonen-t-328706/', //fin, YKKONEN
    'https://www.888sport.de/football/france/ligue-1-20232024-t-481457/', //fra, Ligue 1
    'https://www.888sport.de/football/germany/bundesliga-20232024-t-481461/', //ger, Bundesliga
    'https://www.888sport.de/football/ireland/ireland-premier-division-t-321690/', //irl, PREMIER DIVISION
    'https://www.888sport.de/fu%C3%9Fball/island/island-first-division-t-328311/', //isl, FIRST DIVISION
    'https://www.888sport.de/fu%C3%9Fball/island/island-second-division-t-328219/', //isl, SECOND DIVISION
    'https://www.888sport.de/fu%C3%9Fball/island/island-frauen-pokal-t-327743/', //isl, FRAUEN POKAL
    'https://www.888sport.de/fu%C3%9Fball/island/island-third-division-t-328408/', //isl, THIRD DIVISION
    'https://www.888sport.de/football/italy/serie-a-20232024-t-481459/', //ita, Serie A
    'https://www.888sport.de/fu%C3%9Fball/italien/italien-serie-b-t-319569/', //ita, Serie B
    'https://www.888sport.de/fussball/spanien/la-liga/', //spa, La Liga //TODO: Check Link
    'https://www.888sport.de/fu%C3%9Fball/spanien/spain-segunda-division-t-319629/', //spa, Segunda Div
    'https://www.888sport.de/football/sweden/allsvenskan/', //swe, ALLSVENSKAN
    'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-damallsvenskan-t-328722/', //swe, DAMALLSVENSKAN
    'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-1-norra-t-328028/', //swe, DIVISION 1 NORRA
    'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-2-norra-g%C3%B6taland-t-330931/', //swe, DIVISION 2 NORRA GÖTALAND
    'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-2-s%C3%B6dra-g%C3%B6taland-t-369346/', //swe, DIVISION 2 SÖDRA GÖTALAND
    'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-2-v%C3%A4stra-g%C3%B6taland-t-326278/', //swe, DIVISION 2 VÄSTRA GÖTALAND
    'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-2-norra-svealand-t-328016/', //swe, DIVISION 2 NORRA SVEALAND
    'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-1-s%C3%B6dra-t-328004/', //swe, DIVISION 1 SÖDRA
    'https://www.888sport.de/fu%C3%9Fball/t%C3%BCrkei/t%C3%BCrkei-s%C3%BCper-lig-t-320219/', //tur, Süper Lig
    'https://www.888sport.de/fu%C3%9Fball/t%C3%BCrkei/t%C3%BCrkei-1-lig-t-320221/', //tur, 1 Lig

    //asia
    'https://www.888sport.de/fu%C3%9Fball/japan/japan-j-league-2-t-328711/', //jap, J. LEAGUE 2
    'https://www.888sport.de/fu%C3%9Fball/japan/japan-j-league-3-t-328834/', //jap, J. LEAGUE 3
    'https://www.888sport.de/fu%C3%9Fball/japan/japan-emperors-cup-t-333161/', //jap, EMPEROR'S CUP

    //america
    'https://www.888sport.de/fu%C3%9Fball/argentinien/argentina-primera-nacional-t-320380/', //arg, Primera Nacional
    'https://www.888sport.de/fu%C3%9Fball/argentinien/argentina-superliga-t-153362/', //arg, Superliga
    'https://www.888sport.de/football/brazil/serie-a/', //bra, SERIE A
    'https://www.888sport.de/football/brazil/serie-a/', //bra, SERIE B
    'https://www.888sport.de/fu%C3%9Fball/brasilien/brasilien-serie-c-t-330341/', //bra, SERIE C
    'https://www.888sport.de/fu%C3%9Fball/chile/chile-primera-division-b-t-323275/', //chi, PRIMERA DIVISION B
    'https://www.888sport.de/fu%C3%9Fball/chile/chile-primera-division-t-320184/', //chi, PRIMERA DIVISION
    'https://www.888sport.de/fu%C3%9Fball/kolumbien/colombia-categoria-primera-a-t-320176/', //col, CATEGORIA PRIMERA A
    'https://www.888sport.de/fu%C3%9Fball/ecuador/ecuador-primera-b-t-323492/', //ecu, PRIMERA B
    'https://www.888sport.de/fu%C3%9Fball/ecuador/ecuador-primera-division-t-321618/', //ecu, PRIMERA DIVISION
    'https://www.888sport.de/fu%C3%9Fball/peru/peru-segunda-division-t-341350/', //per, SEGUNDA DIVISION
    'https://www.888sport.de/fu%C3%9Fball/vereinigte-staaten-von-amerika/us-major-league-soccer-t-323521/', //usa, major league soccer
    'https://www.888sport.de/fu%C3%9Fball/uruguay/uruguay-primera-division-t-322363/', //uru, PRIMERA DIVISION
    'https://www.888sport.de/fu%C3%9Fball/vereinigte-staaten-von-amerika/us-usl-league-two-t-365584/', //usa, usl league two
    'https://www.888sport.de/fu%C3%9Fball/vereinigte-staaten-von-amerika/us-usl-championship-t-329473/', //usa, usl championship

    //africa

    //oceania
    'https://www.888sport.de/fu%C3%9Fball/australien/australien-football-queensland-premier-league-t-322653/', //aus, FOOTBALL QUEENSLAND PREMIER LEAGUE
    'https://www.888sport.de/fu%C3%9Fball/australien/australien-national-premier-league-queensland-t-320398/', //aus, NATIONAL PREMIER LEAGUE QUEENSLAND
    'https://www.888sport.de/fu%C3%9Fball/australien/australien-national-premier-league-capital-t-330244/', //aus, NATIONAL PREMIER LEAGUE CAPITAL
    'https://www.888sport.de/fu%C3%9Fball/neuseeland/neuseeland-chatham-cup-t-366174/', //nzea, CHATHAM CUP
  ];

  try {
    return await promisifyRequestsList(urlList, _888sportScrapeUrl);
  } catch (e) {
    throw e;
  }
};

export default scrapeData;
