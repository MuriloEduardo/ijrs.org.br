app.controller("contatoCtrl", function ($rootScope, $route, $scope, $http, $location) {
	
	if($(window).scrollTop()!=0){$('html,body').stop().animate({scrollTop:0},1500,'easeInOutExpo');}
	
    $rootScope.activetab = $location.path();

    $scope.go = function (route) {
        $location.path(route);
    }

    $scope.enviarMensagem = function(dados, valid){
    	if(valid){
			$http.post('php/contato.php', dados).success(function(data, status) {
                console.log(data);
                if(data == '1'){
                    $scope.sucesso = true;
                }else{
                    $scope.sucesso = false;
                }
            });
    	}
    }
});