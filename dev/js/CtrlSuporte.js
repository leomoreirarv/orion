orion
    .controller("CtrlSuporte", ["SrvHelpers", "$scope", "$http", function(SrvHelpers, $scope, $http){
        $http.get("http://www.orion-industrial.com.br/novo/webservice/suporte.php")
            .success(function(data){
                console.log(data);
                $scope.texto = SrvHelpers.strip_tags(data[0].texto);
            })
            .error(function(){
                console.error("Houve uma falha ao carregar o webservice");
            });

        $scope.envia = function(dados){
            //console.log(dados);
            $http
                .post("http://www.orion-industrial.com.br/novo/webservice/enviaemail.php", {
                    nome: dados.nome,
                    telefone: dados.telefone,
                    email: dados.email,
                    texto: dados.texto
                })
                .success(function(retorno){
                    $scope.form = "";
                    $scope.mensagem = retorno[1];
                })
                .error(function(){
                    $scope.form = "";
                    $scope.mensagem = "Houve um erro ao tentar enviar sua mensagem";
                    console.error("Houve um erro ao enviar");
                });
        }
    }]);
