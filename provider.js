function provider(JSON){
    var steamID=JSON.provider.steamid;
    console.log("User ID"+steamID);
}
   
module.exports.provider=provider;