orion
    .controller("CtrlInstitucional", ["SrvHelpers", "$scope", "$http", function(SrvHelpers, $scope, $http){
        $http.get("http://www.orion-industrial.com.br/novo/webservice/institucional.php")
            .success(function(data){
              $scope.texto = SrvHelpers.strip_tags(data.institucional[0].texto);
              var id = data.institucional[0].id;
              $scope.foto = "http://www.orion-industrial.com.br/arquivos/institucional/zooms-"+id+"-0.jpg";
            })
            .error(function(){
                console.error("Houve uma falha ao carregar webservice");
            });
    }]);
