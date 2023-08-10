//TODO: Alphabetisch sortieren
/* const competitionUrlList = [
  {
    competition: 'AUT / Bundesliga',
    url: 'https://www.888sport.de/fu%C3%9Fball/%C3%B6sterreich/%C3%B6sterreich-bundesliga-t-321533/',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://www.888sport.de/fussball/frankreich/ligue-1/',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://www.888sport.de/fu%C3%9Fball/frankreichs/frankreich-ligue-2-t-319564/',
  },
]; */
const competitionUrlList = [
  //europa
  {
    competition: 'AUT / Bundesliga',
    url: 'https://www.888sport.de/fu%C3%9Fball/%C3%B6sterreich/%C3%B6sterreich-bundesliga-t-321533/',
  },
  {
    competition: 'BEL / Pro League',
    url: 'https://www.888sport.de/football/belgian-pro-league-betting/',
  },
  {
    competition: 'BGR / First League',
    url: 'https://www.888sport.de/fu%C3%9Fball/bulgarien/bulgarien-first-division-t-321524/',
  },
  {
    competition: 'CZE / FORTUNA:LIGA', //1. Liga
    url: 'https://www.888sport.de/football/czech-republic/fortuna-liga-20232024-t-483565/',
  },
  {
    competition: 'CZE / National Football League', //2. Liga
    url: 'https://www.888sport.de/fu%C3%9Fball/tschechische-republik/tschechien-second-divison-t-323559/',
  },
  {
    competition: 'DNK / Superligaen', //1. Liga
    url: 'https://www.888sport.de/football/denmark/denmark-1division-t-323159/',
  },
  {
    competition: 'DNK / 1. division', //2. Liga
    url: 'https://www.888sport.de/football/denmark/1st-division-20232024-t-484159/',
  },
  {
    competition: 'ENG / EFL League One',
    url: 'https://www.888sport.de/fussball/england/league-one/',
  },
  {
    competition: 'ENG / EFL League Two',
    url: 'https://www.888sport.de/football/england/england-league-2-t-319578/',
  },
  {
    competition: 'ENG / EFL Championship',
    url: 'https://www.888sport.de/fu%C3%9Fball/england/england-championship-t-319577/',
  },
  {
    competition: 'ENG / League Cup',
    url: 'https://www.888sport.de/fu%C3%9Fball/england/england-league-cup-t-319681/',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://www.888sport.de/fussball/spanien/la-liga/',
  },
  {
    competition: 'ESP / La Liga 2',
    url: 'https://www.888sport.de/fu%C3%9Fball/spanien/spain-segunda-division-t-319629/',
  },
  {
    competition: 'FIN / Veikkausliiga', //1.Liga
    url: 'https://www.888sport.de/football/finnish-veikkausliiga-betting/',
  },
  {
    competition: 'FIN / Ykkönen', //2.Liga
    url: 'https://www.888sport.de/fu%C3%9Fball/finnland/finland-ykkonen-t-328706/',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://www.888sport.de/fussball/frankreich/ligue-1/',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://www.888sport.de/fu%C3%9Fball/frankreichs/frankreich-ligue-2-t-319564/',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://www.888sport.de/football/germany/bundesliga-20232024-t-481461/',
  },
  {
    competition: 'GER / Supercup',
    url: 'https://www.888sport.de/fu%C3%9Fball/deutschland/deutschland-supercup-t-333930/',
  },
  {
    competition: 'GRC / Super League 1',
    url: 'https://www.888sport.de/football/greece/superleague-20232024-t-483574/',
  },
  {
    competition: 'HRV / HNL', //Fucking Kroatien. Liga heißt Hrvatska nogometna liga
    url: 'https://www.888sport.de/fu%C3%9Fball/kroatien/kroatien-first-division-t-152936/',
  },
  {
    competition: 'HUN / NB I', //Fucking Kroatien. Liga heißt Hrvatska nogometna liga
    url: 'https://www.888sport.de/football/hungary/otp-bank-liga-20232024-t-484160/',
  },
  {
    competition: 'IRL / Premier Division',
    url: 'https://www.888sport.de/football/ireland/ireland-premier-division-t-321690/',
  },
  {
    competition: 'ISL / Besta deild karla',
    url: 'https://www.888sport.de/football/iceland/iceland-premier-league-t-327948/',
  },
  {
    competition: 'ISL / 1. deild karla',
    url: 'https://www.888sport.de/fu%C3%9Fball/island/island-first-division-t-328311/',
  },
  {
    competition: 'ISL / 2. deild karla',
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
    url: 'https://www.888sport.de/fussball/italien/serie-a/',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://www.888sport.de/fu%C3%9Fball/italien/italien-serie-b-t-319569/',
  },
  {
    competition: 'NLD / Eredivisie',
    url: 'https://www.888sport.de/football/dutch-eredivisie-betting/',
  },
  {
    competition: 'NLD / Eerste Divisie',
    url: 'https://www.888sport.de/football/netherlands/eerste-divisie-20232024-t-484223/',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://www.888sport.de/fu%C3%9Fball/norwegen/norwegen-premier-league-t-328051/',
  },
  {
    competition: 'NOR / Second Division', //Gruppe 1
    url: 'https://www.888sport.de/fu%C3%9Fball/norwegen/norwegen-second-division-group-1-t-329544/',
  },
  {
    competition: 'POL / Ekstraklasa',
    url: 'https://www.888sport.de/football/poland/poland-ekstraklasa-t-320563/',
  },
  {
    competition: 'POL / I liga',
    url: 'https://www.888sport.de/fu%C3%9Fball/polen/polen-first-league-t-323266/',
  },
  {
    competition: 'ROU / Liga I',
    url: 'https://www.888sport.de/fussball/rumanien/liga-1/',
  },
  {
    competition: 'SCO / Premiership',
    url: 'https://www.888sport.de/fu%C3%9Fball/schottland/scotland-premiership-t-320613/',
  },
  {
    competition: 'SCO / League One',
    url: 'https://www.888sport.de/football/scotland/scotland-league-one-20232024-t-484153/',
  },
  {
    competition: 'SCO / Championship',
    url: 'https://www.888sport.de/football/scotland/scotland-championship-20232024-t-484151/',
  },
  {
    competition: 'SCO / League Two',
    url: 'https://www.888sport.de/football/scotland/scotland-league-two-20232024-t-484152/',
  },
  {
    competition: 'SVN / PrvaLiga',
    url: 'https://www.888sport.de/fu%C3%9Fball/slowenien/slovenia-prva-liga-t-322958/',
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
  //asien
  {
    competition: 'KAZ / Premier League',
    url: 'https://www.888sport.de/fu%C3%9Fball/kasachstan/kazakhstan-premier-league-t-323692/',
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
    competition: 'JPN / Emperors Cup',
    url: 'https://www.888sport.de/fu%C3%9Fball/japan/japan-emperors-cup-t-333161/',
  },
  {
    competition: 'KOR / K-League 1',
    url: 'https://www.888sport.de/football/south-korean-k-league-betting/',
  },
  {
    competition: 'SGP / Premier League',
    url: 'https://www.888sport.de/fu%C3%9Fball/singapur/singapore-premier-league-t-324050/',
  },
  {
    competition: 'VNM / V.League 1',
    url: 'https://www.888sport.de/fu%C3%9Fball/vietnam/vietnam-vleague-1-t-322655/',
  },
  //amerika
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
    url: 'https://www.888sport.de/fu%C3%9Fball/brasilien/brasilien-serie-b-t-329509/',
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
    competition: 'PRY / Primera División',
    url: 'https://www.888sport.de/fu%C3%9Fball/paraguay/paraguay-primera-division-t-320604/',
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
  //ozeanien
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
  //afrika
  {
    competition: 'EGY / Premier League',
    url: 'https://www.888sport.de/fu%C3%9Fball/%C3%A4gypten/egypt-premier-league-t-319816/',
  },
];

export default competitionUrlList;
