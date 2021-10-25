
var express=require('express');
var app= express();
const http = require('http');
 server= http.createServer(app);
const { Server } = require('socket.io');
const io= new Server(server);
const provider = require('./provider');
const player_id = require('./player_id');
const map = require('./map');
const round = require('./round');
const player_weapons = require('./player_weapons');
const player_state= require('./player_state');
const player_match_stats=require('./player_match_stats');


const jsonPersonal=require('./myjson');

const exp = require('constants');
portCSGO = 3000;
webport=2626;
let idReal;
let vPlayerId;
let vMap;
let vRound;
let vWeapons;
let vPlayer_state;
let vPlayer_match_stats;
let vBomb;
let cadenaJSON;



app.set("view engine", "ejs");
app.set("views", __dirname + "/views");



  io.on('connection', (socket) => {
    console.log('a user connected');
  });

server.listen(webport, function() {
    console.log('ir a localhost:'+webport+' para ir a la página');
});
app.get('/hud', (req, res) => {
   res.render("hud.ejs");
  });

  app.get('/', (req, res) => {
    res.render("index.ejs");
   });


app.get('/chart.js', function(req, res) {
    res.sendFile(__dirname +'/public/js/chart.js');
});
app.get('/weapons_ico.js', function(req, res) {
  res.sendFile(__dirname +'/public/js/weapons_ico.js');
});


app.get('/style.css', function(req, res) {
  res.sendFile(__dirname +'/public/css/style.css');
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
             vMap=map.map(datos);
             vPlayerId = player_id.player_id(datos, idReal,vMap[1]);
             vRound=round.round(datos, vMap[1]);
             vWeapons=player_weapons.player_weapons(datos, vMap[1],idReal);
             vPlayer_state=player_state.player_state(datos,vMap[1],idReal);
             vPlayer_match_stats=player_match_stats.player_match_stats(datos,vMap[1],idReal);
           
            cadenaJSON=jsonPersonal.jsonPersonal(idReal,vPlayerId,vMap,vRound,vWeapons,vPlayer_state,vPlayer_match_stats);
             datoDinamico(cadenaJSON);
             datoEstatico(cadenaJSON);
            res.end('');
           
           


        });




    } else {  
            console.log("Not expecting other request types...");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            var html="Puerto de cs go GSI: "+portCSGO;
            res.end(html);
          }
    });
function datoDinamico(cadena){
    io.emit("update",cadena);

}

function datoEstatico(cadena){
    app.get("/hud", (req, res) => {
        res.render("hud",{"idPlayer":cadena.Usuario.ID});
      });
}






server.listen(portCSGO);
console.log('Listening at http://' +portCSGO);