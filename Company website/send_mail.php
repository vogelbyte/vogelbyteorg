<?php
    $mailto = 'srivastava.lalit786@gmail.com';
	$mailcc = 'dheerajsharma7477@gmail.com';
    $name = $_POST['name'];
	$email = $_POST['email'];
	$mailSub = $_POST['subject'];
	$Mobile = $_POST['mobile'];
	$mailMsg =  $_POST['message'];
	$msgtable ="<table width=\"400px\" cellspacing=\"0\" cellpadding=\"0\" border=\"1px\" align=\"center\">\r\n 
				  <tr >\r\n
				    <th colspan =\"2\">user data</th>\r\n 
				    \r\n
				  </tr>\r\n 
				  <tr>\r\n
				    <td><b>Name</b></td><td>{$name}</td>   \r\n 
				  </tr>\r\n
				  <tr>\r\n
				    <td><b>Email</b></td><td>{$email}</td>\r\n 
				  </tr>\r\n
				  <tr>\r\n
				    <td><b>Mobile</b></td><td>{$Mobile}</td>\r\n 
				   </tr>\r\n
				   <tr>\r\n
				    <td><b>Subject</b></td><td>{$mailSub}</td>\r\n
				   </tr>\r\n
				   <tr>\r\n
				    <td><b>Message</b></td><td>{$mailMsg}</td>\r\n 
				   </tr>\r\n
				</table>";
   require 'PHPMailer-master/PHPMailerAutoload.php';
   $mail = new PHPMailer();
   $mail ->IsSmtp();
   $mail ->SMTPDebug = 0;
   $mail ->SMTPAuth = true;
   $mail ->SMTPSecure = 'ssl';
   $mail ->Host = "smtp.gmail.com";
   $mail ->Port = 465; // or 587
   $mail ->IsHTML(true);
   $mail ->Username = "boyrajput101@gmail.com";
   $mail ->Password = "rohit@1gmail";
   $mail ->SetFrom("boyrajput101@gmail.com");
   $mail ->Subject = $mailSub;
   $mail ->Body = $msgtable;
   $mail ->AddAddress($mailto);
   $mail ->AddAddress($mailcc);
   if(!$mail->Send())
   {
      var_dump(headers_list());
   }
   else
   {
   }

?>



   

