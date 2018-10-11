var app = require('express')();
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');
var fs = require("fs");

app.use(bodyParser.json());

app.set('view engine', 'pug');

app.listen(8080);

console.log("Server started at http://localhost:"+ 8080);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req_app, res_app) => {

    console.log("Entrée GET");


    var options = {
        root : ".",
        headers: {
            'content-type': 'text/html',
        }
    };

    res_app.sendStatus();
    res_app.sendFile("views/affichage.html", options);

    res_app.end();

});

app.get('/data.json', (req_app, res_app) => {

    console.log("Requête entrante : demande du JSON");

    res_app.set

    http.get('http://127.0.0.1:3000', (resp) => {

        let data = '';

        resp.on("data", (chunk) => {
            data += chunk;
        });

        resp.on("end", () => {
            console.log("Tout le fichier a été récupéré.");
            json = JSON.parse(data);

            res_app.sendFile("/views/affichage.html", {root : "."});

        });

        resp.on("error", (err) => {
            console.log("Error : " + err.message);
        });

    });

});
