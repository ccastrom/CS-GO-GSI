
function player_weapons(JSON,map,userID){
    var matchid=JSON.player.steamid;
    let vWeapons=[];
    var knife;
    var knife_state;
    var arma_1;
    var arma_1_state;
    var arma_2;
    var arma2_state;
    var arma_1_ammo;
    var arma_2_ammo;
    var arma_actual;
   
   if(map && userID==matchid){
    try {
         knife= JSON.player.weapons.weapon_0.name;
         knife_state=JSON.player.weapons.weapon_0.state;
         arma_1=JSON.player.weapons.weapon_1.name;
         arma_1_state=JSON.player.weapons.weapon_1.state;
         arma_2=JSON.player.weapons.weapon_2.name;
         arma2_state=JSON.player.weapons.weapon_2.state;
       

        
    } catch (error) {
      
    }
    if(knife){
        //console.log(knife);
        if(knife_state=="active"){
            //console.log("★★Arma equipada★★: "+knife);
            arma_actual=knife;
            vWeapons.push(arma_actual,"",knife_state);
        
        }
    }
    if(arma_1){
        if(arma_1_state=="active"){
            //console.log("★★Arma equipada★★: "+arma_1);
            arma_1_ammo=JSON.player.weapons.weapon_1.ammo_clip;
            //console.log("Munición restante: "+arma_1_ammo);
            arma_actual=arma_1;
            vWeapons.push(arma_actual,arma_1_ammo,arma_1_state);
        }
        //console.log("Arma corta: "+arma_1);
    }
    if(arma_2){
        if(arma2_state=="active"){
            //console.log("★★Arma equipada★★: "+arma_2);
            arma_2_ammo=JSON.player.weapons.weapon_2.ammo_clip;
            //console.log("Munición restante: "+arma_2_ammo);

            arma_actual=arma_2;
            vWeapons.push(arma_actual,arma_2_ammo,arma2_state);
        }
        //console.log("Rifle: "+arma_2);
    }
    //vWeapons.push(knife,arma_1,arma_2);
   
    return vWeapons;
    
  
   }else{
     vWeapons.push("","","","","","","");
     return vWeapons;

   }
}


module.exports.player_weapons=player_weapons;