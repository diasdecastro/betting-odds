//TODO: Alle Wettbewerbe integrieren
const competitionUrlList = [
  {
    competition: 'ARG / Primera B',
    url: 'https://www.winamax.de/sportwetten/sports/1/48/85016',
  },
  {
    competition: 'ARG / Primera División',
    url: 'https://www.winamax.de/sportwetten/sports/1/48/68',
  },
  {
    competition: 'ARG / Primera Nacional',
    url: '',
  },
  {
    competition: 'ARG / Copa Argentina',
    url: 'https://www.winamax.de/sportwetten/sports/1/48/273',
  },
  {
    competition: 'AUS / A-League',
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
    url: 'https://www.winamax.de/sportwetten/sports/1/17/29',
  },
  {
    competition: 'AUT / 2. Liga',
    url: 'https://www.winamax.de/sportwetten/sports/1/17/30',
  },
  {
    competition: 'BEL / Pro League',
    url: 'https://www.winamax.de/sportwetten/sports/1/33/38',
  },
  {
    competition: 'BGR / First League',
    url: 'https://www.winamax.de/sportwetten/sports/1/78/232',
  },
  {
    competition: 'BGR / Second League',
    url: '',
  },
  {
    competition: 'BOL / Primera División',
    url: '',
  },
  {
    competition: 'BRA / Copa do Brasil',
    url: '',
  },
  {
    competition: 'BRA / Série A',
    url: 'https://www.winamax.de/sportwetten/sports/1/13/83',
  },
  {
    competition: 'BRA / Série B',
    url: '',
  },
  {
    competition: 'BRA / Série C',
    url: '',
  },
  {
    competition: 'CAN / Premier League',
    url: 'https://www.winamax.de/sportwetten/sports/1/388/80244',
  },
  {
    competition: 'CHE / Challenge League',
    url: 'https://www.winamax.de/sportwetten/sports/1/25/1061',
  },
  {
    competition: 'CHE / Super League',
    url: 'https://www.winamax.de/sportwetten/sports/1/25/1060',
  },
  {
    competition: 'CHL / Copa Chile',
    url: 'https://www.winamax.de/sportwetten/sports/1/49/9133',
  },
  {
    competition: 'CHL / Primera B',
    url: '',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://www.winamax.de/sportwetten/sports/1/49/67280',
  },
  {
    competition: 'CHL / Segunda División',
    url: '',
  },
  {
    competition: 'CHN / Super League',
    url: 'https://www.winamax.de/sportwetten/sports/1/99/652',
  },
  {
    competition: 'CHN / China League',
    url: '',
  },
  {
    competition: 'CHN / Division Two League',
    url: '',
  },
  {
    competition: 'COL / Categoría Primera A',
    url: 'https://www.winamax.de/sportwetten/sports/1/274/19236',
  },
  {
    competition: 'COL / Categoría Primera B',
    url: 'https://www.winamax.de/sportwetten/sports/1/274/61189',
  },
  {
    competition: 'COL / Copa Colombia',
    url: '',
  },
  {
    competition: 'CZE / FORTUNA:LIGA',
    url: 'https://www.winamax.de/sportwetten/sports/1/18/49',
  },
  {
    competition: 'CZE / National Football League',
    url: '',
  },
  {
    competition: 'DNK / 1. division',
    url: 'https://www.winamax.de/sportwetten/sports/1/8/13',
  },
  {
    competition: 'DNK / Superligaen',
    url: 'https://www.winamax.de/sportwetten/sports/1/8/12',
  },
  {
    competition: 'DNK / DBU Cup',
    url: '',
  },
  {
    competition: 'ECU / Serie A',
    url: 'https://www.winamax.de/sportwetten/sports/1/165/1387',
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
    url: 'https://www.winamax.de/sportwetten/sports/1/1/2',
  },
  {
    competition: 'ENG / EFL Cup',
    url: 'https://www.winamax.de/sportwetten/sports/1/1/17',
  },
  {
    competition: 'ENG / EFL League One',
    url: 'https://www.winamax.de/sportwetten/sports/1/1/3',
  },
  {
    competition: 'ENG / EFL League Two',
    url: '',
  },
  {
    competition: 'ENG / FA Community Shield',
    url: 'https://www.winamax.de/sportwetten/sports/1/1/1307',
  },
  {
    competition: 'ENG / FA Cup',
    url: 'https://www.winamax.de/sportwetten/sports/1/1/16',
  },
  {
    competition: 'ENG / League Cup',
    url: '',
  },
  {
    competition: 'ENG / Premier League',
    url: 'https://www.winamax.de/sportwetten/sports/1/1/1',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://www.winamax.de/sportwetten/sports/1/32/36',
  },
  {
    competition: 'ESP / La Liga 2',
    url: 'https://www.winamax.de/sportwetten/sports/1/32/37',
  },
  {
    competition: 'ESP / Copa Del Rey',
    url: '',
  },
  {
    competition: 'FIN / Kolmonen',
    url: '',
  },
  {
    competition: 'FIN / Veikkausliiga',
    url: 'https://www.winamax.de/sportwetten/sports/1/19/31',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://www.winamax.de/sportwetten/sports/1/19/527',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://www.winamax.de/sportwetten/sports/1/7/4',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://www.winamax.de/sportwetten/sports/1/7/19',
  },
  {
    competition: 'FRA / Coupe de France',
    url: 'https://www.winamax.de/sportwetten/sports/1/7/77',
  },
  {
    competition: 'GER / 2. Bundesliga',
    url: 'https://www.winamax.de/sportwetten/sports/1/30/41',
  },
  {
    competition: 'GER / 3. Liga',
    url: 'https://www.winamax.de/sportwetten/sports/1/30/8343',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://www.winamax.de/sportwetten/sports/1/30/42',
  },
  {
    competition: 'GER / DFB Pokal',
    url: 'https://www.winamax.de/sportwetten/sports/1/30/43',
  },
  {
    competition: 'GER / Supercup',
    url: 'https://www.winamax.de/sportwetten/sports/1/30/6456',
  },
  {
    competition: 'GRC / Super League 1',
    url: 'https://www.winamax.de/sportwetten/sports/1/67/127',
  },
  {
    competition: 'HRV / HNL',
    url: 'https://www.winamax.de/sportwetten/sports/1/14/48',
  },
  {
    competition: 'HUN / NB I',
    url: 'https://www.winamax.de/sportwetten/sports/1/11/50',
  },
  {
    competition: 'HUN / NB II',
    url: '',
  },
  {
    competition: 'INT / Champions League',
    url: '',
  },
  {
    competition: 'IRL / First Division',
    url: 'https://www.winamax.de/sportwetten/sports/1/51/718',
  },
  {
    competition: 'IRL / Premier Division',
    url: 'https://www.winamax.de/sportwetten/sports/1/51/79',
  },
  {
    competition: 'ISL / 1. deild karla',
    url: 'https://www.winamax.de/sportwetten/sports/1/10/582',
  },
  {
    competition: 'ISL / 2. deild karla',
    url: '',
  },
  {
    competition: 'ISL / Besta deild karla',
    url: 'https://www.winamax.de/sportwetten/sports/1/10/102',
  },
  {
    competition: 'ISL / Womens Super Cup',
    url: '',
  },
  {
    competition: 'ITA / Coppa Italia',
    url: '',
  },
  {
    competition: 'ITA / Serie A',
    url: 'https://www.winamax.de/sportwetten/sports/1/31/33',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://www.winamax.de/sportwetten/sports/1/31/34',
  },
  {
    competition: 'ITA / Super Cup',
    url: '',
  },
  {
    competition: 'JPN / Emperors Cup',
    url: 'https://www.winamax.de/sportwetten/sports/1/52/5126',
  },
  {
    competition: 'JPN / J. League Cup',
    url: '',
  },
  {
    competition: 'JPN / J1 League',
    url: 'https://www.winamax.de/sportwetten/sports/1/52/82',
  },
  {
    competition: 'JPN / J2 League',
    url: '',
  },
  {
    competition: 'JPN / J3 League',
    url: '',
  },
  {
    competition: 'KAZ / Premier League',
    url: '',
  },
  {
    competition: 'KAZ / First Division',
    url: 'https://www.winamax.de/sportwetten/sports/1/278/3103',
  },
  {
    competition: 'KOR / K-League 1',
    url: 'https://www.winamax.de/sportwetten/sports/1/291/3284',
  },
  {
    competition: 'KOR / K-League 2',
    url: '',
  },
  {
    competition: 'KOR / K3 League',
    url: '',
  },
  {
    competition: 'KOR / K4 League',
    url: '',
  },
  {
    competition: 'LTU / A Lyga',
    url: 'https://www.winamax.de/sportwetten/sports/1/160/1260',
  },
  {
    competition: 'LTU / I Lyga',
    url: '',
  },
  {
    competition: 'MMR / National League',
    url: '',
  },
  {
    competition: 'NLD / Eerste Divisie',
    url: '',
  },
  {
    competition: 'NLD / Eredivisie',
    url: 'https://www.winamax.de/sportwetten/sports/1/35/39',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://www.winamax.de/sportwetten/sports/1/5/5',
  },
  {
    competition: 'NOR / First Division',
    url: '',
  },
  {
    competition: 'NOR / Second Division',
    url: '',
  },
  {
    competition: 'NZL / Chatham Cup',
    url: '',
  },
  {
    competition: 'PER / Liga 1',
    url: 'https://www.winamax.de/sportwetten/sports/1/20/34468',
  },
  {
    competition: 'PER / Liga 2',
    url: '',
  },
  {
    competition: 'POL / Ekstraklasa',
    url: 'https://www.winamax.de/sportwetten/sports/1/47/64',
  },
  {
    competition: 'POL / I liga',
    url: '',
  },
  {
    competition: 'POL / II liga',
    url: 'https://www.winamax.de/sportwetten/sports/1/47/36794',
  },
  {
    competition: 'POR / Liga Portugal',
    url: 'https://www.winamax.de/sportwetten/sports/1/44/52',
  },
  {
    competition: 'POR / League Cup',
    url: 'https://www.winamax.de/sportwetten/sports/1/44/104908',
  },
  {
    competition: 'POR / Super Cup',
    url: 'https://www.winamax.de/sportwetten/sports/1/44/2306',
  },
  {
    competition: 'PRY / Primera División',
    url: 'https://www.winamax.de/sportwetten/sports/1/280/16752',
  },
  {
    competition: 'PRY / División Intermedia',
    url: 'https://www.winamax.de/sportwetten/sports/1/280/13304',
  },
  {
    competition: 'ROU / Liga I',
    url: 'https://www.winamax.de/sportwetten/sports/1/77/219',
  },
  {
    competition: 'ROU / Liga II',
    url: 'https://www.winamax.de/sportwetten/sports/1/77/54878',
  },
  {
    competition: 'SCO / Championship',
    url: '',
  },
  {
    competition: 'SCO / League Cup',
    url: 'https://www.winamax.de/sportwetten/sports/1/22/982',
  },
  {
    competition: 'SCO / Scottish Cup',
    url: '',
  },
  {
    competition: 'SCO / League One',
    url: '',
  },
  {
    competition: 'SCO / League Two',
    url: '',
  },
  {
    competition: 'SCO / Premiership',
    url: 'https://www.winamax.de/sportwetten/sports/1/22/54',
  },
  {
    competition: 'SEN / Premier League',
    url: '',
  },
  {
    competition: 'SGP / Premier League',
    url: '',
  },
  {
    competition: 'SVK / I. Liga',
    url: 'https://www.winamax.de/sportwetten/sports/1/23/92',
  },
  {
    competition: 'SVK / II. Liga',
    url: '',
  },
  {
    competition: 'SVN / PrvaLiga',
    url: 'https://www.winamax.de/sportwetten/sports/1/24/94',
  },
  {
    competition: 'SVN / Second League',
    url: 'https://www.winamax.de/sportwetten/sports/1/24/8210',
  },
  {
    competition: 'SWE / Allsvenskan',
    url: 'https://www.winamax.de/sportwetten/sports/1/9/24',
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
    url: 'https://www.winamax.de/sportwetten/sports/1/9/27',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://www.winamax.de/sportwetten/sports/1/9/4302',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://www.winamax.de/sportwetten/sports/1/9/4301',
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
    url: 'https://www.winamax.de/sportwetten/sports/1/46/62',
  },
  {
    competition: 'URY / Primera División',
    url: '',
  },
  {
    competition: 'URY / Segunda División',
    url: '',
  },
  {
    competition: 'USA / Major League Soccer',
    url: 'https://www.winamax.de/sportwetten/sports/1/26/18',
  },
  {
    competition: 'USA / USL Championship',
    url: 'https://www.winamax.de/sportwetten/sports/1/26/78360',
  },
  {
    competition: 'USA / USL League One',
    url: 'https://www.winamax.de/sportwetten/sports/1/26/78361',
  },
  {
    competition: 'USA / USL League Two',
    url: '',
  },
  {
    competition: 'VNM / V.League 1',
    url: '',
  },
];

export default competitionUrlList;
