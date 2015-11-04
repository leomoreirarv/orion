<?php
    /*
     * Cabeçalho do json
     */
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');

    require("Bd.php");

    $bd = new Bd();
    $dados = $bd->consulta("SELECT texto, email FROM suporte LIMIT 1");

    echo json_encode($dados);