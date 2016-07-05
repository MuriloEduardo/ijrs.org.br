app.controller("fotosCtrl", function ($rootScope, $route, $scope, $http, $location) {
	
    $rootScope.activetab = $location.path();

    $scope.go = function (route) {
        $location.path(route);
    }

    $scope.openAlbum = function(id){
    	$scope.AlbumAberto = id;

    }

    $scope.albuns = [
    	{
    		"id":1,
    		"titulo": "XV Jornada Regional do IJRS",
    		"imgUrl": "img/portfolio/01.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	},
    	{
    		"id":2,
    		"titulo": "Consciência Feminina",
    		"imgUrl": "img/portfolio/02.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	},
    	{
    		"id":3,
    		"titulo": "Departamento de Psicologia",
    		"imgUrl": "img/portfolio/03.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	},
    	{
    		"id":4,
    		"titulo": "XV Jornada Regional do IJRS",
    		"imgUrl": "img/portfolio/02.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	},
    	{
    		"id":5,
    		"titulo": "Consciência Feminina",
    		"imgUrl": "img/portfolio/03.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	},
    	{
    		"id":6,
    		"titulo": "Departamento de Psicologia",
    		"imgUrl": "img/portfolio/01.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	}
    ];

    $scope.fotos = [
    	{
    		"id":1,
    		"almbum":1,
    		"imgUrl":"img/portfolio/01.jpg"
    	},
    	{
    		"id":2,
    		"almbum":1,
    		"imgUrl":"img/portfolio/03.jpg"
    	},
    	{
    		"id":3,
    		"almbum":1,
    		"imgUrl":"img/portfolio/02.jpg"
    	},
    	{
    		"id":4,
    		"almbum":1,
    		"imgUrl":"img/portfolio/04.jpg"
    	},
    	{
    		"id":5,
    		"almbum":1,
    		"imgUrl":"img/portfolio/06.jpg"
    	},
    	{
    		"id":6,
    		"almbum":1,
    		"imgUrl":"img/portfolio/05.jpg"
    	},
    	{
    		"id":1,
    		"almbum":2,
    		"imgUrl":"img/portfolio/01.jpg"
    	},
    	{
    		"id":2,
    		"almbum":2,
    		"imgUrl":"img/portfolio/03.jpg"
    	},
    	{
    		"id":3,
    		"almbum":2,
    		"imgUrl":"img/portfolio/02.jpg"
    	},
    	{
    		"id":4,
    		"almbum":2,
    		"imgUrl":"img/portfolio/04.jpg"
    	},
    	{
    		"id":5,
    		"almbum":2,
    		"imgUrl":"img/portfolio/06.jpg"
    	},
    	{
    		"id":6,
    		"almbum":2,
    		"imgUrl":"img/portfolio/05.jpg"
    	},
    	{
    		"id":1,
    		"almbum":3,
    		"imgUrl":"img/portfolio/01.jpg"
    	},
    	{
    		"id":2,
    		"almbum":3,
    		"imgUrl":"img/portfolio/03.jpg"
    	},
    	{
    		"id":3,
    		"almbum":3,
    		"imgUrl":"img/portfolio/02.jpg"
    	},
    	{
    		"id":4,
    		"almbum":3,
    		"imgUrl":"img/portfolio/04.jpg"
    	},
    	{
    		"id":5,
    		"almbum":3,
    		"imgUrl":"img/portfolio/06.jpg"
    	},
    	{
    		"id":6,
    		"almbum":3,
    		"imgUrl":"img/portfolio/05.jpg"
    	},
        {
            "id":1,
            "almbum":4,
            "imgUrl":"img/portfolio/01.jpg"
        },
        {
            "id":2,
            "almbum":4,
            "imgUrl":"img/portfolio/03.jpg"
        },
        {
            "id":3,
            "almbum":4,
            "imgUrl":"img/portfolio/02.jpg"
        },
        {
            "id":4,
            "almbum":4,
            "imgUrl":"img/portfolio/04.jpg"
        },
        {
            "id":5,
            "almbum":4,
            "imgUrl":"img/portfolio/06.jpg"
        },
        {
            "id":6,
            "almbum":4,
            "imgUrl":"img/portfolio/05.jpg"
        },
        {
            "id":1,
            "almbum":5,
            "imgUrl":"img/portfolio/01.jpg"
        },
        {
            "id":2,
            "almbum":5,
            "imgUrl":"img/portfolio/03.jpg"
        },
        {
            "id":3,
            "almbum":5,
            "imgUrl":"img/portfolio/02.jpg"
        },
        {
            "id":4,
            "almbum":5,
            "imgUrl":"img/portfolio/04.jpg"
        },
        {
            "id":5,
            "almbum":5,
            "imgUrl":"img/portfolio/06.jpg"
        },
        {
            "id":6,
            "almbum":5,
            "imgUrl":"img/portfolio/05.jpg"
        },
        {
            "id":1,
            "almbum":6,
            "imgUrl":"img/portfolio/01.jpg"
        },
        {
            "id":2,
            "almbum":6,
            "imgUrl":"img/portfolio/03.jpg"
        },
        {
            "id":3,
            "almbum":6,
            "imgUrl":"img/portfolio/02.jpg"
        },
        {
            "id":4,
            "almbum":6,
            "imgUrl":"img/portfolio/04.jpg"
        },
        {
            "id":5,
            "almbum":6,
            "imgUrl":"img/portfolio/06.jpg"
        },
        {
            "id":6,
            "almbum":6,
            "imgUrl":"img/portfolio/05.jpg"
        }

    ];
});