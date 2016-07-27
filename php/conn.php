<?php
header("Content-Type: text/html; charset=UTF-8",true);
$base = "ijrs12";

if($_SERVER['SERVER_PORT'] == 8888){
	
} else {
	$host = "mysql03.ijrs.org.br";
	$user = "ijrs12";
	$senha = "my6210ij12";
}

$host = "localhost";
$user = "root";
$senha = "";
$mysqli = new mysqli($host, $user, $senha, $base);
?>
