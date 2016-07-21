app.controller("homeCtrl", function ($rootScope, $route, $scope, $http, $location) {
	
	if($(window).scrollTop()!=0){$('html,body').stop().animate({scrollTop:0},1500,'easeInOutExpo');}
	var forTop = function(el) {
		$('html,body').animate({scrollTop:$(el).offset().top},1500);
	}

	$scope.newsleter = function(el) {
		$('#emailNews').focus();
		forTop(el);
	}
	
    $rootScope.activetab = $location.path();

    $scope.go = function (route) {
        $location.path(route);
    }
	
	$http.get("php/home.php").then(function(response) {
        $scope.myData = response.data.records;
		$scope.sliders = response.data.sliders;
		$scope.dests = response.data.dests;
    });

	$scope.destaques = [
		{
    		titulo: "Carl G. Jung",
			texto: '"Quanto menos os pais aceitem seus própios problemas, tanto mais os filhos sofrerão pela vida não vivida de seus pais e tanto mais serão forçados a realizar tudo quanto os pais reprimiram no inconsciente."',
    	}
	];
	
	$scope.gravar = function(dados){
    	if(dados && !$('form#cadastro-form').hasClass('ng-invalid-required')){
    					
					
			var dataObj = {
				name : dados.name,
				email : dados.email,
				tipo : 'cadastro'
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
	
			console.log(dados);
			//$scope.sucesso = true;
    		
    	}
    }

	$('.carousel').carousel({
      interval: 5000
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
		
		
		
		
		
		
		
});