<? 
include "conn.php";
$query = "select * from cms_conteudo where status = 1 and categorias = 17 order by ordem,id";

$myArray = array();
if ($result = $mysqli->query($query)) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );
    }
   	echo json_encode($myArray);
	//print_r($myArray);
}

$result->close();
$mysqli->close();

/*
$teste = array("label"=>"value");
echo json_encode($teste);
*/

?>

