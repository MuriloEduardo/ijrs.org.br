<?php
include "conn.php";

$sqlConteudo = "select id,nome as titulo, arquivo1 as imgUrl, texto as text from cms_conteudo where categorias = 18 order by ordem,id";

$myArray = array();
$myFotos = array();

if ($result = $mysqli->query($sqlConteudo)) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
        $myArray[] = array_map( 'utf8_encode' , $row );
		if ($result_f = $mysqli->query("select id,conteudo as album, arquivo1 as imgUrl from cms_arquivos where conteudo = ".$row['id']." order by ordem,id")) {
			
			while($row_f = $result_f->fetch_array(MYSQL_ASSOC)) {
				$myFotos[] = array_map( 'utf8_encode' , $row_f );
			}
			$data['fotos'] = $myFotos;
		}
    }
   	$data['albuns'] = $myArray;
}

$result->close();
$mysqli->close();

echo json_encode($data);
?>