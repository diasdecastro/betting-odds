const competitionUrlList = [
  //europe
  {
    competition: 'BGR / First League',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/11993/fo/c66',
  },
  {
    competition: 'DNK / Superligaen',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/14708/fo/c66',
  },
  {
    competition: 'ENG / Premier League',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/47/fo/c',
  },
  {
    competition: 'ENG / EFL League One',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/2533/fo/c57',
  },
  {
    competition: 'ENG / EFL League Two',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/1932/fo/c57',
  },
  {
    competition: 'ENG / EFL Championship',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/2532/fo/c57',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9736/fo/c66',
  },
  {
    competition: 'ESP / La Liga 2',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9740/fo/c66',
  },
  {
    competition: 'FIN / Veikkausliiga',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/14599/fo/c66',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15836/fo/c66',
  },
  {
    competition: 'FIN / Kolmonen',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15902/fo/c66',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9746/fo/c66',
  },
  {
    competition: 'GER / 2. Bundesliga',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9747/fo/c66',
  },
  {
    competition: 'ISL / Besta deild karla', // First Division?
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15814/fo/c66',
  },
  {
    competition: 'ITA / Serie A',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9737/fo/c66',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9739/fo/c66',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15714/fo/c66',
  },
  {
    competition: 'NOR / Second Division',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15952/fo/c66',
  },
  {
    competition: 'ROU / Liga I',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9734/fo/c66',
  },
  {
    competition: 'SCO / Premiership',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/7344/fo/c57',
  },
  {
    competition: 'SCO / League Cup',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/5760/fo/c57',
  },
  {
    competition: 'SWE / Allsvenskan', // First Division (Men)?
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15941/fo/c66',
  },
  {
    competition: 'SWE / Damallsvenskan', // First Division (Women)?
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/16085/fo/c66',
  },
  {
    competition: 'SWE / Ettan',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15746/fo/c66',
  },
  {
    competition: 'TUR / Süper Lig',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9953/fo/c66',
  },
  {
    competition: 'TUR / 2. Lig',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/16039/fo/c66',
  },
  {
    competition: 'INT / Champions League',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/79/fo/c66',
  },

  //asia
  {
    competition: 'CHN / Super League',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/14705/fo/c66',
  },
  {
    competition: 'JPN / J1 League',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/14737/fo/c66',
  },
  {
    competition: 'JPN / J2 League',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15795/fo/c66',
  },
  {
    competition: 'KOR / K-League 1',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15762/fo/c66',
  },
  {
    competition: 'MMR / National League',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/23170/fo/c66',
  },

  //america
  {
    competition: 'ARG / Primera División',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9751/fo/c66',
  },
  {
    competition: 'ARG / Primera Nacional',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15794/fo/c66',
  },
  {
    competition: 'BOL / Primera División',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/17570/fo/c66',
  },
  {
    competition: 'BRA / Série A',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/9750/fo/c66',
  },
  {
    competition: 'BRA / Série B',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15793/fo/c66',
  },
  {
    competition: 'BRA / Série C',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15824/fo/c66',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/14580/fo/c66',
  },
  {
    competition: 'CHL / Primera B',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15852/fo/c66',
  },
  {
    competition: 'COL / Categoría Primera A',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15822/fo/c66',
  },
  {
    competition: 'PER / Liga 1',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15819/fo/c66',
  },
  {
    competition: 'PER / Liga 2',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15820/fo/c66',
  },
  {
    competition: 'PRY / Primera División',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15955/fo/c66',
  },
  {
    competition: 'URY / Primera División',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/15801/fo/c66',
  },
  {
    competition: 'USA / Major Soccer League',
    url: 'https://www.spreadex.com/sports/en-GB/spread-betting/football/league/5660/fo/c66',
  },

  //africa

  //oceania
];

export default competitionUrlList;
