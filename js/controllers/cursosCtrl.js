app.controller("cursosCtrl", function ($rootScope, $route, $scope, $http, $location) {
	
    $rootScope.activetab = $location.path();

    $scope.go = function (route) {
        $location.path(route);
    }
});