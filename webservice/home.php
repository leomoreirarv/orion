<?php
    /*
     * Cabeçalho do json
     */
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');

    require("Bd.php");

    $bd = new Bd();
    $dados["home"]["institucional"] = $bd->consulta("SELECT texto FROM institucional LIMIT 1");
    $dados["home"]["banners"] = $bd->consulta("SELECT id, formato FROM bannercentral WHERE status = 1");
    $dados["home"]["produtos"] = $bd->consulta("SELECT id as produtoid FROM produtoitem ORDER BY RAND() LIMIT 4");

    echo json_encode($dados);