#! /usr/bin/env node
import pkg from "pg";
import { loadEnvFile } from "process";
loadEnvFile(process.env);
const { Client } = pkg;

const SQL = `
CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT NOT NULL,
  username VARCHAR(255) NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@localhost:5432/messages`,
  });
  await client.connect();
  await client.query("DROP TABLE IF EXISTS messages");
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
