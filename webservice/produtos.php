<?php
    /*
     * Cabeçalho do json
     */
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');

    require("Bd.php");

    $bd = new Bd();

    if(isset($_GET["id"])){
        $id = $_GET["id"];
        $dados = $bd->consulta("
                SELECT
                    P.id AS produtoid,
                    P.titulo AS produtotitulo,
                    P.texto AS produtotexto,
                    Cat.nome as categorianome
                FROM produtoitem AS P
                INNER JOIN produtocategoria AS Cat
                    ON (P.produtocategoria_id = Cat.id)
                WHERE P.id = $id
                ");
    } else {
        $dados["produtos"]["abertura"] = $bd->consulta("SELECT texto FROM produtoabertura LIMIT 1");
        $dados["produtos"]["itens"] = $bd->consulta("
                SELECT
                    P.id AS produtoid,
                    P.titulo AS produtotitulo,
                    P.texto AS produtotexto,
                    Cat.nome as categorianome
                FROM produtoitem AS P
                INNER JOIN produtocategoria AS Cat
                    ON (P.produtocategoria_id = Cat.id)
                ORDER BY categorianome
        ");
    }

    echo json_encode($dados);