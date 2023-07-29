//TODO: Alle Wettbewerbe integrieren
const competitionUrlList = [
  {
    competition: 'ARG / Primera B',
    url: 'https://www.hpybet.de/sport/fussball/Primera%20B',
  },
  {
    competition: 'ARG / Primera División',
    url: 'https://www.hpybet.de/sport/fussball/Superliga',
  },
  {
    competition: 'ARG / Primera Nacional',
    url: 'https://www.hpybet.de/sport/fussball/Primera%20Nacional',
  },
  {
    competition: 'AUS / A-League',
    url: 'https://www.hpybet.de/sport/fussball/NPL',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.hpybet.de/sport/fussball/NPL',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.hpybet.de/sport/fussball/NPL%2C%20Queensland',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.hpybet.de/sport/fussball/NPL%2C%20Tasmania',
  },
  {
    competition: 'AUS / NPL',
    url: '',
  },
  {
    competition: 'AUS / NPL',
    url: '',
  },
  {
    competition: 'AUS / NPL',
    url: '',
  },
  {
    competition: 'AUS / NPL',
    url: '',
  },
  {
    competition: 'AUS / NPL',
    url: '',
  },
  {
    competition: 'AUS / Queensland Premier League 1',
    url: '',
  },
  {
    competition: 'AUT / Austrian Cup',
    url: '',
  },
  {
    competition: 'AUT / Bundesliga',
    url: 'https://www.hpybet.de/sport/fussball/%C3%96sterreich%20Bundesliga',
  },
  {
    competition: 'AUT / 2. Liga',
    url: 'https://www.hpybet.de/sport/fussball/2.%20Liga',
  },
  {
    competition: 'BEL / Pro League',
    url: 'https://www.hpybet.de/sport/fussball/First%20Division%20A',
  },
  {
    competition: 'BGR / First League',
    url: 'https://www.hpybet.de/sport/fussball/First%20Professional%20League',
  },
  {
    competition: 'BGR / Second League',
    url: 'https://www.hpybet.de/sport/fussball/Second%20Professional%20League',
  },
  {
    competition: 'BOL / Primera División',
    url: 'https://www.hpybet.de/sport/fussball/Division%20Profesional',
  },
  {
    competition: 'BRA / Copa do Brasil',
    url: '',
  },
  {
    competition: 'BRA / Série A',
    url: 'https://www.hpybet.de/sport/fussball/Brasileiro%20Serie%20A',
  },
  {
    competition: 'BRA / Série B',
    url: 'https://www.hpybet.de/sport/fussball/Brasileiro%20Serie%20B',
  },
  {
    competition: 'BRA / Série C',
    url: 'https://www.hpybet.de/sport/fussball/Brasileiro%20Serie%20C',
  },
  {
    competition: 'CAN / Premier League',
    url: 'https://www.hpybet.de/sport/fussball/Canadian%20Premier%20League',
  },
  {
    competition: 'CHE / Challenge League',
    url: 'https://www.hpybet.de/sport/fussball/Challenge%20League',
  },
  {
    competition: 'CHE / Super League',
    url: 'https://www.hpybet.de/sport/fussball/Super%20League',
  },
  {
    competition: 'CHL / Copa Chile',
    url: '',
  },
  {
    competition: 'CHL / Primera B',
    url: 'https://www.hpybet.de/sport/fussball/Primera%20B',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://www.hpybet.de/sport/fussball/Primera%20Division',
  },
  {
    competition: 'CHL / Segunda División',
    url: '',
  },
  {
    competition: 'CHN / Super League',
    url: 'https://www.hpybet.de/sport/fussball/Chinese%20Super%20League',
  },
  {
    competition: 'CHN / China League',
    url: 'https://www.hpybet.de/sport/fussball/League%201',
  },
  {
    competition: 'CHN / Division Two League',
    url: 'https://www.hpybet.de/sport/fussball/League%202',
  },
  {
    competition: 'COL / Categoría Primera A',
    url: 'https://www.hpybet.de/sport/fussball/Primera%20A',
  },
  {
    competition: 'COL / Categoría Primera B',
    url: 'https://www.hpybet.de/sport/fussball/Primera%20B',
  },
  {
    competition: 'COL / Copa Colombia',
    url: '',
  },
  {
    competition: 'CZE / FORTUNA:LIGA',
    url: 'https://www.hpybet.de/sport/fussball/1.%20Liga',
  },
  {
    competition: 'CZE / National Football League',
    url: 'https://www.hpybet.de/sport/fussball/FNL',
  },
  {
    competition: 'DNK / 1. division',
    url: 'https://www.hpybet.de/sport/fussball/1.%20Division',
  },
  {
    competition: 'DNK / Superligaen',
    url: 'https://www.hpybet.de/sport/fussball/Superligaen',
  },
  {
    competition: 'DNK / DBU Cup',
    url: 'https://www.hpybet.de/sport/fussball/DBU%20Pokalen',
  },
  {
    competition: 'ECU / Serie A',
    url: '',
  },
  {
    competition: 'ECU / Serie B',
    url: '',
  },
  {
    competition: 'EGY / Premier League',
    url: '',
  },
  {
    competition: 'ENG / EFL Championship',
    url: 'https://www.hpybet.de/sport/fussball/Championship',
  },
  {
    competition: 'ENG / EFL Cup',
    url: 'https://www.hpybet.de/sport/fussball/EFL%20Cup',
  },
  {
    competition: 'ENG / EFL League One',
    url: 'https://www.hpybet.de/sport/fussball/League%20One',
  },
  {
    competition: 'ENG / EFL League Two',
    url: '',
  },
  {
    competition: 'ENG / FA Community Shield',
    url: 'https://www.hpybet.de/sport/fussball/Community%20Shield',
  },
  {
    competition: 'ENG / FA Cup',
    url: 'https://www.hpybet.de/sport/fussball/FA%20Cup',
  },
  {
    competition: 'ENG / League Cup',
    url: '',
  },
  {
    competition: 'ENG / Premier League',
    url: 'https://www.hpybet.de/sport/fussball/Premier%20League',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://www.hpybet.de/sport/fussball/LaLiga',
  },
  {
    competition: 'ESP / La Liga 2',
    url: '',
  },
  {
    competition: 'ESP / Copa Del Rey',
    url: 'https://www.hpybet.de/sport/fussball/Copa%20del%20Rey',
  },
  {
    competition: 'FIN / Kolmonen',
    url: '',
  },
  {
    competition: 'FIN / Veikkausliiga',
    url: 'https://www.hpybet.de/sport/fussball/Veikkausliiga',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://www.hpybet.de/sport/fussball/Ykkonen',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://www.hpybet.de/sport/fussball/Ligue%201',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://www.hpybet.de/sport/fussball/Ligue%202',
  },
  {
    competition: 'FRA / Coupe de France',
    url: 'https://www.hpybet.de/sport/fussball/Coupe%20de%20France',
  },
  {
    competition: 'GER / 2. Bundesliga',
    url: 'https://www.hpybet.de/sport/fussball/2.%20Bundesliga',
  },
  {
    competition: 'GER / 3. Liga',
    url: 'https://www.hpybet.de/sport/fussball/3.%20Liga',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://www.hpybet.de/sport/fussball/Bundesliga',
  },
  {
    competition: 'GER / DFB Pokal',
    url: 'https://www.hpybet.de/sport/fussball/DFB-Pokal',
  },
  {
    competition: 'GER / Supercup',
    url: 'https://www.hpybet.de/sport/fussball/Supercup',
  },
  {
    competition: 'GRC / Super League 1',
    url: 'https://www.hpybet.de/sport/fussball/Super%20League%201',
  },
  {
    competition: 'HRV / HNL',
    url: 'https://www.hpybet.de/sport/fussball/1.%20HNL',
  },
  {
    competition: 'HUN / NB I',
    url: 'https://www.hpybet.de/sport/fussball/NB%20I',
  },
  {
    competition: 'HUN / NB II',
    url: 'https://www.hpybet.de/sport/fussball/NB%20II',
  },
  {
    competition: 'INT / Champions League',
    url: '',
  },
  {
    competition: 'IRL / First Division',
    url: 'https://www.hpybet.de/sport/fussball/First%20Division',
  },
  {
    competition: 'IRL / Premier Division',
    url: '',
  },
  {
    competition: 'ISL / 1. deild karla',
    url: 'https://www.hpybet.de/sport/fussball/1.%20deild',
  },
  {
    competition: 'ISL / 2. deild karla',
    url: '',
  },
  {
    competition: 'ISL / Besta deild karla',
    url: 'https://www.hpybet.de/sport/fussball/Urvalsdeild',
  },
  {
    competition: 'ISL / Womens Super Cup',
    url: '',
  },
  {
    competition: 'ITA / Coppa Italia',
    url: 'https://www.hpybet.de/sport/fussball/Coppa%20Italia',
  },
  {
    competition: 'ITA / Serie A',
    url: 'https://www.hpybet.de/sport/fussball/Serie%20A',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://www.hpybet.de/sport/fussball/Serie%20B',
  },
  {
    competition: 'ITA / Super Cup',
    url: 'https://www.hpybet.de/sport/fussball/Super%20Cup',
  },
  {
    competition: 'JPN / Emperors Cup',
    url: '',
  },
  {
    competition: 'JPN / J. League Cup',
    url: '',
  },
  {
    competition: 'JPN / J1 League',
    url: 'https://www.hpybet.de/sport/fussball/J.League',
  },
  {
    competition: 'JPN / J2 League',
    url: 'https://www.hpybet.de/sport/fussball/J.%20League%202',
  },
  {
    competition: 'JPN / J3 League',
    url: 'https://www.hpybet.de/sport/fussball/J.%20League%203',
  },
  {
    competition: 'KAZ / Premier League',
    url: '',
  },
  {
    competition: 'KAZ / First Division',
    url: 'https://www.hpybet.de/sport/fussball/Premier%20League',
  },
  {
    competition: 'KOR / K-League 1',
    url: 'https://www.hpybet.de/sport/fussball/K-League%201',
  },
  {
    competition: 'KOR / K-League 2',
    url: 'https://www.hpybet.de/sport/fussball/K-League%202',
  },
  {
    competition: 'KOR / K3 League',
    url: '',
  },
  {
    competition: 'LTU / A Lyga',
    url: 'https://www.hpybet.de/sport/fussball/A%20Lyga',
  },
  {
    competition: 'LTU / I Lyga',
    url: 'https://www.hpybet.de/sport/fussball/1%20Lyga',
  },
  {
    competition: 'MMR / National League',
    url: 'https://www.hpybet.de/sport/fussball/National%20League',
  },
  {
    competition: 'NLD / Eerste Divisie',
    url: 'https://www.hpybet.de/sport/fussball/Eerste%20Divisie',
  },
  {
    competition: 'NLD / Eredivisie',
    url: 'https://www.hpybet.de/sport/fussball/Eredivisie',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://www.hpybet.de/sport/fussball/Eliteserien',
  },
  {
    competition: 'NOR / First Division',
    url: 'https://www.hpybet.de/sport/fussball/1st%20Division',
  },
  {
    competition: 'NOR / Second Division',
    url: 'https://www.hpybet.de/sport/fussball/2nd%20Division',
  },
  {
    competition: 'NZL / Chatham Cup',
    url: '',
  },
  {
    competition: 'PER / Liga 1',
    url: 'https://www.hpybet.de/sport/fussball/Primera%20Division',
  },
  {
    competition: 'PER / Liga 2',
    url: 'https://www.hpybet.de/sport/fussball/Segunda%20Division',
  },
  {
    competition: 'POL / Ekstraklasa',
    url: 'https://www.hpybet.de/sport/fussball/Ekstraklasa',
  },
  {
    competition: 'POL / I liga',
    url: 'https://www.hpybet.de/sport/fussball/I%20Liga',
  },
  {
    competition: 'POL / II liga',
    url: 'https://www.hpybet.de/sport/fussball/II%20Liga',
  },
  {
    competition: 'POR / Liga Portugal',
    url: 'https://www.hpybet.de/sport/fussball/Primeira%20Liga',
  },
  {
    competition: 'POR / League Cup',
    url: 'https://www.hpybet.de/sport/fussball/League%20Cup',
  },
  {
    competition: 'POR / Super Cup',
    url: '',
  },
  {
    competition: 'PRY / Primera División',
    url: 'https://www.hpybet.de/sport/fussball/First%20Division',
  },
  {
    competition: 'PRY / División Intermedia',
    url: '',
  },
  {
    competition: 'ROU / Liga I',
    url: 'https://www.hpybet.de/sport/fussball/Liga%201',
  },
  {
    competition: 'ROU / Liga II',
    url: '',
  },
  {
    competition: 'SCO / Championship',
    url: 'https://www.hpybet.de/sport/fussball/Championship',
  },
  {
    competition: 'SCO / League Cup',
    url: 'https://www.hpybet.de/sport/fussball/League%20Cup',
  },
  {
    competition: 'SCO / Scottish Cup',
    url: 'https://www.hpybet.de/sport/fussball/Schottland%20Cup',
  },
  {
    competition: 'SCO / League One',
    url: 'https://www.hpybet.de/sport/fussball/League%20One',
  },
  {
    competition: 'SCO / League Two',
    url: '',
  },
  {
    competition: 'SCO / Premiership',
    url: 'https://www.hpybet.de/sport/fussball/Premiership',
  },
  {
    competition: 'SEN / Premier League',
    url: '',
  },
  {
    competition: 'SGP / Premier League',
    url: 'https://www.hpybet.de/sport/fussball/Singapur%20Premier%20League',
  },
  {
    competition: 'SVK / I. Liga',
    url: 'https://www.hpybet.de/sport/fussball/Superliga',
  },
  {
    competition: 'SVK / II. Liga',
    url: 'https://www.hpybet.de/sport/fussball/2.%20Liga',
  },
  {
    competition: 'SVN / PrvaLiga',
    url: 'https://www.hpybet.de/sport/fussball/PrvaLiga',
  },
  {
    competition: 'SVN / Second League',
    url: 'https://www.hpybet.de/sport/fussball/2.%20SNL',
  },
  {
    competition: 'SWE / Allsvenskan',
    url: 'https://www.hpybet.de/sport/fussball/Allsvenskan',
  },
  {
    competition: 'SWE / Damallsvenskan',
    url: '',
  },
  {
    competition: 'SWE / Division 2',
    url: '',
  },
  {
    competition: 'SWE / Superettan',
    url: 'https://www.hpybet.de/sport/fussball/Superettan',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://www.hpybet.de/sport/fussball/Division%201',
  },
  {
    competition: 'SWE / Ettan',
    url: '',
  },
  {
    competition: 'TUR / 1. Lig',
    url: '',
  },
  {
    competition: 'TUR / 2. Lig',
    url: '',
  },
  {
    competition: 'TUR / Süper Lig',
    url: 'https://www.hpybet.de/sport/fussball/S%C3%BCper%20Lig',
  },
  {
    competition: 'URY / Primera División',
    url: 'https://www.hpybet.de/sport/fussball/Primera%20Division',
  },
  {
    competition: 'URY / Segunda División',
    url: 'https://www.hpybet.de/sport/fussball/Segunda%20Division',
  },
  {
    competition: 'USA / Major League Soccer',
    url: 'https://www.hpybet.de/sport/fussball/Major%20League%20Soccer',
  },
  {
    competition: 'USA / USL Championship',
    url: 'https://www.hpybet.de/sport/fussball/USL%2C%20Championship',
  },
  {
    competition: 'USA / USL League Two',
    url: 'https://www.hpybet.de/sport/fussball/USL%20League%20One',
  },
  {
    competition: 'VNM / V.League 1',
    url: 'https://www.hpybet.de/sport/fussball/V-League',
  },
];

export default competitionUrlList;
