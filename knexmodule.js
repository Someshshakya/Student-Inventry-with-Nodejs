const knex = require("knex")({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'hulk1020',
      database : 'someshdata'
    }
});
module.exports = knex;