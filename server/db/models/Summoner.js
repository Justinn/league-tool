const { db } = require('../');
const Sequelize = require('sequelize');

const Summoner = db.define('summoner', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  accountId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  puuid: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  profileIconId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  revisionDate: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  summonerLevel: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Summoner;
