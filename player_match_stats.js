


function player_match_stats(JSON,map,idPlayer){
    var kills;
    var assists;
    var deaths;
    var mvps;
    var score;
   
    var vPlayer_match_stats=[];

    var matchid=JSON.player.steamid;

    if(map && matchid==idPlayer){
        kills=JSON.player.match_stats.kills;
        assists=JSON.player.match_stats.assists;
        deaths=JSON.player.match_stats.deaths;
        mvps=JSON.player.match_stats.mvps;
        score=JSON.player.match_stats.score;
        vPlayer_match_stats.push(kills,assists,deaths,mvps,score);
        return vPlayer_match_stats;

    }else {
        vPlayer_match_stats.push("","","","","");
        return vPlayer_match_stats;
    }
    

}
module.exports.player_match_stats=player_match_stats;