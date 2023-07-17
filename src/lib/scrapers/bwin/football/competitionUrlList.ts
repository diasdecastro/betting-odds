const competitionUrlList = [
  //europe
  {
    competition: 'AUT / Bundesliga',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/%C3%B6sterreich-8/bundesliga-102835',
  },
  {
    competition: 'AUT / Austrian Cup',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/%C3%B6sterreich-8/%C3%B6fb-cup-102721',
  },
  {
    competition: 'BEL / Pro League',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/belgien-35/jupiler-pro-league-0:12',
  },
  {
    competition: 'BGR / First League',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/bulgarien-63/parva-liga-2062',
  },
  {
    competition: 'CHE / Super League',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schweiz-30/super-league-102378',
  },
  {
    competition: 'CZE / FORTUNA:LIGA', //1. Liga
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/tschechien-12/1-liga-101587',
  },
  {
    competition: 'DNK / Superligaen',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/d%C3%A4nemark-13/superligaen-102837',
  },
  {
    competition: 'DNK / 1. division',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/d%C3%A4nemark-13/1-division-102166',
  },
  {
    competition: 'ENG / Premier League',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/premier-league-102841',
  },
  {
    competition: 'ENG / EFL League One',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-one-101551',
  },
  {
    competition: 'ENG / EFL League Two',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/league-two-101550',
  },
  {
    competition: 'ENG / EFL Cup',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/championship-102839',
  },
  {
    competition: 'ENG / EFL Championship',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/championship-102839',
  },
  {
    competition: 'ENG / FA Cup',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/fa-cup-102802',
  },
  {
    competition: 'ENG / FA Community Shield',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/england-14/community-shield-102783',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-102829',
  },
  {
    competition: 'ESP / La Liga 2',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/spanien-28/laliga-2-102830',
  },
  {
    competition: 'FIN / Veikkausliiga',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/finnland-15/veikkausliiga-101886',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/finnland-15/ykkonen-102176',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-1-102843',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/frankreich-16/ligue-2-102376',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/bundesliga-102842',
  },
  {
    competition: 'GER / 2. Bundesliga',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/2-bundesliga-102845',
  },
  {
    competition: 'GER / 3. Liga',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/3-liga-102377',
  },
  {
    competition: 'GER / DFB Pokal',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/dfb-pokal-102809',
  },
  {
    competition: 'GER / Supercup',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/deutschland-17/supercup-102775',
  },
  {
    competition: 'GRC / Super League 1',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/griechenland-18/super-league-102844',
  },
  {
    competition: 'HRV / HNL', //Fucking Kroatien. Liga heißt Hrvatska nogometna liga
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/kroatien-50/hnl-102164',
  },
  {
    competition: 'IRL / Premier Division',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/irland-23/premier-division-102208',
  },
  {
    competition: 'ISL / Besta deild karla',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/island-49/urvalsdeild-102195',
  },
  {
    competition: 'ISL / 1. deild karla',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/island-49/1-deild-102194',
  },
  {
    competition: 'ITA / Serie A',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-a-102846',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/serie-b-102848',
  },
  {
    competition: 'ITA / Coppa Italia',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/coppa-italia-102811',
  },
  {
    competition: 'ITA / Super Cup',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/italien-20/super-cup-102774',
  },
  {
    competition: 'NLD / Eredivisie',
    url: 'https://www.888sport.de/football/dutch-eredivisie-betting/',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/niederlande-36/eredivisie-102847',
  },
  {
    competition: 'NOR / Second Division', //Gruppe 1
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/norwegen-21/2-division-gruppe-1-102262',
  },
  {
    competition: 'NOR / Second Division', //Gruppe 2
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/norwegen-21/2-division-gruppe-2-102265',
  },
  {
    competition: 'POL / Ekstraklasa',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/polen-22/ekstraklasa-2063',
  },
  {
    competition: 'POR / Liga Portugal',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/portugal-37/primeira-liga-102851',
  },
  {
    competition: 'ROU / Liga I',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/rum%C3%A4nien-24/liga-i-2064',
  },
  {
    competition: 'SCO / Premiership',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schottland-26/premiership-102853',
  },
  {
    competition: 'SCO / League One',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schottland-26/league-one-2018',
  },
  {
    competition: 'SCO / Championship',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schottland-26/championship-101557',
  },
  {
    competition: 'SCO / League Cup',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schottland-26/ligapokal-102825',
  },
  {
    competition: 'SWE / Allsvenskan',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/allsvenskan-102831',
  },
  {
    competition: 'SWE / Ettan', //Norra
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/1-division-norra-102217',
  },
  {
    competition: 'SWE / Damallsvenskan',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/schweden-29/damallsvenskan-102219',
  },
  {
    competition: 'TUR / Süper Lig',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/s%C3%BCper-lig-102832',
  },
  {
    competition: 'TUR / 1. Lig',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/1-lig-102226',
  },
  {
    competition: 'TUR / 2. Lig',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/t%C3%BCrkei-31/2-lig-102893',
  },

  //asia
  {
    competition: 'CHN / CFA Super League',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/china-57/super-league-102717',
  },
  {
    competition: 'JPN / J. League Cup',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/j-league-cup-102671',
  },
  {
    competition: 'JPN / J2 League',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/j2-league-101400',
  },
  {
    competition: 'JPN / Emperors Cup',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/japan-52/emperor-cup-102812',
  },
  {
    competition: 'KOR / K League 2',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/s%C3%BCdkorea-198/k-league-2-102239',
  },
  {
    competition: 'MMR / National League',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/myanmar-168/national-league-102346',
  },
  {
    competition: 'VNM / V.League 1',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/vietnam-224/v-league-102271',
  },

  //america
  {
    competition: 'ARG / Primera División',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/liga-profesional-de-futbol-102540',
  },
  {
    competition: 'ARG / Primera Nacional',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/primera-nacional-102234',
  },
  {
    competition: 'ARG / Primera B',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/argentinien-38/primera-b-metropolitana-102117',
  },
  {
    competition: 'BOL / Primera División',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/bolivien-44/division-profesional-102510',
  },
  {
    competition: 'BRA / Série A',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/brasileiro-serie-a-102838',
  },
  {
    competition: 'BRA / Série B',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/brasileiro-serie-b-102361',
  },
  {
    competition: 'BRA / Série C',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/bolivien-44/division-profesional-102510',
  },
  {
    competition: 'BRA / Copa do Brasil',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/brasilien-33/copa-do-brasil-102723',
  },
  {
    competition: 'CAN / Premier League',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/kanada-94/premier-league-100012',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/chile-56/primera-division-102158',
  },
  {
    competition: 'CHL / Primera B',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/chile-56/primera-b-102157',
  },
  {
    competition: 'CHL / Segunda División',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/chile-56/segunda-division-101714',
  },
  {
    competition: 'CHL / Copa Chile',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/chile-56/copa-chile-102627',
  },
  {
    competition: 'COL / Categoría Primera A',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/kolumbien-45/primera-a-apertura-102161',
  },
  {
    competition: 'COL / Categoría Primera B',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/kolumbien-45/primera-b-102163',
  },
  {
    competition: 'ECU / Serie A',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/ecuador-110/ligapro-primera-a-102171',
  },
  {
    competition: 'PER / Liga 1',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/peru-59/primera-division-102732',
  },
  {
    competition: 'PER / Liga 2',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/peru-59/segunda-division-102363',
  },
  {
    competition: 'PRY / Primera División',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/paraguay-48/primera-division-clausura-102268',
  },
  {
    competition: 'URY / Primera División',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/uruguay-47/primera-division-102231',
  },
  {
    competition: 'USA / Major League Soccer',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/nordamerika-9/major-league-soccer-102849',
  },
  //africa
  {
    competition: 'EGY / Premier League',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/%C3%A4gypten-111/premier-league-102172',
  },
  {
    competition: 'SEN / Premier League',
    url: 'https://sports.bwin.de/de/sports/fu%C3%9Fball-4/wetten/senegal-192/premier-league-102530',
  },
  //oceania
];

export default competitionUrlList;
