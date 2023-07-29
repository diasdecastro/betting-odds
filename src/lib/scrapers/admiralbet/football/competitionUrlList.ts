//TODO: Alle Wettbewerbe integrieren
const competitionUrlList = [
  {
    competition: 'ARG / Primera B',
    url: '',
  },
  {
    competition: 'ARG / Primera División',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/argentinien/liga-profesional?filter=betting',
  },
  {
    competition: 'ARG / Primera Nacional',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/argentinien/primera-nacional?filter=betting',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/australien/national-premier-league?filter=betting',
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
    competition: 'BEL / Pro League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/belgien/1-division-a?filter=betting',
  },
  {
    competition: 'BGR / First League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/bulgarien/parva-liga?filter=betting',
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
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/brasilien/brasileiro-serie-a?filter=betting',
  },
  {
    competition: 'BRA / Série B',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/brasilien/brasileiro-serie-b?filter=betting',
  },
  {
    competition: 'BRA / Série C',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/brasilien/brasileiro-serie-c?filter=betting',
  },
  {
    competition: 'CAN / Premier League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/kanada/premier-league?filter=betting',
  },
  {
    competition: 'CHE / Challenge League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/schweiz/challenge-league?filter=betting',
  },
  {
    competition: 'CHE / Super League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/schweiz/super-league?filter=betting',
  },
  {
    competition: 'CHL / Copa Chile',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/chile/copa-chile',
  },
  {
    competition: 'CHL / Primera B',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/chile/primera-b?filter=betting',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/chile/primera-division?filter=betting',
  },
  {
    competition: 'CHL / Segunda División',
    url: '',
  },
  {
    competition: 'CHN / Super League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/china/super-league?filter=betting',
  },
  {
    competition: 'COL / Categoría Primera A',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/kolumbien/primera-a?filter=betting',
  },
  {
    competition: 'COL / Categoría Primera B',
    url: '',
  },
  {
    competition: 'COL / Copa Colombia',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/kolumbien/copa-colombia',
  },
  {
    competition: 'CZE / FORTUNA:LIGA',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/tschechien/1-liga?filter=betting',
  },
  {
    competition: 'CZE / National Football League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/tschechien/fnl?filter=betting',
  },
  {
    competition: 'DNK / 1. division',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/daenemark/1-division?filter=betting',
  },
  {
    competition: 'DNK / Superligaen',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/daenemark/superliga?filter=betting',
  },
  {
    competition: 'ECU / Serie A',
    url: '',
  },
  {
    competition: 'ECU / Serie B',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/ecuador/serie-b?filter=betting',
  },
  {
    competition: 'EGY / Premier League',
    url: '',
  },
  {
    competition: 'ENG / EFL Championship',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/england/championship?filter=betting',
  },
  {
    competition: 'ENG / EFL Cup',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/england/efl-cup',
  },
  {
    competition: 'ENG / EFL League One',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/england/league-one?filter=betting',
  },
  {
    competition: 'ENG / EFL League Two',
    url: '',
  },
  {
    competition: 'ENG / FA Community Shield',
    url: '',
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
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/england/premier-league?filter=betting',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/spanien/laliga?filter=betting',
  },
  {
    competition: 'ESP / La Liga 2',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/spanien/laliga-2?filter=betting',
  },
  {
    competition: 'FIN / Kolmonen',
    url: '',
  },
  {
    competition: 'FIN / Veikkausliiga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/finnland/veikkausliiga?filter=betting',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/finnland/ykkonen?filter=betting',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/frankreich/ligue-1?filter=betting',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/frankreich/ligue-2?filter=betting',
  },
  {
    competition: 'GER / 2. Bundesliga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/deutschland/2-bundesliga?filter=betting',
  },
  {
    competition: 'GER / 3. Liga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/deutschland/3-liga?filter=betting',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/deutschland/bundesliga?filter=betting',
  },
  {
    competition: 'GER / DFB Pokal',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/deutschland/dfb-pokal',
  },
  {
    competition: 'GER / Supercup',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/deutschland/supercup',
  },
  {
    competition: 'GRC / Super League 1',
    url: '',
  },
  {
    competition: 'HRV / HNL',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/kroatien/1-hnl?filter=betting',
  },
  {
    competition: 'HUN / NB I',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/ungarn/nb-i?filter=betting',
  },
  {
    competition: 'HUN / NB II',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/ungarn/nb-ii?filter=betting',
  },
  {
    competition: 'INT / Champions League',
    url: '',
  },
  {
    competition: 'IRL / First Division',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/irland/first-division?filter=betting',
  },
  {
    competition: 'IRL / Premier Division',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/irland/premier-division?filter=betting',
  },
  {
    competition: 'ISL / 1. deild karla',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/island/1-deild?filter=betting',
  },
  {
    competition: 'ISL / 2. deild karla',
    url: '',
  },
  {
    competition: 'ISL / Besta deild karla',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/island/besta-deild?filter=betting',
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
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/italien/serie-a?filter=betting',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/italien/serie-b?filter=betting',
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
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/japan/j-league?filter=betting',
  },
  {
    competition: 'JPN / J2 League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/japan/j-league-2?filter=betting',
  },
  {
    competition: 'JPN / J3 League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/japan/j-league-3?filter=betting',
  },
  {
    competition: 'KAZ / Premier League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/kasachstan/premier-league?filter=betting',
  },
  {
    competition: 'KAZ / First Division',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/kasachstan/1-division?filter=betting',
  },
  {
    competition: 'KOR / K-League 1',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/suedkorea/k-league-1?filter=betting',
  },
  {
    competition: 'KOR / K-League 2',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/suedkorea/k-league-2?filter=betting',
  },
  {
    competition: 'KOR / K3 League',
    url: '',
  },
  {
    competition: 'LTU / A Lyga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/litauen/a-lyga?filter=betting',
  },
  {
    competition: 'LTU / I Lyga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/litauen/i-lyga?filter=betting',
  },
  {
    competition: 'MMR / National League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/myanmar/national-league?filter=betting',
  },
  {
    competition: 'NLD / Eerste Divisie',
    url: '',
  },
  {
    competition: 'NLD / Eredivisie',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/niederlande/eredivisie?filter=betting',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/norwegen/eliteserien?filter=betting',
  },
  {
    competition: 'NOR / First Division',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/norwegen/1-division?filter=betting',
  },
  {
    competition: 'NOR / Second Division',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/norwegen/2-division?filter=betting',
  },
  {
    competition: 'NZL / Chatham Cup',
    url: '',
  },
  {
    competition: 'PER / Liga 1',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/peru/primera-division?filter=betting',
  },
  {
    competition: 'PER / Liga 2',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/peru/segunda-division?filter=betting',
  },
  {
    competition: 'POL / Ekstraklasa',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/polen/ekstraklasa?filter=betting',
  },
  {
    competition: 'POL / I liga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/polen/i-liga?filter=betting',
  },
  {
    competition: 'POL / II liga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/polen/ii-liga?filter=betting',
  },
  {
    competition: 'POR / Liga Portugal',
    url: '',
  },
  {
    competition: 'POR / League Cup',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/portugal/league-cup',
  },
  {
    competition: 'POR / Super Cup',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/portugal/super-cup',
  },
  {
    competition: 'PRY / Primera División',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/paraguay/primera-division?filter=betting',
  },
  {
    competition: 'PRY / División Intermedia',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/paraguay/segunda-division?filter=betting',
  },
  {
    competition: 'ROU / Liga I',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/rumaenien/liga-i?filter=betting',
  },
  {
    competition: 'SCO / Championship',
    url: '',
  },
  {
    competition: 'SCO / League Cup',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/schottland/league-cup?filter=betting',
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
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/schottland/premiership?filter=betting',
  },
  {
    competition: 'SEN / Premier League',
    url: '',
  },
  {
    competition: 'SGP / Premier League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/singapur/premier-league?filter=betting',
  },
  {
    competition: 'SVK / I. Liga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/slowakei/superliga?filter=betting',
  },
  {
    competition: 'SVK / II. Liga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/slowakei/2-liga?filter=betting',
  },
  {
    competition: 'SVN / PrvaLiga',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/slowenien/prvaliga',
  },
  {
    competition: 'SVN / Second League',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/slowenien/2-snl?filter=betting',
  },
  {
    competition: 'SWE / Allsvenskan',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/schweden/allsvenskan?filter=betting',
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
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/schweden/superettan?filter=betting',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/schweden/1-division?filter=betting',
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
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/tuerkei/sueper-lig?filter=betting',
  },
  {
    competition: 'URY / Primera División',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/uruguay/primera-division?filter=betting',
  },
  {
    competition: 'USA / Major League Soccer',
    url: '',
  },
  {
    competition: 'USA / USL Championship',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/usa/usl-championship?filter=betting',
  },
  {
    competition: 'USA / USL League Two',
    url: '',
  },
  {
    competition: 'VNM / V.League 1',
    url: 'https://www.admiralbet.de/de/sports/sportwetten/fussball/vietnam/v-league?filter=betting',
  },
];

export default competitionUrlList;
