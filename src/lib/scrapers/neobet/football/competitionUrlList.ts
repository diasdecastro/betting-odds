//TODO: Alle Wettbewerbe integrieren
/* const competitionUrlList = [
  {
    competition: 'PRY / Primera División',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Paraguay/Primera-Division',
  },
]; */
const competitionUrlList = [
  {
    competition: 'ARG / Primera B',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Argentinien/Primera-B-Metropolitana',
  },
  {
    competition: 'ARG / Primera División',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Argentinien/Liga-Profesional',
  },
  {
    competition: 'ARG / Primera Nacional',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Argentinien/Primera-B-Nacional',
  },
  {
    competition: 'AUS / A-League',
    url: '',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Australien/NPL-Victoria',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Australien/NPL-New-South-Wales',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Australien/NPL-Queensland',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Australien/NPL-Tasmania',
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
    url: '',
  },
  {
    competition: 'AUT / 2. Liga',
    url: '',
  },
  {
    competition: 'BEL / Pro League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Belgien/Jupiler-Pro-League',
  },
  {
    competition: 'BGR / First League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Bulgarien/First-League',
  },
  {
    competition: 'BGR / Second League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Bulgarien/Vtora-Liga',
  },
  {
    competition: 'BOL / Primera División',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Bolivien/Liga-Profesional',
  },
  {
    competition: 'BRA / Copa do Brasil',
    url: '',
  },
  {
    competition: 'BRA / Série A',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Brasilien/Serie-A',
  },
  {
    competition: 'BRA / Série B',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Brasilien/Serie-B',
  },
  {
    competition: 'BRA / Série C',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Brasilien/Serie-C',
  },
  {
    competition: 'CAN / Premier League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Kanada/Premier-League',
  },
  {
    competition: 'CHE / Challenge League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Schweiz/Challenge-League',
  },
  {
    competition: 'CHE / Super League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Schweiz/Super-League',
  },
  {
    competition: 'CHL / Copa Chile',
    url: '',
  },
  {
    competition: 'CHL / Primera B',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Chile/Primera-B',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Chile/Primera-Division',
  },
  {
    competition: 'CHL / Segunda División',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Chile/Segunda-Division',
  },
  {
    competition: 'CHN / Super League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/China/Super-League',
  },
  {
    competition: 'CHN / China League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/China/League-One',
  },
  {
    competition: 'CHN / Division Two League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/China/League-Two',
  },
  {
    competition: 'COL / Categoría Primera A',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Kolumbien/Primera-A',
  },
  {
    competition: 'COL / Categoría Primera B',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Kolumbien/Primera-B',
  },
  {
    competition: 'COL / Copa Colombia',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Kolumbien/Cup',
  },
  {
    competition: 'CZE / FORTUNA:LIGA',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Tschechien/1-Liga',
  },
  {
    competition: 'CZE / National Football League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Tschechien/2-Liga',
  },
  {
    competition: 'DNK / 1. division',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Daenemark/1st-Division',
  },
  {
    competition: 'DNK / Superligaen',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Daenemark/Superligaen',
  },
  {
    competition: 'DNK / DBU Cup',
    url: '',
  },
  {
    competition: 'ECU / Serie A',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Ecuador/LigaPro-Serie-A',
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
    url: 'https://neobet.de/de/Sportwetten/Fussball/England/Championship',
  },
  {
    competition: 'ENG / EFL Cup',
    url: 'https://neobet.de/de/Sportwetten/Fussball/England/EFL-Cup',
  },
  {
    competition: 'ENG / EFL League One',
    url: '',
  },
  {
    competition: 'ENG / EFL League Two',
    url: '',
  },
  {
    competition: 'ENG / FA Community Shield',
    url: 'https://neobet.de/de/Sportwetten/Fussball/England/Community-Shield',
  },
  {
    competition: 'ENG / FA Cup',
    url: '',
  },
  {
    competition: 'ENG / League Cup',
    url: '',
  },
  {
    competition: 'ENG / Premier League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/England/Premier-League',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Spanien/La-Liga',
  },
  {
    competition: 'ESP / La Liga 2',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Spanien/La-Liga-2',
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
    url: 'https://neobet.de/de/Sportwetten/Fussball/Finnland/Veikkausliiga',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Finnland/Ykkoenen',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Frankreich/Ligue-1',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Frankreich/Ligue-2',
  },
  {
    competition: 'FRA / Coupe de France',
    url: '',
  },
  {
    competition: 'GER / 2. Bundesliga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Deutschland/2-Bundesliga',
  },
  {
    competition: 'GER / 3. Liga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Deutschland/3-Liga',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Deutschland/Bundesliga',
  },
  {
    competition: 'GER / DFB Pokal',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Deutschland/DFB-Pokal',
  },
  {
    competition: 'GER / Supercup',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Deutschland/Supercup',
  },
  {
    competition: 'GRC / Super League 1',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Griechenland/Super-League',
  },
  {
    competition: 'HRV / HNL',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Kroatien/1-HNL',
  },
  {
    competition: 'HUN / NB I',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Ungarn/NB-I',
  },
  {
    competition: 'HUN / NB II',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Ungarn/NB-II',
  },
  {
    competition: 'INT / Champions League',
    url: '',
  },
  {
    competition: 'IRL / First Division',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Irland/First-Division',
  },
  {
    competition: 'IRL / Premier Division',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Irland/Premier-Division',
  },
  {
    competition: 'ISL / 1. deild karla',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Island/1-Deild',
  },
  {
    competition: 'ISL / 2. deild karla',
    url: '',
  },
  {
    competition: 'ISL / Besta deild karla',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Island/Premier-League',
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
    url: 'https://neobet.de/de/Sportwetten/Fussball/Italien/Serie-A',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Italien/Serie-B',
  },
  {
    competition: 'ITA / Super Cup',
    url: '',
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
    url: 'https://neobet.de/de/Sportwetten/Fussball/Japan/J-League',
  },
  {
    competition: 'JPN / J2 League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Japan/J-League-2',
  },
  {
    competition: 'JPN / J3 League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Japan/J-League-3',
  },
  {
    competition: 'KAZ / Premier League',
    url: '',
  },
  {
    competition: 'KAZ / First Division',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Kasachstan/Premier-League',
  },
  {
    competition: 'KOR / K-League 1',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Suedkorea/K-League-1',
  },
  {
    competition: 'KOR / K-League 2',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Suedkorea/K-League-2',
  },
  {
    competition: 'KOR / K3 League',
    url: '',
  },
  {
    competition: 'KOR / K4 League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Suedkorea/K-League-4',
  },
  {
    competition: 'LTU / A Lyga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Litauen/A-Lyga',
  },
  {
    competition: 'LTU / I Lyga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Litauen/I-Lyga',
  },
  {
    competition: 'MMR / National League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Myanmar/National-League',
  },
  {
    competition: 'NLD / Eerste Divisie',
    url: '',
  },
  {
    competition: 'NLD / Eredivisie',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Niederlande/Eredivisie',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Norwegen/Eliteserien',
  },
  {
    competition: 'NOR / First Division',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Norwegen/1st-Division',
  },
  {
    competition: 'NOR / Second Division',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Norwegen/2nd-Division',
  },
  {
    competition: 'NZL / Chatham Cup',
    url: '',
  },
  {
    competition: 'PER / Liga 1',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Peru/Primera-Division',
  },
  {
    competition: 'PER / Liga 2',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Peru/Segunda-Division',
  },
  {
    competition: 'POL / Ekstraklasa',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Polen/Ekstraklasa',
  },
  {
    competition: 'POL / I liga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Polen/I-Liga',
  },
  {
    competition: 'POL / II liga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Polen/II-Liga',
  },
  {
    competition: 'POR / Liga Portugal',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Portugal/League-Cup',
  },
  {
    competition: 'POR / League Cup',
    url: '',
  },
  {
    competition: 'POR / Super Cup',
    url: '',
  },
  {
    competition: 'PRY / Primera División',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Paraguay/Primera-Division',
  },
  {
    competition: 'PRY / División Intermedia',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Paraguay/Division-Intermedia',
  },
  {
    competition: 'ROU / Liga I',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Rumaenien/Liga-I',
  },
  {
    competition: 'ROU / Liga II',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Rumaenien/Liga-II',
  },
  {
    competition: 'SCO / Championship',
    url: '',
  },
  {
    competition: 'SCO / League Cup',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Schottland/League-Cup',
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
    url: 'https://neobet.de/de/Sportwetten/Fussball/Schottland/Premiership',
  },
  {
    competition: 'SEN / Premier League',
    url: '',
  },
  {
    competition: 'SGP / Premier League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Singapur/Premier-League',
  },
  {
    competition: 'SVK / I. Liga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Slowakei/Fortuna-Liga',
  },
  {
    competition: 'SVK / II. Liga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Slowakei/2-Liga',
  },
  {
    competition: 'SVN / PrvaLiga',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Slowenien/Prva-Liga',
  },
  {
    competition: 'SVN / Second League',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Slowenien/2-SNL',
  },
  {
    competition: 'SWE / Allsvenskan',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Schweden/Allsvenskan',
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
    url: 'https://neobet.de/de/Sportwetten/Fussball/Schweden/Superettan',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Schweden/1st-Division-Norra',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Schweden/1st-Division-Soedra',
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
    url: 'https://neobet.de/de/Sportwetten/Fussball/Tuerkei/Super-Lig',
  },
  {
    competition: 'URY / Primera División',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Uruguay/Primera-Division',
  },
  {
    competition: 'URY / Segunda División',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Uruguay/Segunda-Division',
  },
  {
    competition: 'USA / Major League Soccer',
    url: '',
  },
  {
    competition: 'USA / USL Championship',
    url: 'https://neobet.de/de/Sportwetten/Fussball/USA/USL-Championship',
  },
  {
    competition: 'USA / USL League Two',
    url: '',
  },
  {
    competition: 'VNM / V.League 1',
    url: 'https://neobet.de/de/Sportwetten/Fussball/Vietnam/V-League',
  },
];

export default competitionUrlList;
