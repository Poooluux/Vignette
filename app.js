const express = require('express');
require("dotenv").config();
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

require("dotenv").config();

const mysql = require("mysql");
let con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://vignette:azerty@localhost:5432/BaseDD"); //FIXME : exterioriser le port parce-que faille sécurité

db.one("SELECT $1 AS value", 123) 
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
