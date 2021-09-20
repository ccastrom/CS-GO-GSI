<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="resultado.php" method="get">
        <labe>set an ID</labe>
        <input type="text" name="idUser" id="idUser">
        <br>
        <input type="submit" name="btnEnviar" value="enviar">
       
    </form>
    <h4 id="arma"></h4>
    <?php
        session_start();
            if(isset($_SESSION["nombre"])){
             $nombre=$_SESSION["nombre"];
             echo $nombre;
            }else{
               echo "not ok";
            }

        ?>
</body>
<script src="player_weapons.js"></script>
</html>