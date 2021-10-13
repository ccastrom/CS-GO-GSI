function player_state(JSON,map,userID){
    var matchid=JSON.player.steamid;
    var health;
    var armor;
    var helmet;
    var defusekit;
    var flashed;
    var smoked;
    var burning;
    var money;
    var round_kills;
    var round_killshs;
    var equip_value;
    let vPlayer_state=[];

    if(map && matchid==userID){
       
        
        health=JSON.player.state.health;
        armor=JSON.player.state.armor;
        helmet=JSON.player.state.helmet;
        defusekit=JSON.player.state.defusekit;
        flashed=JSON.player.state.flashed;
        smoked=JSON.player.state.smoked;
        burning=JSON.player.state.burning;
        money=JSON.player.state.money;
        round_kills=JSON.player.state.round_kills;
        round_killhs=JSON.player.state.round_killhs;
        equip_value=JSON.player.state.equip_value;
        vPlayer_state.push(health,armor,helmet,defusekit,flashed,smoked,burning,money,round_kills
        ,round_killhs,equip_value);
       

        return vPlayer_state;
            

    }else{
      
        vPlayer_state.push("","","","","","","","","","","");
        return vPlayer_state;
    }

    
}
module.exports.player_state=player_state;