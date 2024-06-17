const { Client } = require('pg');
require('dotenv').config();

const getClient = async () => {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  });

  await client.connect();
  
  return client;
};

module.exports = { getClient };