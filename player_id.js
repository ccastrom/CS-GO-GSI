
function player_id(JSON,id){
    
    var matchid=JSON.player.steamid;
    var activity=JSON.player.activity;
    var vStatus=[];
    var team;
    var name;
    var status;

    vStatus.push(activity);
    
   

    if(activity=="playing"){
        console.log("====PARTIDA EN CURSO====");//Si activity es igual a "playing" existe una partida en curso
        if(id==matchid){
            console.log("====JUGADOR VIVO====");//Si el ID base es igual al id actual de la partida, significa que el jugador esta vivo
             team=JSON.player.team
             name=JSON.player.name;
             status="Vivo"
            console.log("Equipo actual: "+team);
            console.log(name);
            console.log(status);
            vStatus.push(team,name,status);
        }else{
            
            team=JSON.player.team;
            console.log("Jugador muerto");
            status="Muerto";
            vStatus.push(team,"",status);
        }
       
    }else{
       
        vStatus.push("","","");
        console.log("======="+activity+"=======");
        return vStatus;
        
        
    }
    return vStatus;
}
module.exports.player_id=player_id;