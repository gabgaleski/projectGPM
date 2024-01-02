"use strict";
const config = {
    dialect: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "123456",
    database: "postgres",
};
module.exports = config;
