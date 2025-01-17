require('dotenv').config(); 

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    operatorAliases: process.env.DB_OPERATOR_ALIASES === "true", 
  },
};
