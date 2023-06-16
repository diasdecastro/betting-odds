export const normalizeDateFormat = (dateString: string): Date => {
  //TODO: Komplette Date Normalisierungslogik ausarbeiten
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
  //TODO: Komplette Odds Normalisierungslogik ausarbeiten
  return parseFloat(oddsString);
};
