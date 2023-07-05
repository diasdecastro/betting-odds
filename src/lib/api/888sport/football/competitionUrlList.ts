const competitionUrlList = [
  {
    competition: 'ESP / La Liga',
    url: 'https://www.888sport.de/fussball/spanien/la-liga/',
  },
  {
    competition: 'ESP / La Liga 2',
    url: 'https://www.888sport.de/fu%C3%9Fball/spanien/spain-segunda-division-t-319629/',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://www.888sport.de/fu%C3%9Fball/finnland/finland-ykkonen-t-328706/',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://www.888sport.de/football/france/ligue-1-20232024-t-481457/',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://www.888sport.de/football/germany/bundesliga-20232024-t-481461/',
  },
  {
    competition: 'IRL / Premier Division',
    url: 'https://www.888sport.de/football/ireland/ireland-premier-division-t-321690/',
  },
  {
    competition: 'ISL / Besta deild karla',
    url: 'https://www.888sport.de/fu%C3%9Fball/island/island-first-division-t-328311/',
  },
  {
    competition: 'ISL / 1. deild karla',
    url: 'https://www.888sport.de/fu%C3%9Fball/island/island-second-division-t-328219/',
  },
  {
    competition: 'ISL / Womens Super Cup',
    url: 'https://www.888sport.de/fu%C3%9Fball/island/island-frauen-pokal-t-327743/',
  },
  {
    competition: 'ISL / 2. deild karla',
    url: 'https://www.888sport.de/fu%C3%9Fball/island/island-third-division-t-328408/',
  },
  {
    competition: 'ITA / Serie A',
    url: 'https://www.888sport.de/football/italy/serie-a-20232024-t-481459/',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://www.888sport.de/fu%C3%9Fball/italien/italien-serie-b-t-319569/',
  },
  {
    competition: 'SWE / Allsvenskan',
    url: 'https://www.888sport.de/football/sweden/allsvenskan/',
  },
  {
    competition: 'SWE / Damallsvenskan',
    url: 'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-damallsvenskan-t-328722/',
  },
  {
    competition: 'SWE / Ettan', //Norra
    url: 'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-1-norra-t-328028/',
  },
  {
    competition: 'SWE / Ettan', //Södra
    url: 'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-1-s%C3%B6dra-t-328004/',
  },
  {
    competition: 'SWE / Division 2', //Norra Götaland
    url: 'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-2-norra-g%C3%B6taland-t-330931/',
  },
  {
    competition: 'SWE / Division 2', //Södra Götaland
    url: 'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-2-s%C3%B6dra-g%C3%B6taland-t-369346/',
  },
  {
    competition: 'SWE / Division 2', //Västra Götaland
    url: 'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-2-v%C3%A4stra-g%C3%B6taland-t-326278/',
  },
  {
    competition: 'SWE / Division 2', //Norra Svealand
    url: 'https://www.888sport.de/fu%C3%9Fball/schweden/schweden-division-2-norra-svealand-t-328016/',
  },
  {
    competition: 'TUR / Süper Lig',
    url: 'https://www.888sport.de/fu%C3%9Fball/t%C3%BCrkei/t%C3%BCrkei-s%C3%BCper-lig-t-320219/',
  },
  {
    competition: 'TUR / 1. Lig',
    url: 'https://www.888sport.de/fu%C3%9Fball/t%C3%BCrkei/t%C3%BCrkei-1-lig-t-320221/',
  },
  {
    competition: 'JPN / J2 League',
    url: 'https://www.888sport.de/fu%C3%9Fball/japan/japan-j-league-2-t-328711/',
  },
  {
    competition: 'JPN / J3 League',
    url: 'https://www.888sport.de/fu%C3%9Fball/japan/japan-j-league-3-t-328834/',
  },
  {
    competition: 'JPN / Emperors Cup',
    url: 'https://www.888sport.de/fu%C3%9Fball/japan/japan-emperors-cup-t-333161/',
  },
  {
    competition: 'ARG / Primera Nacional',
    url: 'https://www.888sport.de/fu%C3%9Fball/argentinien/argentina-primera-nacional-t-320380/',
  },
  {
    competition: 'ARG / Primera División',
    url: 'https://www.888sport.de/fu%C3%9Fball/argentinien/argentina-superliga-t-153362/',
  },
  {
    competition: 'BRA / Série A',
    url: 'https://www.888sport.de/football/brazil/serie-a/',
  },
  {
    competition: 'BRA / Série B',
    url: 'https://www.888sport.de/football/brazil/serie-a/',
  },
  {
    competition: 'BRA / Série C',
    url: 'https://www.888sport.de/fu%C3%9Fball/brasilien/brasilien-serie-c-t-330341/',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://www.888sport.de/fu%C3%9Fball/chile/chile-primera-division-t-320184/',
  },
  {
    competition: 'CHL / Primera B',
    url: 'https://www.888sport.de/fu%C3%9Fball/chile/chile-primera-division-b-t-323275/',
  },
  {
    competition: 'COL / Categoría Primera A',
    url: 'https://www.888sport.de/fu%C3%9Fball/kolumbien/colombia-categoria-primera-a-t-320176/',
  },
  {
    competition: 'ECU / Serie A',
    url: 'https://www.888sport.de/fu%C3%9Fball/ecuador/ecuador-primera-division-t-321618/',
  },
  {
    competition: 'ECU / Serie B',
    url: 'https://www.888sport.de/fu%C3%9Fball/ecuador/ecuador-primera-b-t-323492/',
  },
  {
    competition: 'PER / Liga 2',
    url: 'https://www.888sport.de/fu%C3%9Fball/peru/peru-segunda-division-t-341350/',
  },
  {
    competition: 'USA / Major League Soccer',
    url: 'https://www.888sport.de/fu%C3%9Fball/vereinigte-staaten-von-amerika/us-major-league-soccer-t-323521/',
  },
  {
    competition: 'USA / USL League Two',
    url: 'https://www.888sport.de/fu%C3%9Fball/vereinigte-staaten-von-amerika/us-usl-league-two-t-365584/',
  },
  {
    competition: 'USA / USL Championship',
    url: 'https://www.888sport.de/fu%C3%9Fball/vereinigte-staaten-von-amerika/us-usl-championship-t-329473/',
  },
  {
    competition: 'URY / Primera División',
    url: 'https://www.888sport.de/fu%C3%9Fball/uruguay/uruguay-primera-division-t-322363/',
  },
  {
    competition: 'AUS / Queensland Premier League 1',
    url: 'https://www.888sport.de/fu%C3%9Fball/australien/australien-football-queensland-premier-league-t-322653/',
  },
  {
    competition: 'AUS / NPL', //QUEENSLAND
    url: 'https://www.888sport.de/fu%C3%9Fball/australien/australien-national-premier-league-queensland-t-320398/',
  },
  {
    competition: 'AUS / NPL', //CAPITAL
    url: 'https://www.888sport.de/fu%C3%9Fball/australien/australien-national-premier-league-capital-t-330244/',
  },
  {
    competition: 'NZL / Chatham Cup',
    url: 'https://www.888sport.de/fu%C3%9Fball/neuseeland/neuseeland-chatham-cup-t-366174/',
  },
];

export default competitionUrlList;
