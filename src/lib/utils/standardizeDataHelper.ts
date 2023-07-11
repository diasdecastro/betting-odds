import moment from 'moment';

export const getStandardizedDateFormat = (
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

export const getStandardizedOddsFormat = (oddsString: string): number => {
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
