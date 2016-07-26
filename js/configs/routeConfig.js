app.config(function ($routeProvider, $locationProvider) {
	$routeProvider

	// Home
	.when("/", {
		templateUrl: "views/home.html",
		controller: "homeCtrl"
	})

	// Sobre IJRS
	.when("/sobre", {
		templateUrl: "views/sobre.html",
		controller: "sobreCtrl"
	})

	// Atividades
	.when("/atividades", {
		templateUrl: "views/atividades.html",
		controller: "atividadesCtrl"
	})

	// Biblioteca
	.when("/biblioteca", {
		templateUrl: "views/biblioteca.html",
		controller: "bibliotecaCtrl"
	})

	// Cursos
	.when("/cursos", {
		templateUrl: "views/cursos.html",
		controller: "cursosCtrl"
	})

	// Agenda
	.when("/agenda", {
		templateUrl: "views/agenda.html",
		controller: "agendaCtrl"
	})

	.when("/agenda/:id", {
		templateUrl: "views/agenda.html",
		controller: "agendaCtrl"
	})

	// Fotos
	.when("/fotos", {
		templateUrl: "views/fotos.html",
		controller: "fotosCtrl"
	})

	// Contato
	.when("/contato", {
		templateUrl: "views/contato.html",
		controller: "contatoCtrl"
	})

	$routeProvider.otherwise({redirectTo: '/'});

	//$locationProvider.html5Mode({enabled: true, requireBase: false});
})