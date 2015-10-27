var orion = angular.module("Orion", ["ngRoute"]);

    orion.
        config([
            "$routeProvider",
            function($routeProvider){
                $routeProvider
                    .when("/", {
                        templateUrl: "templates/home.html"
                    })
                    .when("/empresa", {
                        templateUrl: "templates/empresa.html"
                    })
                    .when("/produtos", {
                        templateUrl: "templates/produtos.html"
                    })
                    .when("/produto/id/:index", {
                        templateUrl: "templates/produto.html"
                    })
                    .when("/servicos", {
                        templateUrl: "templates/servicos.html"
                    })
                    .when("/suporte", {
                        templateUrl: "templates/suporte.html"
                    })
                    .when("/contato", {
                        templateUrl: "templates/contato.html"
                    })
            }
        ]);