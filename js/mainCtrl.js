app.controller("IJRSCtrl", function ($route, $scope, $http, $location) {
	$scope.go = function (route) {
        $location.path(route);
    }
	$('.navbar-nav').find('a').on('click', function(e){
		if($(window).width() < 768 && !$(this).hasClass('dropdown-toggle'))
            $('.navbar-toggle').trigger('click');
	});
    $("#toTop").on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({
            scrollTop: $('body').offset().top
         }, 500);
    });
	$(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
});