function map(JSON,gamestatus){
    let vMap=[];

    if(gamestatus[0]=="playing"){
        var mapmode;
        var mapname;
        var phase;
        var round;
        var teamctScore;
        var ctconsecutiveroundlosses;
        var teamTScore;
        var tconsecutiveroundlosses;
         mapmode=JSON.map.mode;//0
         mapname=JSON.map.name;//1
         phase=JSON.map.phase;//2
         round=JSON.map.round;//3
        console.log("Nombre de mapa: "+mapname);
        console.log(mapmode);
        console.log(phase);
        console.log("Ronda actual: "+round);


         teamctScore=JSON.map.team_ct.score;//4
         ctconsecutiveroundlosses=JSON.map.team_ct.consecutive_round_losses;//5
        console.log("Puntuación CT: "+teamctScore);
        console.log("Rondas perdidas consecutivas CT: "+ctconsecutiveroundlosses);
    
    
    
         teamTScore=JSON.map.team_t.score;//6
         tconsecutiveroundlosses=JSON.map.team_t.consecutive_round_losses;//7
        console.log("Puntuacion T: "+teamTScore);
        console.log("Rondas perdidas consecutivas T: "+tconsecutiveroundlosses);
        vMap.push(mapmode,mapname,phase,round,teamctScore,ctconsecutiveroundlosses,teamTScore,tconsecutiveroundlosses)
        return vMap;
      
    }else{
       
        
        vMap.push("","","","","","","","");
        return vMap;
        

    }
   

}

    


module.exports.map=map;