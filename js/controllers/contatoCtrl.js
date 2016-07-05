app.controller("contatoCtrl", function ($rootScope, $route, $scope, $http, $location) {
	if($(window).scrollTop()!=0){$('html,body').stop().animate({scrollTop:0},1500,'easeInOutExpo');}
	
    $rootScope.activetab = $location.path();

    $scope.go = function (route) {
        $location.path(route);
    }

    $scope.enviarMensagem = function(dados){
    	if(dados && !$('form#contact-form').hasClass('ng-invalid-required')){
    		console.log(dados);
    		$scope.sucesso = true;
    	}
    }
});