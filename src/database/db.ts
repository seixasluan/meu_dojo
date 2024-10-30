import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

client
  .connect()
  .then(() => console.log("Connected to database"))
  .catch((err: any) => console.log("Error: ", err));

export default client;
