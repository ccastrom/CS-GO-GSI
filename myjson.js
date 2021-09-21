function jsonPersonal(idReal,vPlayerStatus,vMap,vRound,vWeapons){
    let cadenaJSON={"Usuario":{
        "ID":idReal,
        "Nombre":vPlayerStatus[2]
    },
        "Estado":{
            "Actividad":vPlayerStatus[0],
            "Equipo":vPlayerStatus[1],
            "Estado":vPlayerStatus[3]
        },
        "Mapa":{
            "Tipo de partida":vMap[0],
            "Nombre de mapa":vMap[1],
            "Fase actual:":vMap[2],
            "Ronda actual":vMap[3],
            "Puntuacion CT":vMap[4],
            "Rondas perdidas consecutivas CT":vMap[5],
            "Puntuacion T":vMap[6],
            "Rondas perdidas consecutivas T":vMap[7]

        },
        "Ronda":{
            "Estado de bomba":vRound[0],
            "Equipo Ganador":vRound[1],
            "Fase actual":vRound[2]
        },
        "Armas":{
            "Arma Equipada":vWeapons[0],
            "Munición restante arma 1":vWeapons[1],
            "Arma 1":vWeapons[2],
            "Arma 2":vWeapons[3],
            "Arma 3":vWeapons[4]
            

        }

    }
  
    console.log(cadenaJSON);
    return cadenaJSON;
}
module.exports.jsonPersonal=jsonPersonal;