//TODO: Alle Wettbewerbe integrieren
const competitionUrlList = [
  {
    competition: 'ARG / Primera B',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/primera-b-metropolitana-102117',
  },
  {
    competition: 'ARG / Primera División',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/liga-profesional-de-futbol-102540',
  },
  {
    competition: 'ARG / Primera Nacional',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/primera-nacional-102234',
  },
  {
    competition: 'AUS / A-League',
    url: '',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/australien-60/nsw-npl-101878',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/australien-60/queensland-npl-101879',
  },
  {
    competition: 'AUS / NPL',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/australien-60/victoria-npl-1-101871',
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
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/%C3%B6sterreich-8/bundesliga-102835',
  },
  {
    competition: 'AUT / 2. Liga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/%C3%B6sterreich-8/2-liga-102121',
  },
  {
    competition: 'BEL / Pro League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/belgien-35/jupiler-pro-league-0:12',
  },
  {
    competition: 'BGR / First League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/bulgarien-63/parva-liga-2062',
  },
  {
    competition: 'BGR / Second League',
    url: '',
  },
  {
    competition: 'BOL / Primera División',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/bolivien-44/division-profesional-102510',
  },
  {
    competition: 'BRA / Copa do Brasil',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/copa-do-brasil-102723',
  },
  {
    competition: 'BRA / Série A',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/brasileiro-serie-a-102838',
  },
  {
    competition: 'BRA / Série B',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/brasileiro-serie-b-102361',
  },
  {
    competition: 'BRA / Série C',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/brasileiro-serie-c-102155',
  },
  {
    competition: 'CAN / Premier League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/kanada-94/premier-league-100012',
  },
  {
    competition: 'CHE / Challenge League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/schweiz-30/challenge-league-102221',
  },
  {
    competition: 'CHE / Super League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/schweiz-30/super-league-102378',
  },
  {
    competition: 'CHL / Copa Chile',
    url: '',
  },
  {
    competition: 'CHL / Primera B',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/chile-56/primera-b-102157',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/chile-56/primera-division-102158',
  },
  {
    competition: 'CHL / Segunda División',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/chile-56/segunda-division-101714',
  },
  {
    competition: 'CHN / Super League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/china-57/super-league-102717',
  },
  {
    competition: 'CHN / China League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/china-57/league-1-102159',
  },
  {
    competition: 'CHN / Division Two League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/china-57/china-league-2-102160',
  },
  {
    competition: 'COL / Categoría Primera A',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/kolumbien-45/primera-a-clausura-102162',
  },
  {
    competition: 'COL / Categoría Primera B',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/kolumbien-45/primera-b-102163',
  },
  {
    competition: 'COL / Copa Colombia',
    url: '',
  },
  {
    competition: 'CZE / FORTUNA:LIGA',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/tschechien-12/1-liga-101587',
  },
  {
    competition: 'CZE / National Football League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/tschechien-12/fnl-101586',
  },
  {
    competition: 'DNK / 1. division',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/d%C3%A4nemark-13/1-division-102166',
  },
  {
    competition: 'DNK / Superligaen',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/d%C3%A4nemark-13/superligaen-102837',
  },
  {
    competition: 'DNK / DBU Cup',
    url: '',
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
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/england-14/championship-102839',
  },
  {
    competition: 'ENG / EFL Cup',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/england-14/efl-cup-102782',
  },
  {
    competition: 'ENG / EFL League One',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-one-101551',
  },
  {
    competition: 'ENG / EFL League Two',
    url: '',
  },
  {
    competition: 'ENG / FA Community Shield',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/england-14/community-shield-102783',
  },
  {
    competition: 'ENG / FA Cup',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/england-14/fa-cup-102802',
  },
  {
    competition: 'ENG / League Cup',
    url: '',
  },
  {
    competition: 'ENG / Premier League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/england-14/premier-league-102841',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-102829',
  },
  {
    competition: 'ESP / La Liga 2',
    url: '',
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
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/finnland-15/veikkausliiga-101886',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/finnland-15/ykkonen-102176',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-1-102843',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-2-102376',
  },
  {
    competition: 'FRA / Coupe de France',
    url: '',
  },
  {
    competition: 'GER / 2. Bundesliga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/2-bundesliga-102845',
  },
  {
    competition: 'GER / 3. Liga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/3-liga-102377',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/bundesliga-102842',
  },
  {
    competition: 'GER / DFB Pokal',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/dfb-pokal-102809',
  },
  {
    competition: 'GER / Supercup',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/supercup-102775',
  },
  {
    competition: 'GRC / Super League 1',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/griechenland-18/super-league-102844',
  },
  {
    competition: 'HRV / HNL',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/kroatien-50/hnl-102164',
  },
  {
    competition: 'HUN / NB I',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/ungarn-19/nb-i-101529',
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
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/irland-23/premier-division-102208',
  },
  {
    competition: 'IRL / Premier Division',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/irland-23/1-division-102207',
  },
  {
    competition: 'ISL / 1. deild karla',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/island-49/1-deild-102194',
  },
  {
    competition: 'ISL / 2. deild karla',
    url: '',
  },
  {
    competition: 'ISL / Besta deild karla',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/island-49/urvalsdeild-102195',
  },
  {
    competition: 'ISL / Womens Super Cup',
    url: '',
  },
  {
    competition: 'ITA / Coppa Italia',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/coppa-italia-102811',
  },
  {
    competition: 'ITA / Serie A',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-a-102846',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-b-102848',
  },
  {
    competition: 'ITA / Super Cup',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/super-cup-102774',
  },
  {
    competition: 'JPN / Emperors Cup',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/emperor-cup-102812',
  },
  {
    competition: 'JPN / J. League Cup',
    url: '',
  },
  {
    competition: 'JPN / J1 League',
    url: '',
  },
  {
    competition: 'JPN / J2 League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/j2-league-101400',
  },
  {
    competition: 'JPN / J3 League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/j3-league-102237',
  },
  {
    competition: 'KAZ / Premier League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/kasachstan-140/premier-league-102238',
  },
  {
    competition: 'KAZ / First Division',
    url: '',
  },
  {
    competition: 'KOR / K-League 1',
    url: '',
  },
  {
    competition: 'KOR / K-League 2',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/s%C3%BCdkorea-198/k-league-2-102239',
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
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/litauen-151/a-lyga-102330',
  },
  {
    competition: 'LTU / I Lyga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/litauen-151/1-lyga-101872',
  },
  {
    competition: 'MMR / National League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/myanmar-168/national-league-102346',
  },
  {
    competition: 'NLD / Eerste Divisie',
    url: '',
  },
  {
    competition: 'NLD / Eredivisie',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/niederlande-36/eredivisie-102847',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/norwegen-21/eliteserien-102275',
  },
  {
    competition: 'NOR / First Division',
    url: '',
  },
  {
    competition: 'NOR / Second Division',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/norwegen-21/2-division-gruppe-2-102265',
  },
  {
    competition: 'NZL / Chatham Cup',
    url: '',
  },
  {
    competition: 'PER / Liga 1',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/peru-59/primera-division-102732',
  },
  {
    competition: 'PER / Liga 2',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/peru-59/segunda-division-102363',
  },
  {
    competition: 'POL / Ekstraklasa',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/polen-22/ekstraklasa-2063',
  },
  {
    competition: 'POL / I liga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/polen-22/i-liga-101534',
  },
  {
    competition: 'POL / II liga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/polen-22/ii-liga-101542',
  },
  {
    competition: 'POR / Liga Portugal',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/portugal-37/primeira-liga-102851',
  },
  {
    competition: 'POR / League Cup',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/portugal-37/ligapokal-102819',
  },
  {
    competition: 'POR / Super Cup',
    url: '',
  },
  {
    competition: 'PRY / Primera División',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/paraguay-48/primera-division-clausura-102268',
  },
  {
    competition: 'PRY / División Intermedia',
    url: '',
  },
  {
    competition: 'ROU / Liga I',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/rum%C3%A4nien-24/liga-i-2064',
  },
  {
    competition: 'ROU / Liga II',
    url: '',
  },
  {
    competition: 'SCO / Championship',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/schottland-26/championship-101557',
  },
  {
    competition: 'SCO / League Cup',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/schottland-26/ligapokal-102825',
  },
  {
    competition: 'SCO / Scottish Cup',
    url: '',
  },
  {
    competition: 'SCO / League One',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/schottland-26/league-one-2018',
  },
  {
    competition: 'SCO / League Two',
    url: '',
  },
  {
    competition: 'SCO / Premiership',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/schottland-26/premiership-102853',
  },
  {
    competition: 'SEN / Premier League',
    url: '',
  },
  {
    competition: 'SGP / Premier League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/singapur-54/premier-league-102215',
  },
  {
    competition: 'SVK / I. Liga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/slowakei-51/superliga-101585',
  },
  {
    competition: 'SVK / II. Liga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/slowakei-51/2-liga-101561',
  },
  {
    competition: 'SVN / PrvaLiga',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/slowenien-27/1-snl-102216',
  },
  {
    competition: 'SVN / Second League',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/slowenien-27/2-snl-101558',
  },
  {
    competition: 'SWE / Allsvenskan',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/allsvenskan-102831',
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
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/superettan-102222',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/1-division-s%C3%B6dra-102220',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/1-division-norra-102217',
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
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/s%C3%BCper-lig-102832',
  },
  {
    competition: 'URY / Primera División',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/uruguay-47/primera-division-102231',
  },
  {
    competition: 'URY / Segunda División',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/uruguay-47/segunda-division-102232',
  },
  {
    competition: 'USA / Major League Soccer',
    url: '',
  },
  {
    competition: 'USA / USL Championship',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/usa-39/usl-championship-102259',
  },
  {
    competition: 'USA / USL League One',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/usa-39/usl-league-one-102258',
  },
  {
    competition: 'USA / USL League Two',
    url: '',
  },
  {
    competition: 'VNM / V.League 1',
    url: 'https://sports.oddset.de/de/sports/fu%C3%9Fball-4/wetten/vietnam-224/v-league-102271',
  },
];

export default competitionUrlList;
