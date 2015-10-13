orion
    .controller("CtrlHome", ["SrvHelpers", "$scope", "$http", function(SrvHelpers, $scope, $http){
         $http.get("http://www.orion-industrial.com.br/novo/webservice/home.php")
            .success(function(data){
                $scope.textoInstitucional = SrvHelpers.strip_tags(data.home.institucional[0].texto);
                var bn = data.home.banners;
                var indice = Math.round(Math.random() * bn.length);
                var banner = bn[indice];
                $scope.banner = "http://www.orion-industrial.com.br/arquivos/banner-central/zooms-"+banner['id']+"-0."+banner['formato'];

                var imgProd = data.home.produtos;
                var imagensProdutos = Array();
                imgProd.forEach(function (img) {
                    imagensProdutos.push(img);
                });
                $scope.imagensProdutos = imagensProdutos;
            })
            .error(function(){
                console.log("erro");
            });
    }]);