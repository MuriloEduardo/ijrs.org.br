<?
$sqlConteudo = mysql_query("select * from cms_conteudo where categorias = 19");

?>
       

<div id="topoConteudo"></div>
<div id="conteudo">

    <div class="conteudoCentro">
    
        <div class="conteudoLeft">
        <? 
        mysql_data_seek($sqlConteudo,0);
        while($conteudo = mysql_fetch_array($sqlConteudo)){
        ?>	
            <h1><? echo utf8_encode($conteudo[nome])?></h1><br/>
                <? echo utf8_encode($conteudo[texto])?>	
        <? } ?>
        </div>
        
        <div class="conteudoDir">
            <?
if($_POST['SeuEmail'] && $_POST['ip']){
$to_email = $_POST['to_email'];
$from_email = $_POST['SeuEmail'];
$from_nome = $_POST['SeuNome'];
$mensagem = $_POST['Mensagem'];

/* Destinatário */
$to = 'instituto@ijrs.org.br';

/* Assunto */
$subject = "Formulário do Site IJRS";

/* Mensagem */
$message = "Nome: $from_nome \r\n";
$message .= "Email: $from_email \r\n";
$message .= "IP: ".$_SERVER['REMOTE_ADDR']." \r\n";
$message .= "\r\n Mensagem: \r\n";
$message .= $mensagem."\r\n";;


//$headers = 'From: '." $from_nome ".' <'." $from_email ".'>';


	$headers = "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/plain; charset=iso-8859-1\n";
	$headers .= "From: Site IJRS <site@ijrs.org.br>\n";
	$headers .= "Return-Path: site@ijrs.org.br\r\n"; // return-path
	

/* Enviando a mensagem */
mail($to, $subject, $message, $headers,"-r" . "site@ijrs.org.br");

print 'Mensagem Enviada com sucesso!<br><br>Em breve entraremos em contato.<br><br>Obrigado!';
}
?>

        	Utilize o formul&aacute;rio para nos enviar uma mensagem!
              <form action="" method="post">
            <br>
            Nome:<br />
            <input name="SeuNome" type="text" id="SeuNome" size="40" maxlength="100">
            <br />E-mail:<br />
            <input name="SeuEmail" type="text" id="SeuEmail" size="40" maxlength="100">
            <br />
            Mensagem:<br />
            <textarea name="Mensagem" cols="40" rows="5" id="Mensagem"></textarea>
            <br />
            <br />
            <input name="ip" type="hidden" id="ip" value="<? echo $_SERVER['REMOTE_ADDR'];?>"><br />
            <input type="submit" name="enviar" value="Enviar"></td>
          </FORM>
      </div>
    
    </div>
    
</div>
<div id="conteudoRod">
	<div class="conteudoRodEsq">
		<p></p>
	</div>		
	<div class="conteudoRodCentro">
		<div class="infoRodape"> <p><? echo $secao?> </p></div>
	</div>
	<div class="conteudoRodDir">
	</div>
</div>