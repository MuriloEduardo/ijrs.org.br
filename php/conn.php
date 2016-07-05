<?php

$base = "ijrs12";
$titulo= "IJRS";
$conn = mysql_connect("mysql03.ijrs.org.br","ijrs12","my6210ij12");
//$conn = mysql_connect("localhost","root","root");
mysql_select_db($base,$conn) or print(mysql_error());

//Exemplo selecionar("usuarios",$where=array("cms_dominios"=>4),$limit="0,2");

function selecionar($tabela,$where=null,$limit=null){

	$tabela = "cms_".$tabela;
	$sqlWhere = "";

	if(!empty($where)){
		$sqlWhere = "WHERE 1=1";

		foreach ($where as $campo => $condicao) {
			$sqlWhere .= " AND ".$campo.$condicao;
		}

	}

	$sqlLimit = "";
	if(!empty($limit)){
		$sqlLimit = " LIMIT ".$limit;
	}

	$sql = "SELECT * FROM ".$tabela." ".$sqlWhere." ".$sqlLimit;

	echo $sql;

	$result = mysql_query($sql);

	return @mysql_fetch_array($result);
}

$sql = selecionar("usuarios",$where=array("cms_dominios"=>"=4"),$limit="0,2");
var_dump($sql);

?>
