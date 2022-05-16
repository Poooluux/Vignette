const express = require('express');
require("dotenv").config();
const BodyParser = require ('body-parser');
const app = express();
app.use(BodyParser.urlencoded ({extended:true}));
const port = 3000;
let verifemail = new RegExp ('[a-z0-9A-Z\._-]+@[a-z]+\.[a-z]{2,3}')

function emailValid(email) {
    verifemail.email;
    return;
}

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})


    app.post('/login',(req, res) => {
        if (emailValid(req.body.email)) {
            console.log(req.body.email)
            console.log(req.body.mdp) }
        else {
            alert ("Adresse mail invalide");
            console.error('ALERT')
        } 
    })
    
    app.post('/signup',(req, res) => {
        console.log(req.body.nom)
        console.log(req.body.email)
        console.log(req.body.mdp) 
        
    })  








app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

var pgp = require("pg-promise")(/*options*/);
var db = pgp(`${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`); 

db.one("SELECT $1 AS value", 123) 
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

