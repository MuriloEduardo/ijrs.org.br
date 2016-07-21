<?php
include "conn.php";

$data = json_decode(file_get_contents("php://input"));
$nome = $data->nome;
$email = $data->email;

$query = "INSERT INTO usuarios (nome, email) VALUES ('{$nome}', '{$email}')";

if($email){
	$result = mysqli_query($mysqli, $query);
	if($result){
		echo 1;
	}else{
		echo 0;
	}
	mysqli_close($mysqli);
}
?>