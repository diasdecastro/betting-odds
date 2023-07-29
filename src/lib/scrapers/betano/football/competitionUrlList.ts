//TODO: Alle Wettbewerbe integrieren
const competitionUrlList = [
  {
    competition: 'ARG / Primera B',
    url: 'https://www.betano.de/sport/fussball/argentinien/primera-b-metropolitana/17532r/',
  },
  {
    competition: 'ARG / Primera División',
    url: 'https://www.betano.de/sport/fussball/argentinien/liga-profesional/195785r/',
  },
  {
    competition: 'ARG / Primera Nacional',
    url: 'https://www.betano.de/sport/fussball/argentinien/primera-b-nacional/17244r/',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.betano.de/sport/fussball/australien/npl-queensland/189802r/',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.betano.de/sport/fussball/australien/npl-south-australia/17318r/',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.betano.de/sport/fussball/australien/npl-victoria/17360r/',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.betano.de/sport/fussball/australien/npl-capital/17436r/',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.betano.de/sport/fussball/australien/npl-nsw/17458r/',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.betano.de/sport/fussball/australien/npl-western-australia/17499r/',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.betano.de/sport/fussball/australien/npl-tasmania/182275r/',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.betano.de/sport/fussball/australien/npl-northern-nsw/183992r/',
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
    url: 'https://www.betano.de/sport/fussball/belgien/1a-pro-league/16849r/',
  },
  {
    competition: 'BGR / First League',
    url: 'https://www.betano.de/sport/fussball/bulgarien/parva-liga/16918r/',
  },
  {
    competition: 'BGR / Second League',
    url: 'https://www.betano.de/sport/fussball/bulgarien/vtora-liga/182182r/',
  },
  {
    competition: 'BOL / Primera División',
    url: 'https://www.betano.de/sport/fussball/bolivien/division-profesional/18274r/',
  },
  {
    competition: 'BRA / Copa do Brasil',
    url: 'https://www.betano.de/sport/fussball/brasilien/copa-betano-do-brasil/10008r/',
  },
  {
    competition: 'BRA / Série A',
    url: 'https://www.betano.de/sport/fussball/brasilien/brasileirao-serie-a/10016r/',
  },
  {
    competition: 'BRA / Série B',
    url: 'https://www.betano.de/sport/fussball/brasilien/brasileirao-serie-b-betano/10017r/',
  },
  {
    competition: 'BRA / Série C',
    url: 'https://www.betano.de/sport/fussball/brasilien/brasileirao-serie-c/18249r/',
  },
  {
    competition: 'CAN / Premier League',
    url: 'https://www.betano.de/sport/fussball/kanada/premier-league/194888r/',
  },
  {
    competition: 'CHE / Challenge League',
    url: 'https://www.betano.de/sport/fussball/schweiz/challenge-league/17123r/',
  },
  {
    competition: 'CHE / Super League',
    url: 'https://www.betano.de/sport/fussball/schweiz/super-league/17122r/',
  },
  {
    competition: 'CHL / Copa Chile',
    url: 'https://www.betano.de/sport/fussball/chile/copa-chile/16930r/',
  },
  {
    competition: 'CHL / Primera B',
    url: 'https://www.betano.de/sport/fussball/chile/primera-b/17561r/',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://www.betano.de/sport/fussball/chile/primera-division/16932r/',
  },
  {
    competition: 'CHL / Segunda División',
    url: 'https://www.betano.de/sport/fussball/chile/segunda-division/17600r/',
  },
  {
    competition: 'CHN / Super League',
    url: 'https://www.betano.de/sport/fussball/china/super-league/16935r/',
  },
  {
    competition: 'CHN / China League',
    url: 'https://www.betano.de/sport/fussball/china/liga-1/16934r/',
  },
  {
    competition: 'CHN / Division Two League',
    url: 'https://www.betano.de/sport/fussball/china/liga-2/17366r/',
  },
  {
    competition: 'COL / Categoría Primera A',
    url: 'https://www.betano.de/sport/fussball/kolumbien/categoria-primera-a/16940r/',
  },
  {
    competition: 'COL / Categoría Primera B',
    url: 'https://www.betano.de/sport/fussball/kolumbien/categoria-primera-b/17500r/',
  },
  {
    competition: 'COL / Copa Colombia',
    url: 'https://www.betano.de/sport/fussball/kolumbien/copa-colombia/16939r/',
  },
  {
    competition: 'CZE / FORTUNA:LIGA',
    url: 'https://www.betano.de/sport/fussball/tschechische-republik/1-liga/16952r/',
  },
  {
    competition: 'CZE / National Football League',
    url: 'https://www.betano.de/sport/fussball/tschechische-republik/2-liga/17460r/',
  },
  {
    competition: 'DNK / 1. division',
    url: 'https://www.betano.de/sport/fussball/danemark/1-division/17126r/',
  },
  {
    competition: 'DNK / Superligaen',
    url: 'https://www.betano.de/sport/fussball/danemark/superligaen/16955r/',
  },
  {
    competition: 'ECU / Serie A',
    url: 'https://www.betano.de/sport/fussball/ecuador/liga-pro-serie-a/17249r/',
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
    url: 'https://www.betano.de/sport/fussball/england/championship/2r/',
  },
  {
    competition: 'ENG / EFL Cup',
    url: 'https://www.betano.de/sport/fussball/england/efl-cup/10215r/',
  },
  {
    competition: 'ENG / EFL League One',
    url: 'https://www.betano.de/sport/fussball/england/league-one/527r/',
  },
  {
    competition: 'ENG / EFL League Two',
    url: '',
  },
  {
    competition: 'ENG / FA Community Shield',
    url: 'https://www.betano.de/sport/fussball/england/community-shield/10458r/',
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
    url: 'https://www.betano.de/sport/fussball/england/premier-league/1r/',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://www.betano.de/sport/fussball/spanien/laliga/5r/',
  },
  {
    competition: 'ESP / La Liga 2',
    url: 'https://www.betano.de/sport/fussball/spanien/segunda-division/10000r/',
  },
  {
    competition: 'FIN / Kolmonen',
    url: '',
  },
  {
    competition: 'FIN / Veikkausliiga',
    url: 'https://www.betano.de/sport/fussball/finnland/veikkausliiga/16996r/',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://www.betano.de/sport/fussball/finnland/ykkonen/16997r/',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://www.betano.de/sport/fussball/frankreich/ligue-1/215r/',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://www.betano.de/sport/fussball/frankreich/ligue-2/10467r/',
  },
  {
    competition: 'GER / 2. Bundesliga',
    url: 'https://www.betano.de/sport/fussball/deutschland/2-bundesliga/217r/',
  },
  {
    competition: 'GER / 3. Liga',
    url: 'https://www.betano.de/sport/fussball/deutschland/3-liga/17313r/',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://www.betano.de/sport/fussball/deutschland/bundesliga/216r/',
  },
  {
    competition: 'GER / DFB Pokal',
    url: 'https://www.betano.de/sport/fussball/deutschland/dfb-pokal/10486r/',
  },
  {
    competition: 'GER / Supercup',
    url: 'https://www.betano.de/sport/fussball/deutschland/dfl-supercup/10456r/',
  },
  {
    competition: 'GRC / Super League 1',
    url: 'https://www.betano.de/sport/fussball/griechenland/super-league-1/1636r/',
  },
  {
    competition: 'HRV / HNL',
    url: 'https://www.betano.de/sport/fussball/kroatien/hnl/16941r/',
  },
  {
    competition: 'HUN / NB I',
    url: 'https://www.betano.de/sport/fussball/ungarn/nb-i/17024r/',
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
    url: 'https://www.betano.de/sport/fussball/irland/1-liga/18080r/',
  },
  {
    competition: 'IRL / Premier Division',
    url: 'https://www.betano.de/sport/fussball/irland/premier-division/17041r/',
  },
  {
    competition: 'ISL / 1. deild karla',
    url: 'https://www.betano.de/sport/fussball/island/lengjudeild/17229r/',
  },
  {
    competition: 'ISL / 2. deild karla',
    url: '',
  },
  {
    competition: 'ISL / Besta deild karla',
    url: 'https://www.betano.de/sport/fussball/island/urvalsdeild/18128r/',
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
    url: 'https://www.betano.de/sport/fussball/italien/serie-a/1635r/',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://www.betano.de/sport/fussball/italien/serie-b/10210r/',
  },
  {
    competition: 'ITA / Super Cup',
    url: '',
  },
  {
    competition: 'JPN / Emperors Cup',
    url: 'https://www.betano.de/sport/fussball/japan/emperor-cup/17057r/',
  },
  {
    competition: 'JPN / J. League Cup',
    url: '',
  },
  {
    competition: 'JPN / J1 League',
    url: 'https://www.betano.de/sport/fussball/japan/j1-league/17058r/',
  },
  {
    competition: 'JPN / J2 League',
    url: 'https://www.betano.de/sport/fussball/japan/j2-league/17059r/',
  },
  {
    competition: 'JPN / J3 League',
    url: 'https://www.betano.de/sport/fussball/japan/j3-league/18112r/',
  },
  {
    competition: 'KAZ / Premier League',
    url: 'https://www.betano.de/sport/fussball/kasachstan/premier-league/18123r/',
  },
  {
    competition: 'KAZ / First Division',
    url: 'https://www.betano.de/sport/fussball/kasachstan/1-liga/17400r/',
  },
  {
    competition: 'KOR / K-League 1',
    url: 'https://www.betano.de/sport/fussball/sudkorea/k-league-1/17060r/',
  },
  {
    competition: 'KOR / K-League 2',
    url: 'https://www.betano.de/sport/fussball/sudkorea/k-league-2/18233r/',
  },
  {
    competition: 'KOR / K3 League',
    url: '',
  },
  {
    competition: 'LTU / A Lyga',
    url: 'https://www.betano.de/sport/fussball/litauen/a-lyga/17062r/',
  },
  {
    competition: 'LTU / I Lyga',
    url: 'https://www.betano.de/sport/fussball/litauen/1-lyga/17461r/',
  },
  {
    competition: 'MMR / National League',
    url: 'https://www.betano.de/sport/fussball/myanmar/national-league/185719r/',
  },
  {
    competition: 'NLD / Eerste Divisie',
    url: '',
  },
  {
    competition: 'NLD / Eredivisie',
    url: 'https://www.betano.de/sport/fussball/niederlande/eredivisie/17067r/',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://www.betano.de/sport/fussball/norwegen/eliteserien/17074r/',
  },
  {
    competition: 'NOR / First Division',
    url: 'https://www.betano.de/sport/fussball/norwegen/1-divisjon/17075r/',
  },
  {
    competition: 'NOR / Second Division',
    url: 'https://www.betano.de/sport/fussball/norwegen/2-divisjon/187660r/',
  },
  {
    competition: 'NZL / Chatham Cup',
    url: '',
  },
  {
    competition: 'PER / Liga 1',
    url: 'https://www.betano.de/sport/fussball/peru/liga-1/17079r/',
  },
  {
    competition: 'PER / Liga 2',
    url: 'https://www.betano.de/sport/fussball/peru/liga-2/18277r/',
  },
  {
    competition: 'POL / Ekstraklasa',
    url: 'https://www.betano.de/sport/fussball/polen/ekstraklasa/17080r/',
  },
  {
    competition: 'POL / I liga',
    url: 'https://www.betano.de/sport/fussball/polen/i-liga/17396r/',
  },
  {
    competition: 'POL / II liga',
    url: 'https://www.betano.de/sport/fussball/polen/ii-liga/18006r/',
  },
  {
    competition: 'POR / Liga Portugal',
    url: 'https://www.betano.de/sport/fussball/portugal/primeira-liga/17083r/',
  },
  {
    competition: 'POR / League Cup',
    url: 'https://www.betano.de/sport/fussball/portugal/taca-da-liga/17082r/',
  },
  {
    competition: 'POR / Super Cup',
    url: 'https://www.betano.de/sport/fussball/portugal/supertaca/17085r/',
  },
  {
    competition: 'PRY / Primera División',
    url: 'https://www.betano.de/sport/fussball/paraguay/primera-division/17078r/',
  },
  {
    competition: 'PRY / División Intermedia',
    url: 'https://www.betano.de/sport/fussball/paraguay/division-intermedia/181562r/',
  },
  {
    competition: 'ROU / Liga I',
    url: 'https://www.betano.de/sport/fussball/rumanien/liga-1/17088r/',
  },
  {
    competition: 'ROU / Liga II',
    url: 'https://www.betano.de/sport/fussball/rumanien/liga-2/17524r/',
  },
  {
    competition: 'SCO / Championship',
    url: '',
  },
  {
    competition: 'SCO / League Cup',
    url: 'https://www.betano.de/sport/fussball/schottland/league-cup/10345r/',
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
    url: 'https://www.betano.de/sport/fussball/schottland/premiership/1647r/',
  },
  {
    competition: 'SEN / Premier League',
    url: '',
  },
  {
    competition: 'SGP / Premier League',
    url: 'https://www.betano.de/sport/fussball/singapur/premier-league/17239r/',
  },
  {
    competition: 'SVK / I. Liga',
    url: 'https://www.betano.de/sport/fussball/slowakei/superliga/17315r/',
  },
  {
    competition: 'SVK / II. Liga',
    url: 'https://www.betano.de/sport/fussball/slowakei/superliga/17315r/',
  },
  {
    competition: 'SVN / PrvaLiga',
    url: 'https://www.betano.de/sport/fussball/slowenien/prvaliga/17695r/',
  },
  {
    competition: 'SVN / Second League',
    url: 'https://www.betano.de/sport/fussball/slowenien/2-snl/184509r/',
  },
  {
    competition: 'SWE / Allsvenskan',
    url: 'https://www.betano.de/sport/fussball/schweden/allsvenskan/17118r/',
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
    url: 'https://www.betano.de/sport/fussball/schweden/superettan/17121r/',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://www.betano.de/sport/fussball/schweden/ettan/18229r/',
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
    url: 'https://www.betano.de/sport/fussball/turkei/super-lig/17093r/',
  },
  {
    competition: 'URY / Primera División',
    url: 'https://www.betano.de/sport/fussball/uruguay/primera-division/17105r/',
  },
  {
    competition: 'URY / Segunda División',
    url: 'https://www.betano.de/sport/fussball/uruguay/segunda-division/17127r/',
  },
  {
    competition: 'USA / Major League Soccer',
    url: '',
  },
  {
    competition: 'USA / USL Championship',
    url: 'https://www.betano.de/sport/fussball/usa/usl-championship/18090r/',
  },
  {
    competition: 'USA / USL League Two',
    url: '',
  },
  {
    competition: 'VNM / V.League 1',
    url: 'https://www.betano.de/sport/fussball/vietnam/v-league-1/18150r/',
  },
];

export default competitionUrlList;
