http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const provider = require('./provider');
const player_status = require('./player_status');
const map = require('./map');
const round = require('./round');
const player_weapons = require('./player_weapons');
const render = require('./render');
port = 3000;
host = '127.0.0.1';
let idReal;
let playerStatus;




server = http.createServer(function (req, res) {
    if (req.method == 'POST') {
        console.log("Handling POST request...");
        res.writeHead(200, { 'Content-Type': 'text/html' });

        var body = '';
        req.on('data', function (data) {
            body += data;


        });
        req.on('end', function () {
            //console.log(body);
            var datos = JSON.parse(body);
            idReal = provider.provider(datos);
            playerStatus = player_status.player_status(datos, idReal);
            map.map(datos, playerStatus);
            round.round(datos, playerStatus);
            player_weapons.player_weapons(datos, playerStatus);
            render.render(idReal);
            res.end('');
           
           


        });




    } else {
       
        fs.readFile('views/index.ejs' + req.url, function (err,data) {
            if (err) {
              res.writeHead(404);
              res.end(JSON.stringify(err));

              return;

            }
          
            res.writeHead(200, { 'Content-Type': 'text/html' });
          
            res.end(data);
          });
        
        // console.log("Not expecting other request types...");
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // var html = '<html><body>HTTP Server at http://' + host + ':' + port + ':' + playerStatus + '</body></html>';
        // res.end(html);
    }






});



server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);