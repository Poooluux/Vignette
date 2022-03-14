const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://username:password@host:5432/BaseDD");

db.one("SELECT $1 AS value", 123)
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });