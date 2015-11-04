orion
    .controller("CtrlSuporte", ["SrvHelpers", "$scope", "$http", function(SrvHelpers, $scope, $http){
        $http.get("http://www.orion-industrial.com.br/novo/webservice/suporte.php")
            .success(function(data){
                console.log(data);
            })
            .error(function(){
                console.error("Houve uma falha ao carregar o webservice");
            });
    }]);
