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
	
	
	
	/*

	$scope.sliders = [
		{
    		img: "img/portfolio/01.jpg",
    	},
		{
    		img: "img/portfolio/02.jpg",
    	},
	];
	*/
		$scope.destaques = [
		{
    		titulo: "Carl G. Jung",
			texto: '"Quanto menos os pais aceitem seus própios problemas, tanto mais os filhos sofrerão pela vida não vivida de seus pais e tanto mais serão forçados a realizar tudo quanto os pais reprimiram no inconsciente."',
    	},
	];
	
	
 	
});