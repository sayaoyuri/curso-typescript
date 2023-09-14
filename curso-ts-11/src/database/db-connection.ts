import pg from 'pg';

const { Pool } = pg;

const db = new Pool({
  connectionString: 'postgres://postgres:postgres123@localhost:5432/cursots11'
});

export default db;