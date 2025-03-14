import pkg from "pg";
const { Pool } = pkg;
import { loadEnvFile } from "process";
loadEnvFile(".env");

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Render’s PostgreSQL
  },
});
