import knex from 'knex';

// A path padroniza os caminhos das pastas, com base no sistema operacional.
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;


