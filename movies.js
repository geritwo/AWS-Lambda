'use strict'

exports.movies = function(e, context, callback) {
	const config = {
    // read from ENV:
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
		user: process.env.PGUSER,
		password: process.env.PGPASSWORD,
	};
	const { Pool } = require('pg');
	const pool = new Pool(config);
	let queryString = {text : '', values : []};

	if (e.httpMethod == 'GET') {
		if (e.pathParameters.id) {
			queryString.text = 'SELECT title, score FROM movie WHERE id=$1',
			queryString.values.push(e.pathParameters.id);
		} else {
			queryString.text = 'SELECT * FROM movie WHERE id<25';
		}
	} else if (e.httpMethod == 'POST'){
		queryString.text = 'INSERT INTO movie(title, year, imdb) VALUES($1, $2, $3) RETURNING id';
		for (var key in e.body) {
			if (e.body.hasOwnProperty(key)) {
				queryString.values.push(e.body[key]);
			}
		}
	} else if (e.httpMethod == 'DELETE') {
		queryString.text = 'DELETE from movie WHERE id=$1';
		queryString.values.push(e.pathParameters.id);
	}

	pool.query(queryString, (err, res) => {
		if (err) {
			callback(err)
		} else {
			callback(null, {
				statusCode: '200',
				body: JSON.stringify(res),
				headers: {
					'Content-Type': 'application/json',
				}
			});
		}
	pool.end();
	});
};
