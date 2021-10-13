function round(JSON,map){
     var vRound=[];
     var ganador_disputa;
     var bomba_no_plantada;
    if(map){
        var pphase;
        var win_team;
        var bomb;
         phase=JSON.round.phase;
         win_team=JSON.round.win_team;
         bomb=JSON.round.bomb;
        if(!bomb){
            //console.log("Bomba no plantada");
            bomba_no_plantada="No plantada"; 
            vRound.push(bomba_no_plantada);
          
        }else{
            //console.log("Estado de la bomba: "+bomb); 
            vRound.push(bomb);//0
        }
        if(!win_team){
            ganador_disputa="En disputa";
            //console.log("Ganador en disputa");
            vRound.push(ganador_disputa);
            
        }else{
            //console.log("Equipo ganador: "+win_team);
            vRound.push(win_team);//1
        }
       
       // console.log("Fase actual: "+phase);
        vRound.push(phase);//2
        return vRound;
      
      
    }else{
       
        bomb="";
        win_team="";
        phase="";
        vRound.push(bomb,win_team,phase);
        return vRound;
        

    }
   
}
module.exports.round=round;