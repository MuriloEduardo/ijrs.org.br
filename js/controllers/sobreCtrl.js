app.controller("sobreCtrl", function ($rootScope, $route, $scope, $http, $location, $filter, $routeParams) {
	
	$rootScope.activetab = $location.path();
    $('html,body').scrollTop(0);

	$scope.go = function (route) {
        $location.path(route);
    }
	
	if($routeParams.id){
		$('#fa' + $routeParams.id).trigger('click');
        $rootScope.activetab = '/sobre';
		$scope.urlParam = $routeParams.id;
		
	} else {
		$scope.urlParam = 1;
	}
		
	
	$http.get("php/sobre.php").then(function(response) {
        $scope.myData = response.data.records;
		$scope.profissionais = response.data.profissionais;
		$scope.analistas = response.data.analistas;
		$scope.diretores = response.data.diretores;
		$scope.diretores_outros = response.data.diretores_outros;
		$scope.departamentos = response.data.departamentos;
		$scope.historico = response.data.historico[0];
		$scope.proposta = response.data.proposta[0];
		$scope.analitica = response.data.analitica[0];
    });
	
	
});