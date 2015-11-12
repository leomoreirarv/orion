orion
    .controller("CtrlMain", ["$scope", "$location", function($scope, $location){
        var urlPart = $location.url().length;
        var urlTotal = $location.absUrl().length;
        var diff = urlTotal - urlPart;
        $scope.urlAbs = $location.absUrl().substring(0, diff - 1);
    }]);
