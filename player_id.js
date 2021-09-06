

function player_id(JSON,id){
    
    var matchid=JSON.player.steamid;
    var activity=JSON.player.activity;
   

    if(activity=="playing"){
        console.log("====PARTIDA EN CURSO====");//Si activity es igual a "playing" existe una partida en curso
        if(id==matchid){
            console.log("====JUGADOR VIVO====");//Si el ID base es igual al id actual de la partida, significa que el jugador esta vivo
            var team=JSON.player.team
            var name=JSON.player.name;
            console.log("Equipo actual: "+team);
            console.log(name);
        }else{
            console.log("Jugador muerto");
        }
       
    }else{
        
        console.log("======="+activity+"=======");
    }
  
    
 
   
    
 
  


}
module.exports.player_id=player_id;