<? 
include "conn.php";
//utlimas atualizacoe
$sqlLastATT = "select * from cms_conteudo where status =  1 and mostraHome = 1 order by ordem asc,id desc limit 4";
$sqlLastCursos = "select * from cursos where status =  1 and mostraHome = 1 order by ordem asc,id desc limit 4";

//links em destaque
$sqlDestaques = "select * from cms_conteudo where status = 1 and destaque = 1 order by ordem asc ,id desc limit 4";

$myArray = array();
if ($result = $mysqli->query($sqlLastATT)) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );
    }
   	$data['sliders'] = $myArray;
}

$myArray = array();
if ($result = $mysqli->query($sqlDestaques)) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map( 'utf8_encode' , $row );
    }
   	$data['dests'] = $myArray;
}

$result->close();
$mysqli->close();

echo json_encode($data);