const knex = require('knex');
const { database } = require('./config_laura');

module.exports = knex({
  client: 'mysql2',
  connection: database,
});
