<?php
    /*
     * Cabeçalho do json
     */
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');

    require("Bd.php");

    $bd = new Bd();
    $dados["abertura"] = $bd->consulta("SELECT texto FROM contatoabertura LIMIT 1");
    $dados["dados"] = $bd->consulta("SELECT
        razaosocial, endereco, numero, bairro, cidade,
        uf, cep, email, telefone1, telefone2
     FROM contatodado LIMIT 1");

    echo json_encode($dados);