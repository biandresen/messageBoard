import pkg from "pg";
const { Pool } = pkg;
import { loadEnvFile } from "process";
loadEnvFile(".env");

export const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});
