import moment from 'moment';

// BUG: Falls Datum in der Vergangenheit (bsp. Wenn nur Tag und Monat angegeben sind), dann nächstes Jahr statt dieses Jahr
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

  // be-at-home, hpybet format "DD.MM.YY HH:mm"
  else if (source === 'bet-at-home' || source === 'hpybet') {
    return moment(dateString, 'DD.MM.YYYY HH:mm').toDate();
  }

  // betano format "DD/MM HH:mm"
  else if (source === 'betano') {
    return moment(dateString, 'DD/MM HH:mm').year(moment().year()).toDate();
  }

  // admiralbet format "DD.MM HH:mm"
  else if (source == 'admiralbet' || source === 'neobet') {
    return moment(dateString, 'DD.MM HH:mm').year(moment().year()).toDate();
  }
  return moment('00.00.0000 00:00', 'DD.MM.YYYY HH:mm').toDate(); //Return invalides Date Objekt
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
