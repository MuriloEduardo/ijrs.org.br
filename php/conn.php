<?php
header("Content-Type: text/html; charset=UTF-8",true);

define('MYSQL_BOTH',MYSQLI_BOTH);
define('MYSQL_NUM',MYSQLI_NUM);
define('MYSQL_ASSOC',MYSQLI_ASSOC);

$base = "ijrs12";
$host = "localhost";
$user = "root";
$senha = "";

$mysqli = new mysqli($host, $user, $senha, $base);
?>
