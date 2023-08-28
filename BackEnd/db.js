const Pool = require("pg").Pool;
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DATABASE,
  port: process.env.PORT,
  password: process.env.PASSWORD,
  host: process.env.HOST,
});

module.exports = pool;
