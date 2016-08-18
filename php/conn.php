<?php
header("Content-Type: text/html; charset=UTF-8",true);
$base = "ijrs12";

if($_SERVER['SERVER_PORT'] == 8888){
	$host = "localhost";
	$user = "root";
	$senha = "root";
} else {
	$host = "mysql03.ijrs.org.br";
	$user = "ijrs12";
	$senha = "d2n4s0k4b6";
}


$mysqli = new mysqli($host, $user, $senha, $base);
?>
