app.controller("IJRSCtrl", function ($route, $scope, $http, $location) {
	$scope.go = function (route) {
        $location.path(route);
    }
});