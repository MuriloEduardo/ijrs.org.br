<? 
include "conn.php";

$data = json_decode(file_get_contents("php://input")); 
if($_REQUEST){ $data = (object) $_REQUEST;	}

switch ($data->tipo) {
    
	// ####### CADASTRO #######
	case 'cadastro':
        
		$sql= 'insert into mailing (status,nome,email) values (1,"'.$data->nome.'", "'.$data->email.'");';
	
		if (mysqli_query($mysqli, $sql)) {
			echo "success";
		} else {
			echo "Erro: " . $sql . "<br>" . mysqli_error($mysqli);
		}
		
        break;
		
    // ####### CONTATO #######
	case 'contato':
        
		$name = $data->nome;
		$email_address = $data->email;
		$message = $data->mensagem;
		$phone = $data->telefone;
			
		// Create the email and send the message
		$to = 'lucianoluconi@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
		$email_subject = "Contato do Site IJRS:  $name";
		$email_body = "Segue mensagem.\n\n"."Nome: $name\n\nEmail: $email_address\n\nFone: $phone\n\nMensagem:\n$message";
		$headers = "From: site@ijrs.org.br\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
		$headers .= "Reply-To: $email_address";	
		mail($to,$email_subject,$email_body,$headers,"-r" . "site@ijrs.org.br");
		return true;	


        break;
		
}