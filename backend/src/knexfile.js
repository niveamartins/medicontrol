require('dotenv').config({path: '../.env'});

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
          host : process.env.DB_HOST,
          user : process.env.DB_USER,
          password : process.env.DB_PASSWORD,
          database : process.env.DB_NAME,
          charset: 'utf8'
        },
        migrations: {
          directory: './database/migrations'
        },
        seeds: {
          directory: './database/seeds'
        }
      },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};