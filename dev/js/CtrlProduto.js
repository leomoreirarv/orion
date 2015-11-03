orion
    .controller("CtrlProduto",
        ["SrvHelpers",
        "$scope",
        "$http",
        "$routeParams",
        function(SrvHelpers, $scope, $http, $routeParams){
        $http
            .get("http://www.orion-industrial.com.br/novo/webservice/produtos.php?id="+$routeParams.index)
            .success(function(data){
                $scope.titulo = data[0].produtotitulo;
                $scope.texto = SrvHelpers.strip_tags(data[0].produtotexto);
            })
            .error(function(){
                console.log("erro");
            });
        $http.get("http://www.orion-industrial.com.br/novo/webservice/downloads.php?id="+$routeParams.index)
            .success(function(data){
                $scope.download = data;
                var datas = [];
                var textosDownload = [];
                var urlDownload = []
                data.forEach(function(elemento, i){
                    datas.push(SrvHelpers.dataAmericanToBrazilian(elemento.data));
                    textosDownload.push(SrvHelpers.strip_tags(elemento.texto));

                    var endereco = null;
                    if(data[i].opcao == 1){
                        endereco = "http://www.orion-industrial.com.br/arquivos/download/downs-"+data[i].id+"-0."+data[i].type;
                    } else {
                        endereco = data[i].url;
                    }

                    urlDownload.push(endereco.toLowerCase());
                });

                $scope.datas = datas;
                $scope.textosDownload = textosDownload;
                $scope.urlDownload = urlDownload;

            });


        $http
            .post("http://www.orion-industrial.com.br/novo/webservice/imagens.php", {
                dir: "../../arquivos/produto",
                regex: '/^(front-'+$routeParams.index+'-).(.jpg)$/'
            })
            .success(function(data){
                $scope.imagens = data;
            })
            .error(function(){
                console.error("Erro");
            });



    }]);