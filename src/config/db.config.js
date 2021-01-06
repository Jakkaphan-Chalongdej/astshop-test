const env = require("./env.js");
const db = {
  host: env.host,
  database: env.database,
  user: env.user,
  password: env.password,
};

module.exports = db;
