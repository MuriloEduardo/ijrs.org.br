<?php 
include "lib/conn.php";
include "lib/siteFunc.php";
if(isset($_GET['secao'])){
	$secao = $_GET['secao'];
}else{
	$secao = "home";
}



function montaSubMenu($cat){
	 global $conn;
	 if($cat == 16){ //cursos
	 	$sql = mysql_query("select * from cursos where status = 1 order by ordem,id");
		 if(mysql_num_rows($sql)){
			while($consulta = mysql_fetch_array($sql)){
				echo '<li><a href="?secao=cursos&cont='.$consulta['id'].'">'.utf8_encode($consulta['nome']).'</a></li>';
			}
		 }
	} else { //conteudo
		 $sql = mysql_query("select * from cms_conteudo where categorias = $cat and status = 1 order by ordem,id");
		 if(mysql_num_rows($sql)){
			while($consulta = mysql_fetch_array($sql)){
				echo '<li><a href="?secao=conteudo&cont='.$consulta['id'].'">'.utf8_encode($consulta['nome']).'</a></li>';
			}
		 }
	 }
}

function mostraArquivo($arquivo,$nome,$th0){
	global $dirPath;
	 if(file_exists($dirPath."upload/".$th0.$arquivo)){ 
		$th = $th0; 
		//return $th.$arquivo;
		return '
		<a href="upload/'.$arquivo.'" title="'.nome.'" class="img">
        <img src="upload/'.$th.$arquivo.'" align="left" style="margin-right:10px;" />
        </a>
		';
	} else { 
		/*
		// PHP 5.3 ++
		$folder = "upload/";
		$fileName = $arquivo;
		$finfo = finfo_open(FILEINFO_MIME_TYPE);
		$mime = finfo_file($finfo, dirname(__FILE__)."/".$folder.$fileName); 
		
		*/	
		//echo mime_content_type('upload/'.$arquivo);
		//if(mime_content_type('upload/'.$arquivo) == 'application/pdf'){ 
		if(1){
			return '
			<a href="includes/_incDownload.php?arquivo='.$arquivo.'">
			<img src="interface/img/iconeDownload.png">
			</a>
			'; 
		} else { 
		return '
			<a href="upload/'.$arquivo.'" title="'.nome.'" class="img">
			<img src="upload/'.$arquivo.'" align="left" style="margin-right:10px;" width="200px" />
			</a>
		';
		} 
		
	}
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>IJRS - Instituto Junguiano do RS</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="interface/css/estilo.css" rel="stylesheet" type="text/css" />
<link href="interface/css/style.css" rel="stylesheet" type="text/css" />
<!--[if lte IE 6]><style type="text/css" media="screen">.tabbed { height:420px; }</style><![endif]-->

<script src="js/jquery-1.4.1.min.js" type="text/javascript"></script>
<script src="js/jquery.jcarousel.pack.js" type="text/javascript"></script>
<script src="js/jquery.slide.js" type="text/javascript"></script>
<script src="js/jquery-func.js" type="text/javascript"></script>


<script type="text/javascript" src="js/jquery.lightbox-0.5.js"></script>
<link rel="stylesheet" type="text/css" href="interface/css/jquery.lightbox-0.5.css" media="screen" />



<script type="text/javascript">
$(document).ready(function () {	
	
	$('#nav li').hover(
		function () {
			//show its submenu
			$('ul', this).slideDown(100);

		}, 
		function () {
			//hide its submenu
			$('ul', this).slideUp(100);			
		}
	);
	
});
</script>

    <!-- Ativando o jQuery lightBox plugin -->
    <script type="text/javascript">
$(function() {
        $('#gallery a.img').lightBox();
		
    });
	
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

$(document).ready(function(){

	$('#contHidden').hide();
	
	$('a#exibir').click(function(){
	
		$('#contHidden').show('slow');
		$('#exibir').hide();
	
	});
	
	$('a#ocultar').click(function(){
	
		$('#contHidden').hide('slow');
		$('#exibir').show();
	})

});

$(function($) {
	// Quando o formulário for enviado, essa função é chamada
	$("#formulario").submit(function() {
		// Colocamos os valores de cada campo em uma váriavel para facilitar a manipulação
		var nome = $("#nome").val();
		var email = $("#email").val();
		var telefone = $("#telefone").val();
		var curso = $("#curso").val();
		var profissao = $("#profissao").val();
		var statusField = $("#statusField").val();
		// Exibe mensagem de carregamento
		$("#status").html("<img src='interface/img/loader.gif' alt='Enviando' />");
		// Fazemos a requisão ajax com o arquivo envia.php e enviamos os valores de cada campo através do método POST
		$.post('includes/_incInscricao.php', {nome: nome, email: email, telefone: telefone, curso: curso, profissao: profissao, statusField: statusField }, function(resposta) {
				// Quando terminada a requisição
				// Exibe a div status
				$("#status").slideDown();
				// Se a resposta é um erro
				if (resposta != false) {
					// Exibe o erro na div
					$("#status").html(resposta);
				} 
				// Se resposta for false, ou seja, não ocorreu nenhum erro
				else {
					// Exibe mensagem de sucesso
					//$("#status").html("Mensagem enviada com sucesso!!"+resposta);
					$("#status").html(resposta);
					// Coloca a mensagem no div de mensagens
					//$("#mensagens").prepend("<strong>"+ nome +"</strong> disse: <em>" + mensagem + "</em><br />");
					// Limpando todos os campos
					$("#nome").val("");
					$("#email").val("");
					$("#telefone").val("");
					$("#curso").val("");
					$("#profissao").val("");
				}
		});
	});
});

    </script>
   	<style type="text/css">
	/* jQuery lightBox plugin - Gallery style */
	#gallery {
		background-color: #444;
		padding: 10px;
		width: 520px;
	}
	#gallery ul { list-style: none; }
	#gallery ul li { display: inline; }
	#gallery ul img {
	}
	#gallery ul a:hover img {
	
		color: #fff;
	}
	#gallery ul a:hover { color: #fff; }
	</style>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-10827625-7']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
<body onLoad="MM_preloadImages('interface/img/rede_fb_over.png','interface/img/rede_wp_over.png','interface/img/rede_fb_Over.png','interface/img/awat_over.png')">
<div id="geral">
	<div id="topo">
		<a href="index.php"><img src="interface/img/logo.jpg" alt="IJRS - Instituto Junguiano do Rio Grande do Sul" /></a>
		
<div class="texto">
			Filiado a AJB - Associa&ccedil;&atilde;o Junguiana
			do Brasil e &aacute; IAAP - International
			Association for Analytical Psychology
		</div>
		
		<div class="latDireita"><a href="?secao=cadastro">Cadastra-se</a> | <a href="?secao=contato">Contato</a><br/><br/><br/>
	<form name="busca" id="busca" method="get" action="http://www.google.com/search" target="_blank">
    <input type="hidden" name="sitesearch" value="www.ijrs.org.br" />
    <input name="as_q" type="text" />
    <button type="submit">BUSCAR</button>

	</form>
		</div>
		
		<ul id="nav">
        
        	  <li style="width:47px;"><a href="#"></a> 
			<ul>
			  <li></li>
			</ul>
			<div class="clear"></div>
		  </li>
        
		  <li style="width:112px;  font-size:16px;"><a href="#">Sobre o IJRS</a> 
			<ul  style="font-size:16px;">
			  <? montaSubMenu(13) ?>
			</ul>
			<div class="clear"></div>
		  </li>
          
		  <li style="width:105px;  font-size:16px;"><a href="#">Atividades</a> 
			<ul style="font-size:16px;">
            <? montaSubMenu(14) ?>
			</ul>
			<div class="clear"></div>
		  </li>
		  <li style="width:97px;  font-size:16px;"><a href="#">Biblioteca</a> 
			<ul>
            <? montaSubMenu(15) ?>
			</ul>
			<div class="clear"></div>
		  </li>
		  <li style="width:87px; font-size:16px;"><a href="#">Cursos</a> 
			<ul>
             <? montaSubMenu(16) ?>
			</ul>
			<div class="clear"></div>
		  </li>
		  <li style="width:80px; font-size:16px;"><a href="?secao=agenda">Agenda</a> 
			<div class="clear"></div>
		  </li>
		  <li style="width:60px; font-size:16px;"><a href="?secao=fotos">Fotos</a> 

			<div class="clear"></div>
		  </li>
		</ul>	
</div>
	<!-- CONTEÚDO -->
<?php include("includes/".$secao.".php");  ?>
	<!-- FIM CONTEUDO -->
    <div id="rodape">
		<div class="conteudo">Fale conosco pelo telefone 51 3019 9789</div>
        <div id="redes" style="margin-left:20px;"><a href="http://www.ijrs.org.br/blog" target="_blank" onMouseOver="MM_swapImage('wp','','interface/img/rede_wp_over.png',1)" onMouseOut="MM_swapImgRestore()"><img src="interface/img/rede_wp.png" alt="Blog - Wordpress" name="wp" width="47" height="35" border="0"></a>
      <a href="https://www.facebook.com/profile.php?id=100001246535281" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('redeFB','','interface/img/rede_fb_over.png',1)" target="_blank"><img src="interface/img/rede_fb.png" alt="Facebook" name="redeFB" width="35" height="35" border="0"></a></div>
      <div id="developer" style="float:right; margin-right:5px;"><br><br>
      <a href="http://www.awat.com.br" target="_blank" onMouseOver="MM_swapImage('awat','','interface/img/awat_over.png',1)" onMouseOut="MM_swapImgRestore()">
      <img src="interface/img/awat.png" alt="Desenvolvimento: AWAT - Projetos Web" title="Desenvolvimento: AWAT - Projetos Web" name="awat" width="35" height="35" border="0">
      </a>
      </div>
</div>
</body>
</html>