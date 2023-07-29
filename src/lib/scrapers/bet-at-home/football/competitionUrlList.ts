//TODO: Alle Wettbewerbe integrieren
const competitionUrlList = [
  {
    competition: 'ARG / Primera B',
    url: 'https://www.bet-at-home.de/en/sport/football/argentina/primera-b/2278563',
  },
  {
    competition: 'ARG / Primera División',
    url: 'https://www.bet-at-home.de/en/sport/football/argentina/primera-division/2278561',
  },
  {
    competition: 'ARG / Primera Nacional',
    url: '',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.bet-at-home.de/en/sport/football/australia/npl-queensland/2309323',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.bet-at-home.de/en/sport/football/australia/npl-tasmania/2278981',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.bet-at-home.de/en/sport/football/australia/npl-queensland-women/2278986',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.bet-at-home.de/en/sport/football/australia/npl-new-south-wales/2278977',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.bet-at-home.de/en/sport/football/australia/npl-south-australia/2278980',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.bet-at-home.de/en/sport/football/australia/npl-northern-nsw/2278975',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://www.bet-at-home.de/en/sport/football/australia/npl-western-australia/2278976',
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
    url: 'https://www.bet-at-home.de/en/sport/football/austria/bundesliga/2277841',
  },
  {
    competition: 'AUT / 2. Liga',
    url: 'https://www.bet-at-home.de/en/sport/football/austria/2-liga/2277857',
  },
  {
    competition: 'BEL / Pro League',
    url: 'https://www.bet-at-home.de/en/sport/football/belgium/pro-league/2277899',
  },
  {
    competition: 'BGR / First League',
    url: 'https://www.bet-at-home.de/en/sport/football/bulgaria/parva-liga/2278339',
  },
  {
    competition: 'BOL / Primera División',
    url: 'https://www.bet-at-home.de/en/sport/football/bolivia/liga-profesional-boliviano/2278704',
  },
  {
    competition: 'BRA / Copa do Brasil',
    url: 'https://www.bet-at-home.de/en/sport/football/brazil/copa-do-brasil/2278606',
  },
  {
    competition: 'BRA / Série A',
    url: 'https://www.bet-at-home.de/en/sport/football/brazil/brasileiro-serie-a/2278601',
  },
  {
    competition: 'BRA / Série B',
    url: 'https://www.bet-at-home.de/en/sport/football/brazil/brasileiro-serie-b/2278603',
  },
  {
    competition: 'BRA / Série C',
    url: 'https://www.bet-at-home.de/en/sport/football/brazil/brasileiro-serie-c/2278604',
  },
  {
    competition: 'CAN / Premier League',
    url: 'https://www.bet-at-home.de/en/sport/football/canada/canadian-premier-league/2278801',
  },
  {
    competition: 'CHE / Challenge League',
    url: 'https://www.bet-at-home.de/en/sport/football/switzerland/challenge-league/2278021',
  },
  {
    competition: 'CHE / Super League',
    url: 'https://www.bet-at-home.de/en/sport/football/switzerland/super-league/2278017',
  },
  {
    competition: 'CHL / Copa Chile',
    url: 'https://www.bet-at-home.de/en/sport/football/chile/copa-chile/2278730',
  },
  {
    competition: 'CHL / Primera B',
    url: 'https://www.bet-at-home.de/en/sport/football/chile/primera-b/2278727',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://www.bet-at-home.de/en/sport/football/chile/chile-primera-division/2278726',
  },
  {
    competition: 'CHL / Segunda División',
    url: '',
  },
  {
    competition: 'CHN / Super League',
    url: 'https://www.bet-at-home.de/en/sport/football/china/chinese-super-league/2278907',
  },
  {
    competition: 'COL / Categoría Primera A',
    url: 'https://www.bet-at-home.de/en/sport/football/colombia/primera-a-clausura/2278750',
  },
  {
    competition: 'COL / Categoría Primera B',
    url: 'https://www.bet-at-home.de/en/sport/football/colombia/primera-b/2278753',
  },
  {
    competition: 'COL / Copa Colombia',
    url: 'https://www.bet-at-home.de/en/sport/football/colombia/copa-colombia/2278758',
  },
  {
    competition: 'CZE / FORTUNA:LIGA',
    url: 'https://www.bet-at-home.de/en/sport/football/czech-republic/1st-liga/2278355',
  },
  {
    competition: 'CZE / National Football League',
    url: 'https://www.bet-at-home.de/en/sport/football/czech-republic/fnl/2278362',
  },
  {
    competition: 'DNK / 1. division',
    url: 'https://www.bet-at-home.de/en/sport/football/denmark/1st-division/2278106',
  },
  {
    competition: 'DNK / Superligaen',
    url: 'https://www.bet-at-home.de/en/sport/football/denmark/superligaen/2278084',
  },
  {
    competition: 'ECU / Serie A',
    url: 'https://www.bet-at-home.de/en/sport/football/ecuador/serie-a/2278706',
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
    url: 'https://www.bet-at-home.de/en/sport/football/england/championship/2277594',
  },
  {
    competition: 'ENG / EFL Cup',
    url: '',
  },
  {
    competition: 'ENG / EFL League One',
    url: 'https://www.bet-at-home.de/en/sport/football/england/league-one/2277598',
  },
  {
    competition: 'ENG / EFL League Two',
    url: '',
  },
  {
    competition: 'ENG / FA Community Shield',
    url: 'https://www.bet-at-home.de/en/sport/football/england/community-shield/2277619',
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
    url: 'https://www.bet-at-home.de/en/sport/football/england/premier-league/2277590',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://www.bet-at-home.de/en/sport/football/spain/primera-division/2277640',
  },
  {
    competition: 'ESP / La Liga 2',
    url: 'https://www.bet-at-home.de/en/sport/football/spain/segunda-division/2277644',
  },
  {
    competition: 'FIN / Kolmonen',
    url: '',
  },
  {
    competition: 'FIN / Veikkausliiga',
    url: 'https://www.bet-at-home.de/en/sport/football/finland/veikkausliiga/2278241',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://www.bet-at-home.de/en/sport/football/finland/ykkonen/2278244',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://www.bet-at-home.de/en/sport/football/france/ligue-1/2277664',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://www.bet-at-home.de/en/sport/football/france/ligue-2/2277672',
  },
  {
    competition: 'GER / 2. Bundesliga',
    url: 'https://www.bet-at-home.de/en/sport/football/germany/2nd-bundesliga/2277375',
  },
  {
    competition: 'GER / 3. Liga',
    url: 'https://www.bet-at-home.de/en/sport/football/germany/3rd-liga/2277504',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://www.bet-at-home.de/en/sport/football/germany/bundesliga/2277364',
  },
  {
    competition: 'GER / DFB Pokal',
    url: 'https://www.bet-at-home.de/en/sport/football/germany/dfb-cup/2277511',
  },
  {
    competition: 'GER / Supercup',
    url: '',
  },
  {
    competition: 'GRC / Super League 1',
    url: 'https://www.bet-at-home.de/en/sport/football/greece/super-league/2278027',
  },
  {
    competition: 'HRV / HNL',
    url: 'https://www.bet-at-home.de/en/sport/football/croatia/1-hnl/2278317',
  },
  {
    competition: 'HUN / NB I',
    url: 'https://www.bet-at-home.de/en/sport/football/hungary/nb-i/2278401',
  },
  {
    competition: 'HUN / NB II',
    url: 'https://www.bet-at-home.de/en/sport/football/hungary/nb-ii/2278406',
  },
  {
    competition: 'INT / Champions League',
    url: '',
  },
  {
    competition: 'IRL / First Division',
    url: 'https://www.bet-at-home.de/en/sport/football/ireland/first-division/2278508',
  },
  {
    competition: 'IRL / Premier Division',
    url: 'https://www.bet-at-home.de/en/sport/football/ireland/premier-division/2278505',
  },
  {
    competition: 'ISL / 1. deild karla',
    url: 'https://www.bet-at-home.de/en/sport/football/iceland/1-deild/2278503',
  },
  {
    competition: 'ISL / 2. deild karla',
    url: '',
  },
  {
    competition: 'ISL / Besta deild karla',
    url: 'https://www.bet-at-home.de/en/sport/football/iceland/urvalsdeild/2278489',
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
    url: 'https://www.bet-at-home.de/en/sport/football/italy/serie-a/2277626',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://www.bet-at-home.de/en/sport/football/italy/serie-b/2277630',
  },
  {
    competition: 'ITA / Super Cup',
    url: '',
  },
  {
    competition: 'JPN / Emperors Cup',
    url: 'https://www.bet-at-home.de/en/sport/football/japan/emperor-cup/2278899',
  },
  {
    competition: 'JPN / J. League Cup',
    url: '',
  },
  {
    competition: 'JPN / J1 League',
    url: 'https://www.bet-at-home.de/en/sport/football/japan/j-league/2278893',
  },
  {
    competition: 'JPN / J2 League',
    url: 'https://www.bet-at-home.de/en/sport/football/japan/j-league-2/2278896',
  },
  {
    competition: 'JPN / J3 League',
    url: 'https://www.bet-at-home.de/en/sport/football/japan/j-league-3/2278898',
  },
  {
    competition: 'KAZ / Premier League',
    url: 'https://www.bet-at-home.de/en/sport/football/kazakhstan/premier-league/2279015',
  },
  {
    competition: 'KAZ / First Division',
    url: 'https://www.bet-at-home.de/en/sport/football/kazakhstan/1st-division/2279018',
  },
  {
    competition: 'KOR / K-League 1',
    url: 'https://www.bet-at-home.de/en/sport/football/south-korea/k-league-classic/2278838',
  },
  {
    competition: 'KOR / K-League 2',
    url: 'https://www.bet-at-home.de/en/sport/football/south-korea/k-league-challenge/2278839',
  },
  {
    competition: 'KOR / K3 League',
    url: '',
  },
  {
    competition: 'LTU / A Lyga',
    url: 'https://www.bet-at-home.de/en/sport/football/lithuania/a-liga/2278447',
  },
  {
    competition: 'LTU / I Lyga',
    url: 'https://www.bet-at-home.de/en/sport/football/lithuania/1-lyga/2278448',
  },
  {
    competition: 'MMR / National League',
    url: 'https://www.bet-at-home.de/en/sport/football/myanmar/national-league/2279120',
  },
  {
    competition: 'NLD / Eerste Divisie',
    url: '',
  },
  {
    competition: 'NLD / Eredivisie',
    url: 'https://www.bet-at-home.de/en/sport/football/netherlands/eredivisie/2277880',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://www.bet-at-home.de/en/sport/football/norway/eliteserien/2278225',
  },
  {
    competition: 'NOR / First Division',
    url: 'https://www.bet-at-home.de/en/sport/football/norway/1st-division/2278228',
  },
  {
    competition: 'NOR / Second Division',
    url: 'https://www.bet-at-home.de/en/sport/football/norway/2-divisjon/3431607',
  },
  {
    competition: 'NZL / Chatham Cup',
    url: '',
  },
  {
    competition: 'PER / Liga 1',
    url: 'https://www.bet-at-home.de/en/sport/football/peru/primera-division-clausura/2278738',
  },
  {
    competition: 'PER / Liga 2',
    url: 'https://www.bet-at-home.de/en/sport/football/peru/segunda-division/2278740',
  },
  {
    competition: 'POL / Ekstraklasa',
    url: 'https://www.bet-at-home.de/en/sport/football/poland/ekstraklasa/2277865',
  },
  {
    competition: 'POL / I liga',
    url: 'https://www.bet-at-home.de/en/sport/football/poland/i-liga/2277870',
  },
  {
    competition: 'POL / II liga',
    url: 'https://www.bet-at-home.de/en/sport/football/poland/ii-liga/2277871',
  },
  {
    competition: 'POR / Liga Portugal',
    url: '',
  },
  {
    competition: 'POR / League Cup',
    url: 'https://www.bet-at-home.de/en/sport/football/portugal/league-cup/2277814',
  },
  {
    competition: 'POR / Super Cup',
    url: 'https://www.bet-at-home.de/en/sport/football/portugal/super-cup/2277835',
  },
  {
    competition: 'PRY / Primera División',
    url: 'https://www.bet-at-home.de/en/sport/football/paraguay/primera-division-clausura/2278747',
  },
  {
    competition: 'PRY / División Intermedia',
    url: 'https://www.bet-at-home.de/en/sport/football/paraguay/segunda-division/2278748',
  },
  {
    competition: 'ROU / Liga I',
    url: 'https://www.bet-at-home.de/en/sport/football/romania/liga-i/2278308',
  },
  {
    competition: 'ROU / Liga II',
    url: 'https://www.bet-at-home.de/en/sport/football/romania/liga-2/2278311',
  },
  {
    competition: 'SCO / Championship',
    url: '',
  },
  {
    competition: 'SCO / League Cup',
    url: 'https://www.bet-at-home.de/en/sport/football/scotland/league-cup/2277994',
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
    url: 'https://www.bet-at-home.de/en/sport/football/scotland/premiership/2277962',
  },
  {
    competition: 'SEN / Premier League',
    url: '',
  },
  {
    competition: 'SGP / Premier League',
    url: 'https://www.bet-at-home.de/en/sport/football/singapore/s-league/2278854',
  },
  {
    competition: 'SVK / I. Liga',
    url: 'https://www.bet-at-home.de/en/sport/football/slovakia/superliga/2278345',
  },
  {
    competition: 'SVK / II. Liga',
    url: 'https://www.bet-at-home.de/en/sport/football/slovakia/2nd-liga/2278347',
  },
  {
    competition: 'SVN / PrvaLiga',
    url: 'https://www.bet-at-home.de/en/sport/football/slovenia/prvaliga/2278367',
  },
  {
    competition: 'SVN / Second League',
    url: 'https://www.bet-at-home.de/en/sport/football/slovenia/2nd-snl/2278371',
  },
  {
    competition: 'SWE / Allsvenskan',
    url: 'https://www.bet-at-home.de/en/sport/football/sweden/allsvenskan/2278251',
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
    url: 'https://www.bet-at-home.de/en/sport/football/sweden/superettan/2278254',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://www.bet-at-home.de/en/sport/football/sweden/division-1-norra/2278266',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://www.bet-at-home.de/en/sport/football/sweden/division-1-sodra/2278267',
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
    url: 'https://www.bet-at-home.de/en/sport/football/turkey/super-lig/2278055',
  },
  {
    competition: 'URY / Primera División',
    url: 'https://www.bet-at-home.de/en/sport/football/uruguay/primera-division-apertura/2711635',
  },
  {
    competition: 'URY / Segunda División',
    url: 'https://www.bet-at-home.de/en/sport/football/uruguay/segunda-division/2278770',
  },
  {
    competition: 'USA / Major League Soccer',
    url: '',
  },
  {
    competition: 'USA / USL Championship',
    url: 'https://www.bet-at-home.de/en/sport/football/usa/usl-championship/2278784',
  },
  {
    competition: 'USA / USL League Two',
    url: '',
  },
  {
    competition: 'VNM / V.League 1',
    url: 'https://www.bet-at-home.de/en/sport/football/vietnam/v-league/2278815',
  },
];

export default competitionUrlList;
