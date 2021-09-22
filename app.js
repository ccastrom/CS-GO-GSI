http = require('http');
var app = require('express')();
var express = require('http').Server(app);
var io = require('socket.io')(express);
const provider = require('./provider');
const player_status = require('./player_status');
const map = require('./map');
const round = require('./round');
const player_weapons = require('./player_weapons');
const jsonPersonal=require('./myjson');
portCSGO = 3000;
webport=2626;
let idReal;
let vPlayerStatus;
let vMap;
let vRound;
let vWeapons;
let cadenaJSON;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.get("/", (req, res) => {
    res.render("index");
  });



  io.on('connection', (socket) => {
    console.log('a user connected');
  });
express.listen(webport, function() {
    console.log('ir a localhost:'+webport+' para ir a la página');
});


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
            vPlayerStatus = player_status.player_status(datos, idReal);
            vMap=map.map(datos, vPlayerStatus);
            vRound=round.round(datos, vPlayerStatus);
            vWeapons=player_weapons.player_weapons(datos, vPlayerStatus,idReal);
            cadenaJSON=jsonPersonal.jsonPersonal(idReal,vPlayerStatus,vMap,vRound,vWeapons);
            actualizar(cadenaJSON);
            res.end('');
           
           


        });




    } else {  
            res.writeHead(200, { 'Content-Type': 'text/html' });
            var html="Puerto de cs go GSI: "+portCSGO;
            res.end(html);
          }
    });
function actualizar(cadena){
    io.emit("update",cadena);

}





server.listen(portCSGO);
console.log('Listening at http://' +portCSGO);