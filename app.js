const express = require('express');
require("dotenv").config();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

var pgp = require("pg-promise")(/*options*/);
var db = pgp(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`); //FIXME : exterioriser le port parce-que faille sécurité

db.one("SELECT $1 AS value", 123) 
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
