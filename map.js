function map(JSON,gamestatus){

    if(gamestatus=="playing"){
        var mapname=JSON.map.mode;
        var phase=JSON.map.phase;
        var round=JSON.map.round;
        
        console.log(mapname);
        console.log(phase);
        console.log("Ronda actual: "+round);
        ctScore(JSON);
        tScore(JSON);
      
    }else{

    }
   

}
function ctScore(JSON){
    var teamctScore=JSON.map.team_ct.score;
    var ctconsecutiveroundlosses=JSON.map.team_ct.consecutive_round_losses;
    console.log("Puntuación CT: "+teamctScore);
    console.log("Rondas perdidas consecutivas CT: "+ctconsecutiveroundlosses);
};

function tScore(JSON){
    var teamTScore=JSON.map.team_t.score;
    var tconsecutiveroundlosses=JSON.map.team_t.consecutive_round_losses;
    console.log("Puntuacion T: "+teamTScore);
    console.log("Rondas perdidas consecutivas T: "+tconsecutiveroundlosses);
}

module.exports.map=map;