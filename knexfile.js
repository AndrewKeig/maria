
module.exports = {

  development: {
    client: 'maria',
    debug: false,
    acquireConnectionTimeout: 10000,
    connection: {
      db: 'boo',
      host: 'localhost'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/'
    }
  }

};
