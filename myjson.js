function jsonPersonal(idReal,vPlayer_id,vMap,vRound,vWeapons,vPlayer_state,vPlayer_match_stats){
    var asd;
   
    let cadenaJSON={"Usuario":{
        "ID":idReal,
        "Nombre":vPlayer_id[2]
    },
        "player_id":{
            "Actividad":vPlayer_id[0],
            "Equipo":vPlayer_id[1],
            "Estado":vPlayer_id[3]
        },
        "Mapa":{
            "TipoDePartida":vMap[0],
            "NombreDeMapa":vMap[1],
            "FaseActual":vMap[2],
            "RondaActual":vMap[3],
            "PuntuacionCT":vMap[4],
            "RondasPerdidasConsecutivasCT":vMap[5],
            "PuntuacionT":vMap[6],
            "RondasPerdidasConsecutivasT":vMap[7]

        },
        "Ronda":{
            "EstadoDeBomba":vRound[0],
            "EquipoGanador":vRound[1],
            "FaseActual":vRound[2]
        },
        "Armas":{
            "ArmaEquipada":vWeapons[0],
            "MunicionRestanteArma1":vWeapons[1],
            "Estado":vWeapons[2],
            "Arma1":vWeapons[3],
            "Arma2":vWeapons[4],
            "Arma3":vWeapons[5]
            

        },
        "Estado":{
            "Vida":vPlayer_state[0],
            "Armor":vPlayer_state[1],
            "Helmet":vPlayer_state[2],
            "defuseKit":vPlayer_state[3],
            "flashed":vPlayer_state[4],
            "smoked":vPlayer_state[5],
            "burning":vPlayer_state[6],
            "money":vPlayer_state[7],
            "round_kills":vPlayer_state[8],
            "round_killsHS":vPlayer_state[9],
            "equip_value":vPlayer_state[10],
        },
      
        "StatsPlayer":{
            "kills":vPlayer_match_stats[0],
            "assists":vPlayer_match_stats[1],
            "deaths":vPlayer_match_stats[2],
            "mvps":vPlayer_match_stats[3],
            "score":vPlayer_match_stats[4],
           
        }

    }
  
    console.log(cadenaJSON);
    return cadenaJSON;
}
module.exports.jsonPersonal=jsonPersonal;