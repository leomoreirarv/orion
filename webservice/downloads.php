<?php
    /*
     * Cabeçalho do json
     */
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');

    require("Bd.php");

    $bd = new Bd();
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $dados = $bd->consulta(
        "SELECT
            titulo, texto, data, url, type, tamanho, opcao, produtoitem_id
            FROM downloaditem
            WHERE produtoitem_id=$id"
        );
    }

    echo json_encode($dados);