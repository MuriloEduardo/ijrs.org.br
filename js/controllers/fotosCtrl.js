app.controller("fotosCtrl", function ($rootScope, $route, $scope, $http, $location, $filter, $routeParams) {
	
    $rootScope.activetab = $location.path();
    $('html,body').scrollTop(0);

    $scope.go = function (route) {
        $location.path(route);
    }

    $scope.openAlbum = function(album){
		if(album){
			$scope.AlbumAberto = album;
		}else{
			$scope.AlbumAberto = false;
		}
    }

    $scope.getContentGaleria = function(foto){
    	if(foto){
    		$scope.contentGaleria = foto;
    	}else{
    		$scope.contentGaleria = false;
    	}
    }
	
	
	$http.get("php/fotos.php").then(function(response) {
        $scope.myData = response.data.records;
		$scope.albuns = response.data.albuns;
		$scope.fotos = response.data.fotos;
		
		if($routeParams.id){
			
			album = $filter('filter')($scope.albuns, function (result) {
                return result.id === $routeParams.id;
            })[0];

            $scope.openAlbum(album);
        }
    });
});