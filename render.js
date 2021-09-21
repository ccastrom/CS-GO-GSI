const { prototype } = require('events');
const express= require('express');
const { Server } = require('http');
const app=express();
port=3000;


// Motor de plantilla
function render(id){
console.log("id es: "+id);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("index", { titulo: id });
  });
  
  app.get("/nosotros", (req, res) => {
    res.render("nosotros", { titulo: "Nosotros EJS" });
  });
  
 


}
app.listen(port,()=>{
  console.log("Servidor puerto: "+port);
})

module.exports.render=render;
