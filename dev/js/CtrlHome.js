orion
    .controller("CtrlHome", ["SrvHelpers", "$scope", "$http", function(SrvHelpers, $scope, $http){
         $http.get("http://www.orion-industrial.com.br/novo/webservice/home.php")
            .success(function(data){
             //console.log(data);
                $scope.textoInstitucional = SrvHelpers.strip_tags(data.home.institucional[0].texto);
                var bn = data.home.banners;
                var indice = Math.floor(Math.random() * bn.length);
                //console.log(indice);
                var banner = bn[indice];
                //console.log(banner);
                $scope.banner = "http://www.orion-industrial.com.br/arquivos/banner-central/zooms-"+banner.id+"-0."+banner.formato;
                //$scope.banner = "http://www.lorempixel.com/1024/768/city/3";

                var imgProd = data.home.produtos;

                var imagensProdutos = Array();
                //console.log(imgProd);
                imgProd.forEach(function (img, indice) {
                    var id = imgProd[indice].produtoid;
                    imagensProdutos.push("http://www.orion-industrial.com.br/arquivos/produto/front-"+id+"-0.jpg");
                });

                $scope.imagensProdutos = imagensProdutos;
            })
            .error(function(){
                console.log("erro");
            });
    }]);