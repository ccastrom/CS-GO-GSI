const { prototype } = require('events');
const express= require('express');
const { Server } = require('http');
const app=express();
port=3000;


// Motor de plantilla
function render(cadenaJSON){

  

  

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("index", { titulo: cadenaJSON.Usuario.Nombre });
  });
  
  app.get("/nosotros", (req, res) => {
    res.render("nosotros", { titulo: "Nosotros EJS" });
  });
  
 


}
app.listen(port,()=>{
  console.log("Servidor puerto: "+port);
})

module.exports.render=render;
