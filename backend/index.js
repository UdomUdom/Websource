require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = process.env.PORT;

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'testdb',
});

// simple query
connection.query('SELECT * FROM `pro` ', function (err, results, fields) {
  console.log(results); // results contains rows returned by server
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
