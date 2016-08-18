<?php 
include "conn.php";


//Analistas - juntos 25
//$query ="select * from cms_conteudo where status = 1 and conteudo = 25 order by ordem,id";

//Diretoria - juntos 26
//$query ="select * from cms_arquivos where status = 1 and conteudo = 26 order by ordem,id";

//departamento 118

// informacoes 39

// Psicologia Analítica 37
$sql ="select * from cms_conteudo where id = 37";
$myArray = array();
if ($result = $mysqli->query($sql)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
			 $myArray[] = array_map( 'utf8_encode' , $row );			
    }
	$data['analitica'] = $myArray;
}

// Proposta 24
$sql ="select * from cms_conteudo where id = 24";
$myArray = array();
if ($result = $mysqli->query($sql)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
			 $myArray[] = array_map( 'utf8_encode' , $row );			
    }
	$data['proposta'] = $myArray;
}


//Histórico 23
$sql ="select * from cms_conteudo where id = 23";
$myArray = array();
if ($result = $mysqli->query($sql)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
		$myArray[] = array_map( 'utf8_encode' , $row );	
		//$data['historico'][0]['nome'] = utf8_encode($rom['nome']);	
		//$data['historico'][0]['texto'] = utf8_encode(strip_tags($rom['texto']));	
    }
	$data['historico'] = $myArray;
}


	
//Analistas
$sql ="select p.nome, p.arquivo1 as  img, p.texto as sobre, concat(p.endereco,p.cidade,p.estado) as endereco, p.fone, p.email 
	from profissionais p
	where tipoProf = 1 and status = 1 order by nome";
$myArray = array();
if ($result = $mysqli->query($sql)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
			 $myArray[] = array_map( 'utf8_encode' , $row );			
    }
	$data['analistas'] = $myArray;
}

//Profissionais
$sql ="select p.nome, p.arquivo1 as  img, p.texto as sobre, concat(p.endereco,p.cidade,p.estado) as endereco, p.fone, p.email
  from profissionais p
  where (tipoProf = 0 || tipoProf = 1) and status = 1 order by nome";
$myArray = array();
if ($result = $mysqli->query($sql)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
			 $myArray[] = array_map( 'utf8_encode' , $row );			
    }
	$data['profissionais'] = $myArray;
				
}

//Departamentos
$sql ="select *
  from departamentos
  where tipoDep = 0
  order by ordem
  ";
$myArray = array();
if ($result = $mysqli->query($sql)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
			 $myArray[] = array_map( 'utf8_encode' , $row );			
    }
	$data['departamentos'] = $myArray;
				
}


$sql ="
select 
profissionais, 
p.nome, p.arquivo1 as  img, p.texto as sobre, concat(p.endereco,p.cidade,p.estado) as endereco, p.fone, p.email,
(select nome from departamentos d where d.id = r.departamentos) as cargo
from prof_dep r
INNER JOIN profissionais p ON p.id = r.profissionais
WHERE r.tipoDir = 1
order by ordem
";
$myArray = array();
if ($result = $mysqli->query($sql)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
		$myArray[] = array_map( 'utf8_encode' , $row );
    }
	$data['diretores'] = $myArray;
}

$sql ="
select 
p.nome,
(select nome from departamentos d where d.id = r.departamentos) as cargo,
r.departamentos as dep
from prof_dep r
INNER JOIN profissionais p ON p.id = r.profissionais
WHERE r.tipoDir = 0
order by ordem, nome
";
$myArray = array();
if ($result = $mysqli->query($sql)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
		$myArray[] = array_map( 'utf8_encode' , $row );
		if($deps_nomes[$row['dep']]) { 
			$deps_nomes[$row['dep']]['nome'] .= ", ".$row['nome'];
		} else {
			$deps_nomes[$row['dep']]['nome'] = $row['nome'];
		}
		$deps[] = array('cargo'=>utf8_encode($row['cargo']),'nome'=>utf8_encode($deps_nomes[$row['dep']]['nome']) );
		
    }
	$data['diretores_outros'] = $deps;
}

//print_r($data['proposta']);

$result->close();
$mysqli->close();

echo json_encode($data);
?>