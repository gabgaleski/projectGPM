import { Options } from "sequelize";

const config: Options = {
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123456",
  database: "backend",
};

export = config;