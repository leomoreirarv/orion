<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');
    require("FIles.php");
    try {
        $dir = $_REQUEST["dir"];
        $regex = $_REQUEST["regex"];
        //$files = new Files("../../arquivos/produto/", '/\.jpg$/');
        $files = new Files($dir, $regex);
        echo json_encode($files->montaVetor());
    } catch(Exception $e){
        echo $e->getMessage();
    }