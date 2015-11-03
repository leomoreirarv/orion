<?php
    header('Access-Control-Allow-Origin: *');  //I have also tried the * wildcard and get the same response
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
    header('Content-type: application/json');

    require("Files.php");
    try {
        $dados = file_get_contents("php://input");
        $request = json_decode($dados);
        $dir = $request->dir;
        $regex = $request->regex;

        $files = new Files($dir, $regex);

        echo json_encode($files->montaVetor());
    } catch(Exception $e){
        $erro = array(
            "mensagem"=>$e->getMessage(),
            "diretorio"=>$dir,
            "regex"=>$regex);
        echo json_encode($erro);
    }