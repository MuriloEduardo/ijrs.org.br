<?php
// Check for empty fields
if(empty($_REQUEST['name'])  		||
   empty($_REQUEST['email']) 		||
   !filter_var($_REQUEST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_REQUEST['name'];
$email_address = $_REQUEST['email'];
$message = $_REQUEST['message'];
	
// Create the email and send the message
$to = 'lucianoluconi@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Eamil do Site IJRS:  $name";
$email_body = "Segue mensagem.\n\n"."Nome: $name\n\nEmail: $email_address\n\nFone: $phone\n\nMensagem:\n$message";
$headers = "From: site@ijrs.org.br\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers,"-r" . "site@ijrs.org.br");
return true;			
?>