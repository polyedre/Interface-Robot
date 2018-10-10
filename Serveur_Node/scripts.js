var app = require('express')();
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.set('view engine', 'pug');

app.listen(8080);

console.log("Server started at http://localhost:"+ 8080);

app.get('/', (req_app, res_app) => {

    console.log("Entrée GET");

    http.get('http://127.0.0.1:3000', (resp) => {

        let data = '';

        resp.on("data", (chunk) => {
            data += chunk;
        });

        resp.on("end", () => {
            console.log("Tout le fichier a été récupéré.");
            json = JSON.parse(data);

            app.render('affichage', json, (err, html) => {
                if (err) throw err;
                res_app.send(html);
            });

        });

        resp.on("error", (err) => {
            console.log("Error : " + err.message);
        });

    });

});
