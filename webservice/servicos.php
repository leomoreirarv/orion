<?php

     header('Access-Control-Allow-Origin: *');
     header('Content-type: application/json');

     require("Bd.php");

     $bd = new Bd();
     $dados["abertura"] = $bd->consulta("SELECT texto FROM servicoabertura LIMIT 1");
     $dados["servicos"] = $bd->consulta("SELECT id, titulo, texto FROM servicoitem");

     echo json_encode($dados);