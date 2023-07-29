//TODO: Alphabetisch sortieren
const competitionUrlList = [
  //europe
  {
    competition: 'AUT / Bundesliga',
    url: 'https://sports.tipico.de/de/alle/1101/29301',
  },
  {
    competition: 'AUT / Austrian Cup',
    url: 'https://sports.tipico.de/de/alle/1101/69301',
  },
  {
    competition: 'BEL / Pro League',
    url: 'https://sports.tipico.de/de/alle/1101/38301',
  },
  {
    competition: 'BGR / First League',
    url: 'https://sports.tipico.de/de/alle/1101/232301',
  },
  {
    competition: 'CHE / Super League',
    url: 'https://sports.tipico.de/de/alle/1101/1060301',
  },
  {
    competition: 'CHE / Challenge League',
    url: 'https://sports.tipico.de/de/alle/1101/1061301',
  },
  {
    competition: 'CZE / FORTUNA:LIGA',
    url: 'https://sports.tipico.de/de/alle/1101/49301',
  },
  {
    competition: 'CZE / National Football League', //FNL
    url: 'https://sports.tipico.de/de/alle/1101/843301',
  },
  {
    competition: 'DNK / Superligaen',
    url: 'https://sports.tipico.de/de/alle/1101/12301',
  },
  {
    competition: 'DNK / 1. division',
    url: 'https://sports.tipico.de/de/alle/1101/13301',
  },
  {
    competition: 'ENG / Premier League',
    url: 'https://sports.tipico.de/de/alle/1101/1301',
  },
  {
    competition: 'ENG / EFL League One',
    url: 'https://sports.tipico.de/de/alle/1101/3301',
  },
  {
    competition: 'ENG / EFL Cup',
    url: 'https://sports.tipico.de/de/alle/1101/17301',
  },
  {
    competition: 'ENG / EFL Championship',
    url: 'https://sports.tipico.de/de/alle/1101/2301',
  },
  {
    competition: 'ENG / FA Community Shield',
    url: 'https://sports.tipico.de/de/alle/1101/1307301',
  },
  {
    competition: 'ESP / La Liga',
    url: 'https://sports.tipico.de/de/alle/1101/36301',
  },
  {
    competition: 'FIN / Veikkausliiga',
    url: 'https://sports.tipico.de/de/alle/1101/31301',
  },
  {
    competition: 'FIN / Ykkönen',
    url: 'https://sports.tipico.de/de/alle/1101/527301',
  },
  {
    competition: 'FRA / Ligue 1',
    url: 'https://sports.tipico.de/de/alle/1101/4301',
  },
  {
    competition: 'FRA / Ligue 2',
    url: 'https://sports.tipico.de/de/alle/1101/19301',
  },
  {
    competition: 'GER / Bundesliga',
    url: 'https://sports.tipico.de/de/alle/1101/42301',
  },
  {
    competition: 'GER / DFB Pokal',
    url: 'https://sports.tipico.de/de/alle/1101/43301',
  },
  {
    competition: 'GER / Supercup',
    url: 'https://sports.tipico.de/de/alle/1101/6456301',
  },
  {
    competition: 'GER / 2. Bundesliga',
    url: 'https://sports.tipico.de/de/alle/1101/41301',
  },
  {
    competition: 'GER / 3. Liga',
    url: 'https://sports.tipico.de/de/alle/1101/8343301',
  },
  {
    competition: 'HRV / HNL', //Fucking Kroatien. Liga heißt Hrvatska nogometna liga
    url: 'https://sports.tipico.de/de/alle/1101/48301',
  },
  {
    competition: 'INT / Champions League',
    url: 'https://sports.tipico.de/de/alle/1101/742110',
  },
  {
    competition: 'IRL / Premier Division',
    url: 'https://sports.tipico.de/de/alle/1101/79301',
  },
  {
    competition: 'IRL / First Division',
    url: 'https://sports.tipico.de/de/alle/1101/718301',
  },
  {
    competition: 'ITA / Serie A',
    url: 'https://sports.tipico.de/de/alle/1101/33301',
  },
  {
    competition: 'ITA / Serie B',
    url: 'https://sports.tipico.de/de/alle/1101/34301',
  },
  {
    competition: 'LTU / A Lyga',
    url: 'https://sports.tipico.de/de/alle/1101/1260301',
  },
  {
    competition: 'NLD / Eredivisie',
    url: 'https://sports.tipico.de/de/alle/1101/39301',
  },
  {
    competition: 'NOR / Eliteserien',
    url: 'https://sports.tipico.de/de/alle/1101/5301',
  },
  {
    competition: 'NOR / First Division',
    url: 'https://sports.tipico.de/de/alle/1101/6301',
  },
  {
    competition: 'POL / Ekstraklasa',
    url: 'https://sports.tipico.de/de/alle/1101/64301',
  },
  {
    competition: 'POL / I liga',
    url: 'https://sports.tipico.de/de/alle/1101/1427301',
  },
  {
    competition: 'SCO / Premiership',
    url: 'https://sports.tipico.de/de/alle/1101/54301',
  },
  {
    competition: 'SCO / League Cup',
    url: 'https://sports.tipico.de/de/alle/1101/22201/53264301,53263301,53262301,53261301,53260301,53259301,53258301,53257301',
  },
  {
    competition: 'SVK / I. Liga',
    url: 'https://sports.tipico.de/de/alle/1101/92301',
  },

  //asia
  {
    competition: 'CHN / Super League',
    url: 'https://sports.tipico.de/de/alle/1101/652301',
  },
  {
    competition: 'JPN / J1 League',
    url: 'https://sports.tipico.de/de/alle/1101/82301',
  },
  {
    competition: 'JPN / J2 League',
    url: 'https://sports.tipico.de/de/alle/1101/3034301',
  },
  {
    competition: 'JPN / J3 League',
    url: 'https://sports.tipico.de/de/alle/1101/10327301',
  },
  {
    competition: 'JPN / J. League Cup',
    url: 'https://sports.tipico.de/de/alle/1101/virtual_japanLeagueCupFootballAllGroupMatches',
  },
  {
    competition: 'JPN / Emperors Cup',
    url: 'https://sports.tipico.de/de/alle/1101/5126301',
  },
  {
    competition: 'KOR / K-League 1',
    url: 'https://sports.tipico.de/de/alle/1101/3284301',
  },
  {
    competition: 'KOR / K-League 2',
    url: 'https://sports.tipico.de/de/alle/1101/6230301',
  },
  {
    competition: 'KOR / K3 League',
    url: 'https://sports.tipico.de/de/alle/1101/93820301',
  },
  {
    competition: 'VNM / V.League 1',
    url: 'https://sports.tipico.de/de/alle/1101/96635301',
  },

  //america
  {
    competition: 'ARG / Primera División', // Gleich Liga Profesional de Futbol
    url: 'https://sports.tipico.de/de/alle/1101/68301',
  },
  {
    competition: 'ARG / Primera Nacional', // Gruppe A
    url: 'https://sports.tipico.de/de/alle/1101/37309301',
  },
  {
    competition: 'ARG / Primera Nacional', // Gruppe B
    url: 'https://sports.tipico.de/de/alle/1101/37310301',
  },
  {
    competition: 'ARG / Primera B',
    url: 'https://sports.tipico.de/de/alle/1101/85016301',
  },
  {
    competition: 'BOL / Primera División',
    url: 'https://sports.tipico.de/de/alle/1101/4330301',
  },
  {
    competition: 'BRA / Série A',
    url: 'https://sports.tipico.de/de/alle/1101/83301',
  },
  {
    competition: 'BRA / Série B',
    url: 'https://sports.tipico.de/de/alle/1101/1449301',
  },
  {
    competition: 'BRA / Série C',
    url: 'https://sports.tipico.de/de/alle/1101/27213301',
  },
  {
    competition: 'COL / Categoría Primera A', // Gruppe A
    url: 'https://sports.tipico.de/de/alle/1101/81703301',
  },
  {
    competition: 'COL / Categoría Primera A', // Gruppe B
    url: 'https://sports.tipico.de/de/alle/1101/81705301',
  },
  {
    competition: 'CHL / Primera División',
    url: 'https://sports.tipico.de/de/alle/1101/67280301',
  },
  {
    competition: 'CHL / Primera B',
    url: 'https://sports.tipico.de/de/alle/1101/61476301',
  },
  {
    competition: 'ECU / Serie A', // ?
    url: 'https://sports.tipico.de/de/alle/1101/16887301',
  },
  {
    competition: 'ECU / Serie B', // ?
    url: 'https://sports.tipico.de/de/alle/1101/77667301',
  },
  {
    competition: 'PER / Liga 1',
    url: 'https://sports.tipico.de/de/alle/1101/34468301',
  },
  {
    competition: 'PER / Liga 2',
    url: 'https://sports.tipico.de/de/alle/1101/13431301',
  },
  {
    competition: 'PRY / Primera División',
    url: 'https://sports.tipico.de/de/alle/1101/16752301',
  },
  {
    competition: 'URY / Primera División',
    url: 'https://sports.tipico.de/de/alle/1101/57201/57777301,60005301',
  },
  {
    competition: 'USA / Major League Soccer',
    url: 'https://sports.tipico.de/de/alle/1101/18301',
  },
  {
    competition: 'USA / USL Championship',
    url: 'https://sports.tipico.de/de/alle/1101/78360301',
  },
  //africa
  {
    competition: 'EGY / Premier League',
    url: 'https://sports.tipico.de/de/alle/1101/38612301',
  },
  {
    competition: 'EGY / Premier League',
    url: 'https://sports.tipico.de/de/alle/1101/38612301',
  },
  {
    competition: 'SEN / Premier League',
    url: 'https://sports.tipico.de/de/alle/1101/24275301',
  },
  //oceania
  {
    competition: 'AUS / NPL', // Victoria
    url: 'https://sports.tipico.de/de/alle/1101/10216301,31384301,31283301,31499301,31281301,31508301,31378301,31300301',
  },
  /* {
    competition: 'AUS / NPL', // South Australia
    url: 'https://sports.tipico.de/de/alle/1101/31384301',
  },
  {
    competition: 'AUS / NPL', // Queensland
    url: 'https://sports.tipico.de/de/alle/1101/31283301',
  },
  {
    competition: 'AUS / NPL', // Western Australia
    url: 'https://sports.tipico.de/de/alle/1101/34201/31499301,31281301,31508301,31378301,31300301',
  },
  {
    competition: 'AUS / NPL', // Capital Football
    url: 'https://sports.tipico.de/de/alle/1101/31281301',
  },
  {
    competition: 'AUS / NPL', // Tasmania
    url: 'https://sports.tipico.de/de/alle/1101/31508301',
  },
  {
    competition: 'AUS / NPL', // Northern NSW
    url: 'https://sports.tipico.de/de/alle/1101/31378301',
  },
  {
    competition: 'AUS / NPL', // New South Wales
    url: 'https://sports.tipico.de/de/alle/1101/31300301',
  }, */
];

export default competitionUrlList;
