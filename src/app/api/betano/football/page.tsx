import getGames from '@lib/scrapers/betano/football/getGames';

const getFootballGames = async (req, res) => {
  try {
    const games = await getGames();
    return JSON.stringify(games);
  } catch (e) {
    throw e;
  }
};

export default getFootballGames;
