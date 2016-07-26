app.controller("bibliotecaCtrl", function ($rootScope, $route, $scope, $http, $location, $window) {
	
    $rootScope.activetab = $location.path();
    $scope.viewAberta = 1;
    $scope.openingArtigoOpen = false;

    $scope.go = function (route) {
        $location.path(route);
    }

    $scope.openLinkArquivo = function(route) {
    	$window.href = route;
    }
	
	$http.get("php/biblioteca.php").then(function(response) {
        $scope.myData = response.data.records;
		$scope.monografias = response.data.monografias;
		$scope.entrevistas = response.data.entrevistas;
		$scope.resumos = response.data.resumos;
		$scope.artigos = response.data.artigos;
		$scope.acervo = response.data.acervo;
    });

    $scope.linkEntrevistras = function(link) {
        var split1 = link.split('href="');
        var split2 = split1[1].split('">');
        window.open(split2[0]);
    }

    $scope.openArtigo = function(artigo, toggle) {
        if(toggle){
            $scope.openingArtigoOpen = true;
        }else{
            $scope.openingArtigoOpen = false;
        }
        $scope.openingArtigo = artigo;
    }

    $scope.viewsBiblioteca = function(view) {
    	$scope.viewAberta = view;
    }
});

app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
