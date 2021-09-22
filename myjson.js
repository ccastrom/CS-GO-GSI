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
            "Arma1":vWeapons[2],
            "Arma2":vWeapons[3],
            "Arma3":vWeapons[4]
            

        }

    }
  
    console.log(cadenaJSON);
    return cadenaJSON;
}
module.exports.jsonPersonal=jsonPersonal;