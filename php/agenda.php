<? 
include "conn.php";

$sqlConteudo = "select * from cms_conteudo where status = 1 and categorias = 17 order by ordem,id";

$myArray = array();
if ($result = $mysqli->query($sqlConteudo)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            	
			
			$dataAgenda[$row['id']]["id"] = $row['id'];
			$dataAgenda[$row['id']]["open"] = "false";
			$dataAgenda[$row['id']]["like"] = "true";
			if($row['arquivo1']){ $dataAgenda[$row['id']]["img"] = "../upload/th_".$row['arquivo1']; } else { $dataAgenda[$row['id']]["img"] = ""; } 
			$dataAgenda[$row['id']]["data"] = "05/07/2016";
			$dataAgenda[$row['id']]["titulo"] = $row['nome'];
			
			$dataAgenda[$row['id']]["resumo"] = 
			substr(
					strip_tags(
								nl2br(
									utf8_encode($row['texto'])
									)
								),0,100
					)."...";
			
			$dataAgenda[$row['id']]["texto"] = strip_tags(utf8_encode($row['texto']));
			
			
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

//print_r($dataAgenda);

$result->close();
$mysqli->close();


/*
$dataAgenda = array();
$dataAgenda["id"] = "1";
$dataAgenda["open"] = "false";
$dataAgenda["like"] = "true";
$dataAgenda["img"] = "img/blog/b02.jpg";
$dataAgenda["data"] = "05/07/2016";
$dataAgenda["titulo"] = "Tempor vestibulum turpis id ligula mi mattis.";
$dataAgenda["resumo"] = "Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus";
$dataAgenda["texto"] = "Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus";
$dataAgenda["likes"] = "10";
$dataAgenda["views"] = "234";
$dataAgenda["comentarios"] = array();
$dataAgenda["comentarios"][0]["texto"] = "Ahh! Que legal, adorei.";
$dataAgenda["comentarios"][0]["nome"] = "Nome do Usuario Logado";
$dataAgenda["comentarios"][0]["email"] = "exemplo@gmail.com";	


*/
//$data['agendas'][] = $dataAgenda;
//echo $agendas;

echo json_encode($data);
