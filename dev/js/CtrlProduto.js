orion
    .controller("CtrlProduto",
        ["SrvHelpers",
        "$scope",
        "$http",
        "$routeParams",
        function(SrvHelpers, $scope, $http, $routeParams){
        $http.get("http://www.orion-industrial.com.br/novo/webservice/produtos.php?id="+$routeParams.index)
            .success(function(data){
                $scope.titulo = data[0].produtotitulo;
                $scope.texto = SrvHelpers.strip_tags(data[0].produtotexto);
            })
            .error(function(){
                console.log("erro");
            });
    }]);