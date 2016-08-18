<?php 
include "conn.php";
//utlimas atualizacoe
//$sqlLastCursos = "select * from cursos where status =  1 and mostraHome = 1 order by ordem asc,id desc limit 4";

//SLIDER -> AGENDA
$sqlLastATT = "select * from cms_conteudo where status =  1 and mostraHome = 1 order by ordem asc,id desc limit 4";
$myArray = array();
if ($result = $mysqli->query($sqlLastATT)) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );
    }
   	$data['sliders'] = $myArray;
}

//DESTAQUE - FRASE

$sqlDestaques = "select nome as titulo, texto
 from cms_conteudo where status = 1 and funcionalidades = 33 order by ordem asc ,id desc limit 4";
$myArray = array();
if ($result = $mysqli->query($sqlDestaques)) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );
    }
   	$data['dests'] = $myArray;
}



//DESTAQUES SOBRE

$sql = "
	select arquivo1 from cms_conteudo 
	where id in (25,37,38)";

$myArray = array();
if ($result = $mysqli->query($sql)) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );
    }
   	$data['sobres'] = $myArray;
}



//SAIBA / FOTOS
$sqlLastATT = "
	select id, nome as titulo, texto as resumo, arquivo1 as url
 	from cms_conteudo 
	where status =  1 and categorias = 18
	order by id desc
	limit 3
	";
$myArray = array();
if ($result = $mysqli->query($sqlLastATT)) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );
			//$myArray[] = array_map( 'strip_tags' , $row );
    }
   	$data['fotos'] = $myArray;
}


$result->close();
$mysqli->close();

//print_r($data['fotos']);

echo json_encode($data);
?>