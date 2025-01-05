const { Pool } = require("pg");

const { getSecret } = require("docker-secret");

const options = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  user:
    process.env.NODE_ENV === "development"
      ? process.env.PGUSER
      : getSecret(process.env.PGUSER_SECRET),
  password:
    process.env.NODE_ENV === "development"
      ? process.env.PGPASSWORD
      : getSecret(process.env.PGPASSWORD_SECRET),
};

const pool = new Pool(options);

const query = async (text, params) => {
  const { rows } = await pool.query(text, params);
  return rows;
};

module.exports = {
  query,
};
