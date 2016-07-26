<? 
include "conn.php";

$query ="select * from cms_arquivos where status = 1 and conteudo = 38 order by ordem,id";

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


