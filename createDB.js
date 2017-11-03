const { Pool } = require('pg');
const config = {
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
};
const pool = new Pool(config);

const queryString = 'CREATE TABLE movies(id SERIAL PRIMARY KEY, title VARCHAR(256) not null, year NUMERIC, imdb NUMERIC(2)';

pool.query(queryString, function(err, res) {
	if (err) {
		console.log(err);
	} else {
		console.log(res);
	}
});
pool.end();

