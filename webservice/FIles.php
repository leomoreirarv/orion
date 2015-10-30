<?php
    class Files{
        private $diretorio;
        private $filtro;

        public function __construct($diretorio, $filtro){
            $this->diretorio = $diretorio;
            $this->filtro = $filtro;
        }

        public function montaVetor(){
            $dir = new DirectoryIterator($this->diretorio);
            $fil = new RegexIterator($dir, $this->filtro);

            $arquivos = [];
            foreach($fil as $arquivo){
                $arquivoInfo = array(
                    "name"=>$arquivo->getFileName(),
                    "path"=>$arquivo->getPath()
                );
                array_push($arquivos, $arquivoInfo);
            }
            return $arquivos;
        }
    }