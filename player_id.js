
function player_id(JSON,id,map){
    
    var matchid=JSON.player.steamid;
    var activity=JSON.player.activity;
    var vStatus=[];
    var team;
    var name;
    var status;

    vStatus.push(activity);
    
   

    if(map){
        // console.log("====PARTIDA EN CURSO====");
        if(id==matchid){
            // console.log("====JUGADOR VIVO====");
             team=JSON.player.team
             name=JSON.player.name;
          
             status="Vivo"
            // console.log("Equipo actual: "+team);
            // console.log(name);
            // console.log(status);
             vStatus.push(team,name,status);
             return vStatus;
            
        }else{
            
            team=JSON.player.team;
            // console.log("Jugador muerto");
            status="Muerto";
            vStatus.push(team,name,status);
            return vStatus;
           
        }
       
    }else{
       
        vStatus.push("","","");
        // console.log("!!!!======="+activity+"=======!!!!!");
        return vStatus;
        
        
    }
    return vStatus;
}
module.exports.player_id=player_id;