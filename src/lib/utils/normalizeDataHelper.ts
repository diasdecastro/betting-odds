import moment from 'moment';
import Fuse from 'fuse.js';

export const getNormalizedDateFormat = (
  dateString: string,
  source: string
): Date => {
  // Tipico hat 2 verschiedene Formate. Entweder "heute, HH:mm" oder "Tag, DD.MM, HH:mm"
  if (source === 'tipico') {
    const dateTimeSplit = dateString.split(', ');

    if (dateTimeSplit.length === 2) {
      const dateTimeString =
        moment().format('DD.MM.YYYY') + ' ' + dateTimeSplit[1];

      return moment(dateTimeString, 'DD.MM.YYYY HH:mm').toDate();
    }

    return moment(`${dateTimeSplit[1]}, ${dateTimeSplit[2]}`, 'DD.MM, HH:mm')
      .year(moment().year())
      .toDate();
  }

  // 888sport hat bereits ein String im Date Format
  else if (source === '888sport') return new Date(dateString);
  // spreadex hat 3 verschiedene Formate. "Today, HH:mm", "Tom, HH:mm" und "Wochentag, HH:mm (z.B. Tue, 11:00)"
  else if (source === 'spreadex') {
    const dateTimeSplit = dateString.split(', ');

    if (dateTimeSplit[0] === 'Today') {
      const dateTimeString =
        moment().format('DD.MM.YYYY') + ' ' + dateTimeSplit[1];

      return moment(dateTimeString, 'DD.MM.YYYY HH:mm').toDate();
    } else if (dateTimeSplit[0] === 'Tom') {
      const dateTimeString =
        moment().add(1, 'day').format('DD.MM.YYYY') + ' ' + dateTimeSplit[1];

      return moment(dateTimeString, 'DD.MM.YYYY HH:mm').toDate();
    }

    return moment(dateString, 'ddd, HH:mm').toDate();
  }

  // bwin hat 5 Formate. "Heute, HH:mm", "Morgen, HH:mm", "DD.MM.YY HH:mm", "Beginnt in mm Min." und 'live'
  else if (source === 'bwin') {
    const dateTimeSplit = dateString.split(', ');

    if (dateString === 'live') {
      return moment(
        moment().format('DD.MM.YYYY HH:mm'),
        'DD.MM.YYYY HH:mm'
      ).toDate();
    }

    //BUG: Uhrzeit kann ungenau sein. Lösung überlegen
    if (dateString.startsWith('Beginnt')) {
      const minutesFromNow = parseInt(dateString.split(' ')[2]);
      const dateTimeString = moment()
        .add(minutesFromNow, 'minutes')
        .format('DD.MM.YYYY HH:mm');

      return moment(dateTimeString, 'DD.MM.YYYY HH:mm').toDate();
    } else if (dateTimeSplit[0] === 'Heute') {
      const dateTimeString =
        moment().format('DD.MM.YYYY') + ' ' + dateTimeSplit[1];

      return moment(dateTimeString, 'DD.MM.YYYY HH:mm').toDate();
    } else if (dateTimeSplit[0] === 'Morgen') {
      const dateTimeString =
        moment().add(1, 'day').format('DD.MM.YYYY') + ' ' + dateTimeSplit[1];

      return moment(dateTimeString, 'DD.MM.YYYY HH:mm').toDate();
    }

    return moment(
      //Transformiert "DD.MM.YY HH:mm"  in "DD.MM.YYYY HH:mm"
      moment(dateString, 'DD.MM.YY HH:mm').format('DD.MM.YYYY HH:mm'),
      'DD.MM.YYYY HH:mm'
    ).toDate();
  }
  return moment('00.00.0000 00:00', 'DD.MM.YYYY HH:mm').toDate(); //Return invalides Date Objekt
};

export const getCountryCode = (
  //TODO: Komplette Competition Name Normalisierungslogik ausarbeiten
  //TODO: Automatisierter Test schreiben, um zu Prüfen, ob bestimmte Länder ausgelassen wurden
  competitionCountry: string
): string => {
  switch (competitionCountry) {
    //Gott segne ChatGPT
    case 'International':
      return 'INT';
    case 'Argentina':
    case 'Argentinien':
      return 'ARG';
    case 'Australia':
    case 'Australien':
      return 'AUS';
    case 'Brazil':
    case 'Brasilien':
      return 'BRA';
    case 'Chile':
      return 'CHL';
    case 'China':
      return 'CHN';
    case 'Colombia':
    case 'Kolumbien':
      return 'COL';
    case 'Denmark':
    case 'Dänemark':
      return 'DNK';
    case 'Ecuador':
      return 'ECU';
    case 'Egypt':
    case 'Ägypten':
      return 'EGY';
    case 'England':
      return 'ENG';
    case 'Finland':
    case 'Finnland':
      return 'FIN';
    case 'France':
    case 'Frankreich':
      return 'FRA';
    case 'Germany':
    case 'Deutschland':
      return 'DEU';
    case 'Iceland':
    case 'Island':
      return 'ISL';
    case 'Ireland':
    case 'Irland':
      return 'IRL';
    case 'Italy':
    case 'Italien':
      return 'ITA';
    case 'Japan':
      return 'JPN';
    case 'Canada':
    case 'Kanada':
      return 'CAN';
    case 'Kazakhstan':
    case 'Kasachstan':
      return 'KAZ';
    case 'New Zealand':
    case 'Neuseeland':
      return 'NZL';
    case 'Norway':
    case 'Norwegen':
      return 'NOR';
    case 'Paraguay':
      return 'PRY';
    case 'Peru':
      return 'PER';
    case 'Scotland':
    case 'Schottland':
      return 'SCO';
    case 'South Korea':
    case 'Südkorea':
    case 'Republic of Korea':
    case 'Republik Korea':
      return 'KOR';
    case 'Spain':
      return 'ESP';
    case 'Sweden':
    case 'Schweden':
      return 'SWE';
    case 'United States':
    case 'US':
    case 'USA':
    case 'Vereinigte Staaten von Amerika':
      return 'USA';
    case 'Uruguay':
      return 'URY';
    default:
      return 'n/A';
  }
};

//TODO: Komplette Competition Name Normalisierungslogik ausarbeiten
export const getNormalizedCompetitionName = (
  competitionCountryCode: string,
  scraptedCompetitionName: string
): string => {
  // Krasser Typ
  const standardizedNames: {
    [key: string]: { /* de: string[] | []; */ en: string[] | [] };
  } = {
    INT: {
      // de: [],
      en: [],
    },
    ARG: {
      // de: [],
      en: [
        'Primera División',
        'Primera B Nacional',
        'Primera B Metropolitana',
        'Copa Argentina',
      ],
    },
    AUS: {
      // de: ['NPL Staatsliga', 'FFA-Pokal'],
      en: [
        'A-League',
        'National Premier Leagues',
        'NPL State League',
        'FFA Cup',
      ],
    },
    BRA: {
      // de: [],
      en: [
        'Campeonato Brasileiro Série A',
        'Campeonato Brasileiro Série B',
        'Campeonato Brasileiro Série C',
        'Copa do Brasil',
      ],
    },
    CHL: {
      // de: [],
      en: [
        'Primera División',
        'Primera B de Chile',
        'Segunda División Profesional de Chile',
        'Copa Chile',
      ],
    },
    COL: {
      // de: [],
      en: [
        'Categoría Primera A',
        'Categoría Primera B',
        'Categoría Primera C',
        'Copa Colombia',
      ],
    },
    DNK: {
      // de: ['1. Division', '2. Division', 'Dänischer Pokal'],
      en: ['Superliga', '1st Division', '2nd Division', 'Danish Cup'],
    },
    ECU: {
      // de: [],
      en: ['Serie A', 'Serie B', 'Segunda Categoría', 'Copa Ecuador'],
    },
    EGY: {
      // de: ['Zweite Division', 'Dritte Division', 'Ägypten-Pokal'],
      en: ['Premier League', 'Second Division', 'Third Division', 'Egypt Cup'],
    },
    ENG: {
      // de: [],
      en: [
        'Premier League',
        'The Championship',
        'League One',
        'League Two',
        'FA Cup',
        'EFL Cup',
      ],
    },
    FIN: {
      // de: ['Finnischer Pokal'],
      en: ['Veikkausliiga', 'Ykkönen', 'Kakkonen', 'Finnish Cup'],
    },
    FRA: {
      // de: [],
      en: [
        'Ligue 1',
        'Ligue 2',
        'Championnat National',
        'Coupe de France',
        'Coupe de la Ligue',
      ],
    },
    DEU: {
      // de: [],
      en: ['Bundesliga', '2. Bundesliga', '3. Liga', 'DFB-Pokal'],
    },
    ISL: {
      // de: ['Isländischer Pokal'],
      en: ['Úrvalsdeild', '1. deild karla', '2. deild karla', 'Icelandic Cup'],
    },
    IRL: {
      // de: ['Erste Division'],
      en: ['Premier Division', 'First Division', 'A Championship', 'FAI Cup'],
    },
    ITA: {
      // de: [],
      en: [
        'Serie A',
        'Serie B',
        'Serie C',
        'Coppa Italia',
        'Supercoppa Italiana',
      ],
    },
    JPN: {
      // de: ['J1 Liga', 'J2 Liga', 'J3 Liga'],
      en: [
        'J1 League',
        'J2 League',
        'J3 League',
        "Emperor's Cup",
        'J. League Cup',
      ],
    },
    CAN: {
      // de: ['Meisterschaft'],
      en: ['Premier League', 'Championship'],
    },
    KAZ: {
      // de: ['Erste Division', 'Kasachischer Pokal'],
      en: ['Premier League', 'First Division', 'Kazakhstan Cup'],
    },
    NZL: {
      // de: ['Neuseeland Fußballmeisterschaft'],
      en: [
        'New Zealand Football Championship',
        'Northern League',
        'Central League',
        'Southern League',
        'Chatham Cup',
      ],
    },
    NOR: {
      // de: ['Erste Division', 'Zweite Division', 'Norwegischer Fußballpokal'],
      en: [
        'Eliteserien',
        'First Division',
        'Second Division',
        'Norwegian Football Cup',
      ],
    },
    PRY: {
      // de: [],
      en: ['Primera División', 'División Intermedia', 'Copa Paraguay'],
    },
    PER: {
      // de: [],
      en: [
        'Primera División',
        'Segunda División',
        'Copa Bicentenario',
        'Copa Perú',
      ],
    },
    SCO: {
      // de: ['Schottischer Pokal'],
      en: ['Premiership', 'Championship', 'League One', 'Scottish Cup'],
    },
    KOR: {
      // de: ['Koreanischer FA-Pokal'],
      en: ['K League 1', 'K League 2', 'National League', 'Korean FA Cup'],
    },
    ESP: {
      // de: [],
      en: [
        'La Liga',
        'Segunda División',
        'Segunda División B',
        'Copa del Rey',
        'Supercopa de España',
      ],
    },
    SWE: {
      // de: [],
      en: [
        'Allsvenskan',
        'Superettan',
        'Division 1',
        'Svenska Cupen',
        'Supercupen',
      ],
    },
    USA: {
      // de: ['USL-Meisterschaft', 'USL Liga Eins'],
      en: [
        'Major League Soccer',
        'USL Championship',
        'USL League One',
        'U.S. Open Cup',
        'MLS Cup',
      ],
    },
    URY: {
      // de: [],
      en: [
        'Primera División',
        'Segunda División',
        'Intermedia',
        'Copa Uruguay',
      ],
    },
  };

  //thresholt ist zwischen 0 und 1. Je niedriger, desto strenger ist das matching.
  const fuseOptions = {
    includeScore: false,
    threshold: 0.4,
  };

  // console.log(competitionCountryCode);
  const competitionNamesForCountry: string[] = [
    ...standardizedNames[competitionCountryCode].en,
    // ...standardizedNames[competitionCountryCode].de,
  ];

  /* Instanz von Fuse initialisiert mit den Standardnamen der Wettbewerbe des Landes, 
  das als Parameter überbergeben wurde und der obrigen Options */
  const fuse = new Fuse(competitionNamesForCountry, fuseOptions);

  return fuse.search(scraptedCompetitionName)[0]?.item || '';
};

export const getNormalizedTeamName = (teamName: string): string => {
  //TODO: Komplette Team Name Normalisierungslogik ausarbeiten
  return teamName;
};

export const getNormalizedOddsFormat = (oddsString: string): number => {
  //CASE: comma as decimal (eg. 1,50)
  const commaAsDecimalPoint = /^\d+(,\d+)*$/;
  if (commaAsDecimalPoint.test(oddsString)) {
    return parseFloat(oddsString.replace(',', '.'));
  }
  //CASE: ratio (eg. 3/2)
  else if (oddsString.includes('/')) {
    return (
      parseFloat(oddsString.split('/')[0]) /
      parseFloat(oddsString.split('/')[1])
    );
  }

  return parseFloat(oddsString);
};
