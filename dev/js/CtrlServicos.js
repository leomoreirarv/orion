orion
    .controller("CtrlServicos", ["SrvHelpers", "$scope", "$http", function(SrvHelpers, $scope, $http){
        $http.get("http://www.orion-industrial.com.br/novo/webservice/servicos.php")
        .success(function(data){
            $scope.abertura = data.abertura[0].texto;
            $scope.servicos = data.servicos;
        })
        .error(function(){
            console.error("falha ao carregar webservice");
        })
    }]);
