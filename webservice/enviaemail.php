<?php
    error_reporting(0);

    header('Access-Control-Allow-Origin: *');  //I have also tried the * wildcard and get the same response
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
    header('Content-type: application/json');


    require("class.phpmailer.php");
    require("class.smtp.php");

    $dados = json_decode(file_get_contents("php://input"));

    $retorno = array();
    array_push($retorno, array("header"=>"Enviado em ".date("d-m-Y h:i:s")));

    $html = "<h1>Enviado pelo site www.orion-industrial.com.br</h1>";
    foreach($dados as $chave => $valor):
        $html .= "<p>$chave : $valor</p>";
    endforeach;

    $To = "leonardomm@gmail.com";
    $Subject = "Enviado pelo website www.orion-industrial.com.br";


    $Host = 'mail.orion-industrial.com.br';
    $Username = "site@orion-industrial.com.br";
    $Password = "Orion@2016";
    $Port = "25";

    $mail = new PHPMailer();
    $body = $html;
    $mail->IsSMTP(); // telling the class to use SMTP
    $mail->Host = $Host; // SMTP server
    //$mail->SMTPDebug = false;
    $mail->do_debug = 0;
    $mail->SMTPDebug = false; // enables SMTP debug information (for testing)
    // 1 = errors and messages
    // 2 = messages only
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->Port = $Port; // set the SMTP port for the service server
    $mail->Username = $Username; // account username
    $mail->Password = $Password; // account password

    $mail->SetFrom("site@orion-industrial.com.br", "WebSite Orion Industrial");
    $mail->Subject = $Subject;
    $mail->MsgHTML($body);
    $mail->AddAddress($To, "");

    if(!$mail->Send()) {
        array_push($retorno, "Houve um erro ao enviar a mensagem: ".$mail->ErrorInfo);
    } else {
        array_push($retorno, "Mensagem enviada com sucesso!");
    }

   echo json_encode($retorno);





