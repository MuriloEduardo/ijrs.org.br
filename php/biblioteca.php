<? 
include "conn.php";
//mysql_set_charset('utf8');

//cat bibliteca 15


//Monografias Completas - cont 108
$sqlConteudo = "select nome as titulo, legenda as subTitulo, arquivo1 as link, texto as resumo  from cms_arquivos where conteudo = 108 and status = 1";
$myArray = array();
if ($result = $mysqli->query($sqlConteudo)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );			
    }
   	$data['monografias'] = $myArray;
}


//Entrevistas - cont 139
$sqlConteudo = "select nome as titulo, legenda as subTitulo, arquivo1 as link1, texto as resumo  from cms_arquivos where conteudo = 139 and status = 1";
$myArray = array();
if ($result = $mysqli->query($sqlConteudo)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );			
    }
   	$data['entrevistas'] = $myArray;
}



//Resumos das Monografias - cont 41
$sqlConteudo = "select nome as titulo, arquivo1 as link, texto as resumo  from cms_conteudo where id = 41 and status = 1";
$myArray = array();
if ($result = $mysqli->query($sqlConteudo)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );			
    }
   	$data['resumos'] = $myArray;
}


//Artigos - 36
$sqlConteudo = "select nome as titulo, legenda as subTitulo, arquivo1 as link, texto as resumo  from cms_arquivos where conteudo = 36 and status = 1";
$myArray = array();
if ($result = $mysqli->query($sqlConteudo)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );			
    }
   	$data['artigos'] = $myArray;
}



//Acervo Malvina McNeill - 35
$sqlConteudo = "select nome as titulo, arquivo1 as link, texto as resumo  from cms_conteudo where id = 35 and status = 1";
$myArray = array();
if ($result = $mysqli->query($sqlConteudo)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
           	//$myArray[] = $row ;		
			$myArray[] = array_map( 'utf8_encode' , $row );
			//$myArray[] = array_map( 'htmlentities' , $row );	
			//$myArray[] = array_map( 'htmlentities' , $row );	
			//$myArray[] = array_map( 'htmlspecialchars' , $row );	
			//$myArray[] =  htmlspecialchars( $row , 0, "iso-8859-1"); 		
    }
   	$data['acervo'] = $myArray;
}

//print_r($data['resumos']);

$result->close();
$mysqli->close();

echo json_encode($data);
//echo json_encode($data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
