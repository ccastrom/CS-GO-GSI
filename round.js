function round(JSON,player_status){
    if(player_status=="playing"){
        var phase=JSON.round.phase;
        var win_team=JSON.round.win_team;
        var bomb=JSON.round.bomb;
        if(!bomb){
            console.log("Bomba no plantada"); 
        }else{
            console.log("Estado de la bomba: "+bomb); 
        }
        if(!win_team){
            console.log("Ganador en disputa");
        }else{
            console.log("Equipo ganador: "+win_team);
        }
       
        console.log("Fase actual: "+phase);
      
      
    }
   
}
module.exports.round=round;