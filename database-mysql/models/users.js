const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports.Users = db.define('users', {
 id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
 },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  balance: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
});
