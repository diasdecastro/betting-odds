import mysql from 'mysql2';

const connectDb = () => {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 5,
  });

  const promisePool = pool.promise();

  return promisePool;
};

export { connectDb };
