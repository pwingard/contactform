<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/*print_r($_POST);
 * Array
(
    [name] => 111
    [email] => 222
    [msg] => 333
)
*/
//require_once '/home/pwingard/hidden/hidden.php';//gets my email address as $email;

$email="startitup@mailinator.com";

$to      = $email;
$subject = 'Contact';
$message = "From ".$_POST["name"]." at email ". $_POST["email"].". Begin message:".$_POST["msg"];
$headers = 'From: '.$email . "\r\n" .
    'Reply-To: '.$email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $message, $headers)){
    echo json_encode("Message sent! Go to mailinator.com and type in 'startitup@mailinator.com' to view your message");
}
else {
    echo json_encode("Message not sent. Please try again later.");
}


