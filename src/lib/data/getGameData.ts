import { Pool } from 'mysql2/promise';

const getGameData = async (conn: Pool, table: string, options: object = {}) => {
  try {
    const [rows] = await conn.query(
      `
        SELECT * FROM ${table}
        WHERE match_datetime  > NOW()
        ORDER BY competition_country, competition_name
      `
    );

    //TODO: Teile Rows in 2D-Array mit 1 Array pro Wettbewerb
    console.log(rows);
    return rows;
  } catch (e) {
    console.log(e);
  }
};

export default getGameData;
