app.controller("fotosCtrl", function ($rootScope, $route, $scope, $http, $location, $filter, $routeParams) {
	
    $rootScope.activetab = $location.path();

    $scope.go = function (route) {
        $location.path(route);
    }

    $scope.openAlbum = function(id){
		$scope.AlbumAberto = id;
    }
	
	
	$http.get("php/fotos.php").then(function(response) {
        $scope.myData = response.data.records;
		$scope.albuns = response.data.albuns;
		$scope.fotos = response.data.fotos;
		
		if($routeParams.id){
            $scope.openAlbum($routeParams.id);
        }

		
    });
		
	

});