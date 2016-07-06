<? 
include "conn.php";

$sqlConteudo = "select id,nome as titulo, arquivo1 as imgUrl, texto as text from cms_conteudo where categorias = 18 order by ordem,id";

/*
"id":1,
    		"titulo": "XV Jornada Regional do IJRS",
    		"imgUrl": "img/portfolio/01.jpg",
    		"text":
*/
	

$myArray = array();
$myFotos = array();

if ($result = $mysqli->query($sqlConteudo)) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
		
				$fotos['id'] = $row['id'];
				$fotos['titulo'] = $row['titulo'];
				if($row['imgUrl']){ $fotos['imgUrl'] = "../upload/".$row['imgUrl']; } else { $fotos['imgUrl'] = "";}
				$fotos['text'] = $row['titulo'];
				/*
				$fotos['text'] = substr(
					strip_tags(
								nl2br(
									$row['text']
									)
								),0,100
					)."...";
					*/
            
				//$myArray[] = array_map( 'utf8_encode' , $row );
				
			
			
				/*FOTOS*/
				if ($result_f = $mysqli->query("select id,conteudo as album, arquivo1 as imgUrl from cms_arquivos where conteudo = ".$row['id']." order by ordem,id")) {
					while($row_f = $result_f->fetch_array(MYSQL_ASSOC)) {
							//$myFotos[] = array_map( 'utf8_encode' , $row_f );
							$data['album']['id'] = $row_f['id'];
							$data['album']['album'] = $row_f['album'];
							$data['album']['titulo'] = 'teste';
							if($row_f['imgUrl']){ $data['album']['imgUrl'] = "../upload/".$row_f['imgUrl']; } else { $data['album']['imgUrl'] = "";}
							if(!$fotos['imgUrl']){ $fotos['imgUrl'] = $data['album']['imgUrl']; }
							//$myFotos[] = array_map( 'utf8_encode' , $row_f );
							$myFotos[] = $data['album'];
					}
					$data['fotos'] = $myFotos;
					$myArray[] = array_map( 'utf8_encode' , $fotos );
					
					//print_r($myFotos);
					//echo "***<br><br><br>********\r\n";
				}
				/*FOTOS*/
			
			
    }
	
	
   	$data['albuns'] = $myArray;
}



$result->close();
$mysqli->close();

echo json_encode($data);