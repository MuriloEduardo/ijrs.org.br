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
<<<<<<< HEAD

	$('.carousel').carousel({
      interval: 5000
    });
});
=======
	
 	
});
/*

app.directive('disableAnimation', function($animate){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $attrs.$observe('disableAnimation', function(value){
                $animate.enabled(!value, $element);
            });
        }
    }
});
*/

app.directive('disableAnimate', ['$animate', function ($animate) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            $animate.enabled(false, element);
        }
    };
} ]);
>>>>>>> parent of f7f88d5... ajustes
