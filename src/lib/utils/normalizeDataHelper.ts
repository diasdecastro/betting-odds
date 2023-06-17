import moment from 'moment';

export const normalizeDateFormat = (dateString: string): Date => {
  //TODO: Komplette Date Normalisierungslogik ausarbeiten
  //This is the shitshow
  return new Date();
};

export const normalizeCompetitionName = (competitionName: string): string => {
  //TODO: Komplette Competition Name Normalisierungslogik ausarbeiten
  return competitionName;
};

export const normalizeTeamName = (teamName: string): string => {
  //TODO: Komplette Team Name Normalisierungslogik ausarbeiten
  return teamName;
};

export const normalizeOddsString = (oddsString: string): number => {
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
