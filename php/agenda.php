<?php
include "conn.php";

$sqlConteudo = "select * from cms_conteudo where status = 1 and categorias = 17 order by ordem,id";

$myArray = array();
if ($result = $mysqli->query($sqlConteudo)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            	
			
			$dataAgenda[$row['id']]["id"] = $row['id'];
			$dataAgenda[$row['id']]["open"] = "false";
			$dataAgenda[$row['id']]["like"] = "true";
			if($row['arquivo1']){ $dataAgenda[$row['id']]["img"] = "../upload/th_".$row['arquivo1']; } else { $dataAgenda[$row['id']]["img"] = ""; } 
			$dataAgenda[$row['id']]["data"] = date("d/m/Y",strtotime($row['data']));
			$dataAgenda[$row['id']]["titulo"] = $row['nome'];
			
			$dataAgenda[$row['id']]["resumo"] = substr(utf8_encode($row['texto']),0,100)."...";
			
			$dataAgenda[$row['id']]["texto"] = utf8_encode($row['texto']);
			
			
			$dataAgenda[$row['id']]["likes"] = rand(10,200);;
			$dataAgenda[$row['id']]["views"] = rand(50,500);//"234";
				/*
				$dataAgenda[$row['id']]["comentarios"][$row['id']]["texto"] = "Ahh! Que legal, adorei.";
				$dataAgenda[$row['id']]["comentarios"][$row['id']]["nome"] = "Nome do Usuario Logado";
				$dataAgenda[$row['id']]["comentarios"][$row['id']]["email"] = "exemplo@gmail.com";	
				*/
				
			//$myArray[] = array_map( 'utf8_encode' , $dataAgenda );
			$myArray[] = $dataAgenda[$row['id']];	
			
    }
   	$data['agendas'] = $myArray;
}

$result->close();
$mysqli->close();

echo json_encode($data);
?>