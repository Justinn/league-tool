const Sequelize = require('sequelize');

const db = new Sequelize(`postgres://localhost:5432/league-v2`, {
  logging: false, // so we don't see all the SQL queries getting made
});

module.exports = db;