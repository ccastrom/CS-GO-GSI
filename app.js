
var express = require('express');
var app = express();
const http = require('http');
server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const provider = require('./provider');
const player_id = require('./player_id');
const map = require('./map');
const round = require('./round');
const player_weapons = require('./player_weapons');
const player_state = require('./player_state');
const player_match_stats = require('./player_match_stats');
const fetch = require('node-fetch');
const favicon= require('serve-favicon');
var path= require ('path');
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })





//console.log("Bombas plantadas: "+contenido.playerstats.stats[3].value)





const jsonPersonal = require('./myjson');

const exp = require('constants');
portCSGO = 3000;
webport = 2626;
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



app.use (favicon(path.join(__dirname,'/public/images','favicon.ico')))

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(webport, function () {
  console.log('ir a localhost:' + webport + ' para ir a la página');
});
app.get('/hud', (req, res) => {
  res.render("hud.ejs");
});




app.get('/chart.js', function (req, res) {
  res.sendFile(__dirname + '/public/js/chart.js');
});
app.get('/weapons_ico.js', function (req, res) {
  res.sendFile(__dirname + '/public/js/weapons_ico.js');
});
app.get('/api.js', function (req, res) {
  res.sendFile(__dirname + '/public/js/api.js');
});




app.get('/style.css', function (req, res) {
  res.sendFile(__dirname + '/public/css/style.css');
});
app.get('/fondo.svg', function (req, res) {
  res.sendFile(__dirname + '/public/images/fondo.svg');
});

app.get('/Chart.svg', function (req, res) {
  res.sendFile(__dirname + '/public/images/Chart.svg');
});
app.get('/trending_up.svg', function (req, res) {
  res.sendFile(__dirname + '/public/images/trending_up.svg');
});


app.get('/circle2.svg', function (req, res) {
  res.sendFile(__dirname + '/public/images/circle2.svg');
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
      vMap = map.map(datos);
      vPlayerId = player_id.player_id(datos, idReal, vMap[1]);
      vRound = round.round(datos, vMap[1]);
      vWeapons = player_weapons.player_weapons(datos, vMap[1], idReal);
      vPlayer_state = player_state.player_state(datos, vMap[1], idReal);
      vPlayer_match_stats = player_match_stats.player_match_stats(datos, vMap[1], idReal);

      cadenaJSON = jsonPersonal.jsonPersonal(idReal, vPlayerId, vMap, vRound, vWeapons, vPlayer_state, vPlayer_match_stats);

      datoDinamico(cadenaJSON);
      //datoEstatico(cadenaJSON);
     
      res.end('');




    });




  } else {
    console.log("Not expecting other request types...");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = "Puerto de cs go GSI: " + portCSGO;
    res.end(html);
  }
});





app.get('/', (req, res) => {
  res.render("index.ejs");
});

app.get('/aboutUs', (req, res) => {
  res.render("aboutUs.ejs");
});
app.post('/', urlencodedParser, (req, res) => {
  console.log(req.body);
  var datos = req.body.id64;

  var apiKey = "5DC20E24D2E76A091F52A43BCCBFA67A";
  fetch("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key="+apiKey+"&steamids="+datos)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (data) {

    // Store the post data to a variable
    post = data;
    

    // Fetch another API
    return fetch("https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key="+apiKey+"&steamid="+datos);

  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (userData) {

    res.render("profile",{username:post.response.players[0].personaname,
      avatar: post.response.players[0].avatarfull,
      totalPlanted:userData.playerstats.stats[3].value,
      totalDefused:userData.playerstats.stats[4].value,
      rankedWins:userData.playerstats.stats[130].value,
      country: post.response.players[0].loccountrycode,
      gunname:userData.playerstats.stats[20].name,
      topMap:userData.playerstats.stats[33].name,
      topMapRounds:userData.playerstats.stats[33].value,
      totalkills:userData.playerstats.stats[20].value})
      for (let index = 0; index < userData.playerstats.stats.length; index++) {
        const element = userData.playerstats.stats[index];
        console.log(element);
        console.log(index);
      
       
        
      }
    //console.log(post, userData);
  }).catch(function (error) {
    console.warn(error);
  });
});





function datoDinamico(cadena) {
  io.emit("update", cadena);
  

}


// function datoEstatico(cadena){
//     app.get("/profile", (req, res) => {
//         res.render("profile",{"idPlayer":cadena.Usuario.ID});
//       });
// }

server.listen(portCSGO);
console.log('Listening at http://' + portCSGO);