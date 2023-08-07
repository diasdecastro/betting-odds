import mysql from 'mysql2';

const connectDb = () => {
  // console.log()
  /* const pool = createPool({
    host: 'localhost',
    // port: 3306,
    user: 'root',
    password: '123321',
    database: 'betting-odds',
    timeout: 100000,
    connectionLimit: 50,
  }); */
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    // port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 5,
    // acquireTimeout: 100000,
  });

  const promisePool = pool.promise();

  return promisePool;
};

export { connectDb };
