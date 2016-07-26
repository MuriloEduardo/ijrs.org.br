<? 
include "conn.php";


	
//Profissionais
$sqlConteudo ="select * from cms_arquivos where status = 1 and conteudo = 38 order by ordem,id limit 1";
$myArray = array();
if ($result = $mysqli->query($sqlConteudo)) {
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
			$myArray[] = array_map( 'utf8_encode' , $row );
			//$data['profissionais'][$row['id']] = $row;
			
			$data[$row['id']]["nome"] = utf8_encode($row['nome']);
			$data[$row['id']]["sobre"] = utf8_encode($row['texto']);
			
			$myArray[] = $data[$row['id']];	
    }
   	/*
	nome: "Adriana S.Ferreira",
	sobre: "Psicologa, analista Junguiana pela AJB, Mestre em Artes Visuais pela UNICAMP-SP, doutoranda em Multimeios( SONHOS E CINEMA) pela UNICAMP- SP. Estudiosa da vida do CORPO em Jung e  com Stanley Keleman(Anatomia Emocional e outros...) em Berkley-CA-USA.Clinica em São Paulo, e realiza seu trabalho SONHOS E O CORPO em vários lugares do Brasil, ampliando as conexões PSIQUE-CORPO-TOTALIDADE.",
	endereco: "Rua Paulistania, 591. VILA MADALENA - SP",
	fone: "011-971402943 011-28254405",
	email: "adriambar@uol.com.br"
	*/
	$data['profissionais'] = $myArray;
	
	//
	
	//$dataAgenda[$row['id']]["texto"] = utf8_encode($row['texto']);
			
			
}

//print_r($data);

$result->close();
$mysqli->close();

echo json_encode($data);