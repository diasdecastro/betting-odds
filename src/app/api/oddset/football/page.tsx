import getGames from '@lib/scrapers/oddset/football/getGames';

const getFootballGames = async (req, res) => {
  try {
    const games = await getGames();
    return <pre>{JSON.stringify(games, undefined, 4)}</pre>;
  } catch (e) {
    throw e;
  }
};

export default getFootballGames;
