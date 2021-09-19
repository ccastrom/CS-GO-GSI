function player_weapons(JSON,activity){

   
   if(activity=="playing"){
    try {
        var knife= JSON.player.weapons.weapon_0.name;
        var knife_state=JSON.player.weapons.weapon_0.state;
        var arma_1=JSON.player.weapons.weapon_1.name;
        var arma_1_state=JSON.player.weapons.weapon_1.state;
        var arma_2=JSON.player.weapons.weapon_2.name;
        var arma2_state=JSON.player.weapons.weapon_2.state;

        var arma_1_ammo;
        var arma_2_ammo;
    } catch (error) {
      
    }
    if(knife){
        console.log(knife);
        if(knife_state=="active"){
            console.log("★★Arma equipada★★: "+knife);
        }
    }
    if(arma_1){
        if(arma_1_state=="active"){
            console.log("★★Arma equipada★★: "+arma_1);
            arma_1_ammo=JSON.player.weapons.weapon_1.ammo_clip;
            console.log("Munición restante: "+arma_1_ammo);
        }
        console.log("Arma corta: "+arma_1);
    }
    if(arma_2){
        if(arma2_state=="active"){
            console.log("★★Arma equipada★★: "+arma_2);
            arma_2_ammo=JSON.player.weapons.weapon_2.ammo_clip;
        }
        console.log("Rifle: "+arma_2);
    }
  
   }
    
  
  
  
}
module.exports.player_weapons=player_weapons;