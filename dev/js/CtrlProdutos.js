orion
    .controller("CtrlProdutos", ["SrvHelpers", "$scope", "$http", function(SrvHelpers, $scope, $http){
        $http.get("http://www.orion-industrial.com.br/novo/webservice/produtos.php")
            .success(function(data){
               $scope.abertura = data.produtos.abertura[0].texto;
               var itens = data.produtos.itens;
               var produtos = new Array();
               var cat = null;
               var i = -1;
               itens.forEach(function(elemento){
                    if(cat != elemento.categorianome){
                        produtos.push({
                            categoria: elemento.categorianome,
                            produtos: []
                        });
                        cat = elemento.categorianome;
                        i++;
                    }

                   produtos[i]["produtos"].push(elemento);
               });
               $scope.produtos = produtos;
            })
            .error(function(){
                console.log("erro");
            });
    }]);