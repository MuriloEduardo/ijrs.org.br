app.controller("contatoCtrl", function ($rootScope, $route, $scope, $http, $location) {
	
	if($(window).scrollTop()!=0){$('html,body').stop().animate({scrollTop:0},1500,'easeInOutExpo');}
	
    $rootScope.activetab = $location.path();

    $scope.go = function (route) {
        $location.path(route);
    }
	
	

    $scope.enviarMensagem = function(dados){
    	if(dados && !$('form#contact-form').hasClass('ng-invalid-required')){
    		
			
			
			/*
			$http.post('php/ajax.php', {"name": dados.name, "email": dados.email, "phone": dados.phone, "message": dados.message, "tipo": "contato"}).
                        success(function(data, status) {
                            console.log(data);
                            $scope.status = status;
                            $scope.data = data;
                            $scope.result = data; 
							
							debugger
							
                        })
	
			console.log(dados);
    		$scope.sucesso = true;
			*/
			
			var dataObj = {
				name : dados.name,
				email : dados.email,
				phone: dados.phone,
				message: dados.message,
				tipo : 'contato'
			};	
			var res = $http.post('php/ajax.php', dataObj);
			res.success(function(data, status, headers, config) {
				debugger
				//$scope.message = data;
				//$scope.true = true;
				if(data == 'success') { $scope.sucesso = true; } else { $scope.sucesso = false; }
				
			});
			res.error(function(data, status, headers, config) {
				$scope.sucesso = false;
				//alert( "failure message: " + JSON.stringify({data: data}));
				//$scope.sucesso = false;
				
			});
			
			//$scope.sucesso = true;



    	}
    }
});