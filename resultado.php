<?php
if(isset($_GET['btnEnviar'])){
    session_start();
    $id=$_GET['idUser'];
    $key='5DC20E24D2E76A091F52A43BCCBFA67A';
    $url='http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='.$key.'&steamids='.$id.'';

    $json=file_get_contents($url);
    $datos=json_decode($json,true);

    $nombre= $datos["response"]["players"][0]["personaname"];

    $_SESSION["nombre"]=$nombre;

   
    
    header("Location: index.php");


   
}



?>