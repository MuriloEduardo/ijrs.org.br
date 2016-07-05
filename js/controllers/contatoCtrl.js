app.controller("contatoCtrl", function ($rootScope, $route, $scope, $http, $location) {
	
	if($(window).scrollTop()!=0){$('html,body').stop().animate({scrollTop:0},1500,'easeInOutExpo');}
	
    $rootScope.activetab = $location.path();

    $scope.go = function (route) {
        $location.path(route);
    }
	
	

    $scope.enviarMensagem = function(dados){
    	if(dados && !$('form#contact-form').hasClass('ng-invalid-required')){
    		
			debugger
			
			$http.post($scope.url, {"name": dados.name, "email": dados.email, "phone": dados.phone, "message": dados.message}).
                        success(function(data, status) {
                            console.log(data);
                            $scope.status = status;
                            $scope.data = data;
                            $scope.result = data; 
                        })
	
			console.log(dados);
    		$scope.sucesso = true;
    	}
    }
});