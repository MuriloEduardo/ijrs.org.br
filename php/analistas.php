<?php 
include "conn.php";

//profissionais - um a um 38
$query ="select * from cms_arquivos where status = 1 and conteudo = 38 order by ordem,id";

//Analistas - juntos 25
$query ="select * from cms_conteudo where status = 1 and conteudo = 25 order by ordem,id";

//Diretoria - juntos 26
$query ="select * from cms_arquivos where status = 1 and conteudo = 26 order by ordem,id";

//departamento 118

// informacoes 39

// Psicologia Analítica 37

// Proposta 24

//Histórico 23


$myArray = array();
if ($result = $mysqli->query($query)) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'htmlentities' , $row );
    }
   	echo json_encode($myArray);
	//print_r($myArray);
}

$result->close();
$mysqli->close();


?>