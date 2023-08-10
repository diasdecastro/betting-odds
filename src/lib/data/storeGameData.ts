import { Pool } from 'mysql2/promise';

//NOTE: Type wird später die unterschiedlichen Wettformate festlegen (z.B. W-D-L vs. W-L )
const storeGameData = async (
  conn: Pool,
  table: string,
  data: Array<any>,
  options: object = {}
): Promise<void> => {
  try {
    conn.query(
      `
        INSERT INTO ${table} 
          (
            competition_country, 
            competition_name, 
            match_link, 
            match_datetime, 
            team1_name, 
            team2_name, 
            odds_team1, 
            odds_draw, 
            odds_team2,
            last_update,
            live
          )
        VALUES 
          ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
        ON DUPLICATE KEY UPDATE
            match_link = ?,
            odds_team1 = ?,
            odds_draw = ?,
            odds_team2 = ?
        `,
      [...data]
    );
  } catch (e) {
    console.log(e);
  }
};

export default storeGameData;
