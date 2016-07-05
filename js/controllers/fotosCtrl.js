app.controller("fotosCtrl", function ($rootScope, $route, $scope, $http, $location) {
	
    $rootScope.activetab = $location.path();

    $scope.go = function (route) {
        $location.path(route);
    }

    $scope.openAlbum = function(id){
    	$scope.AlbumAberto = id;

    }
	
	
	$http.get("php/fotos.php").then(function(response) {
        $scope.myData = response.data.records;
		$scope.albuns = response.data.albuns;
		$scope.fotos = response.data.fotos;
		
    });
	

	
	$scope.albuns2 = [
    	{
    		"id":1,
    		"titulo": "XV Jornada Regional do IJRS",
    		"imgUrl": "01.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	},
    	{
    		"id":2,
    		"titulo": "Consciência Feminina",
    		"imgUrl": "02.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	},
    	{
    		"id":3,
    		"titulo": "Departamento de Psicologia",
    		"imgUrl": "03.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	},
    	{
    		"id":4,
    		"titulo": "XV Jornada Regional do IJRS",
    		"imgUrl": "02.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	},
    	{
    		"id":5,
    		"titulo": "Consciência Feminina",
    		"imgUrl": "03.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	},
    	{
    		"id":6,
    		"titulo": "Departamento de Psicologia",
    		"imgUrl": "01.jpg",
    		"text": "Aliquet rutrum dui a varius. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Quis placerat dui. Duis lacinia nisi sit ansequat lorem nunc, nec bibendum erat volutpat ultricies."
    	}
    ];
	

    $scope.fotos2 = [
    	{
    		"id":1,
    		"album":1,
    		"imgUrl":"01.jpg"
    	},
    	{
    		"id":2,
    		"album":1,
    		"imgUrl":"03.jpg"
    	},
    	{
    		"id":3,
    		"album":1,
    		"imgUrl":"02.jpg"
    	},
    	{
    		"id":4,
    		"album":1,
    		"imgUrl":"04.jpg"
    	},
    	{
    		"id":5,
    		"album":1,
    		"imgUrl":"06.jpg"
    	},
    	{
    		"id":6,
    		"album":1,
    		"imgUrl":"05.jpg"
    	},
    	{
    		"id":1,
    		"album":2,
    		"imgUrl":"01.jpg"
    	},
    	{
    		"id":2,
    		"album":2,
    		"imgUrl":"03.jpg"
    	},
    	{
    		"id":3,
    		"album":2,
    		"imgUrl":"02.jpg"
    	},
    	{
    		"id":4,
    		"album":2,
    		"imgUrl":"04.jpg"
    	},
    	{
    		"id":5,
    		"album":2,
    		"imgUrl":"06.jpg"
    	},
    	{
    		"id":6,
    		"album":2,
    		"imgUrl":"05.jpg"
    	},
    	{
    		"id":1,
    		"album":3,
    		"imgUrl":"01.jpg"
    	},
    	{
    		"id":2,
    		"album":3,
    		"imgUrl":"03.jpg"
    	},
    	{
    		"id":3,
    		"album":3,
    		"imgUrl":"02.jpg"
    	},
    	{
    		"id":4,
    		"album":3,
    		"imgUrl":"04.jpg"
    	},
    	{
    		"id":5,
    		"album":3,
    		"imgUrl":"06.jpg"
    	},
    	{
    		"id":6,
    		"album":3,
    		"imgUrl":"05.jpg"
    	},
        {
            "id":1,
            "album":4,
            "imgUrl":"01.jpg"
        },
        {
            "id":2,
            "album":4,
            "imgUrl":"03.jpg"
        },
        {
            "id":3,
            "album":4,
            "imgUrl":"02.jpg"
        },
        {
            "id":4,
            "album":4,
            "imgUrl":"04.jpg"
        },
        {
            "id":5,
            "album":4,
            "imgUrl":"06.jpg"
        },
        {
            "id":6,
            "album":4,
            "imgUrl":"05.jpg"
        },
        {
            "id":1,
            "album":5,
            "imgUrl":"01.jpg"
        },
        {
            "id":2,
            "album":5,
            "imgUrl":"03.jpg"
        },
        {
            "id":3,
            "album":5,
            "imgUrl":"02.jpg"
        },
        {
            "id":4,
            "album":5,
            "imgUrl":"04.jpg"
        },
        {
            "id":5,
            "album":5,
            "imgUrl":"06.jpg"
        },
        {
            "id":6,
            "album":5,
            "imgUrl":"05.jpg"
        },
        {
            "id":1,
            "album":6,
            "imgUrl":"01.jpg"
        },
        {
            "id":2,
            "album":6,
            "imgUrl":"03.jpg"
        },
        {
            "id":3,
            "album":6,
            "imgUrl":"02.jpg"
        },
        {
            "id":4,
            "album":6,
            "imgUrl":"04.jpg"
        },
        {
            "id":5,
            "album":6,
            "imgUrl":"06.jpg"
        },
        {
            "id":6,
            "album":6,
            "imgUrl":"05.jpg"
        }

    ];
});