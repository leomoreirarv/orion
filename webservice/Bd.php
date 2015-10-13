<?php

class Bd
{

private $PASS_DB = "wDJsA7n#gSvU";
private $USER_DB = "orionind_ws";
private $HOST_DB = "localhost";
private $NAME_DB = "orionind_site";
public $conection =  null;

    public function __construct(){
        try{
            $this->conection = new PDO(
                "mysql:host=".$this->HOST_DB.";dbname=".$this->NAME_DB,
                $this->USER_DB, $this->PASS_DB,
                array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
            );
            $this->conection
                ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        } catch(PDOException $e) {
            echo 'Error: ' . $e->getMessage();
        }
     }

    public function consulta($query){

        try{
            $stmt = $this->conection->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $e){
            echo "Error: ".$e->getMessage();
        }

    }
}