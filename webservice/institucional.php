<?php
    /*
     * Cabeçalho do json
     */
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');

    require("Bd.php");

    $bd = new Bd();
    $dados["institucional"] = $bd->consulta("SELECT id,texto FROM institucional LIMIT 1");


    echo json_encode($dados);