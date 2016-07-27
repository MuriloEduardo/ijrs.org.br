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

    $scope.cadastraNewsletter = function(news, valid) {
    	if(!valid) return false;
    	$http.post('php/cadastra_newsletter.php', news).success(function(res){
    		console.log(res)
    		if(res == '1'){
    			$scope.resNews = {msg: 'Cadastro efetuado com sucesso!'};
    		}else{
    			$scope.resNews = {msg: 'Este email já está cadastrado.'};
    		}
    	});
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

    $scope.sobres = [
        {
            id: 1,
            titulo: 'Conheça os analistas do IJRS',
            resumo: 'Não deixe de conhecer, todos os profissionais e suas informações de contato e formação.',
            foto: 'analistas.jpg'
        },
        {
            id: 2,
            titulo: 'Saiba mais sobre psicologia analítica',
            resumo: 'Pinceladas dessa bagagem deixada por Carl Gustav Jung.',
            foto: 'psicologia.jpg'
        },
        {
            id: 3,
            titulo: 'Conheça os profissionais do IJRS',
            resumo: 'Listagem e informações sobre os profissionais do IJRS.',
            foto: 'profissionais.jpg'
        }
    ];

    $scope.fotos = [
        {
            id: 120,
            titulo: 'XV JORNADA REGIONAL DO IJRS',
            resumo: 'O IJRS em parceria com o Ministério Público do Estado do Rio Grande do Sul tem o prazer de convidar para a sua XV Jornada Regional de Psicologia Junguiana.',
            url: 'http://ijrs.org.br/2016/img/home/home01.jpg'
        },
        {
            id: 126,
            titulo: 'DEPARTAMENTO DE CONSCIÊNCIA FEMININA E CORPO',
            resumo: 'O primeiro encontro do Departamento de Consciência Feminina e Corpo aconteceu no dia 06/09/2013 com a apresentação do filme "Dancing in the Flames", documentário sobre a analista junguiana Marion Woodman.',
            url: 'http://ijrs.org.br/2016/img/home/home02.jpg'
        },
        {
            id: 127,
            titulo: 'DEPARTAMENTO DE PSICOLOGIA QUÂNTICA',
            resumo: 'No dia 04/10/2012 o Departamento de Psicologia Quântica abriu ao público seu primeiro seminário: Autonomia emocional: a prática do bem-estar, com o palestrante Andrei Weber.',
            url: 'http://ijrs.org.br/2016/img/home/home03.jpg'
        }
    ];
	
	$scope.cadastraNewsletter = function(news, valid) {
		news.tipo = "cadastro";
    	if(!valid) return false;
    	$http.post('php/ajax.php', news).success(function(res){
    		console.log(res)
    		if(res == 'success'){
    			$scope.resNews = {msg: 'Cadastro efetuado com sucesso, obrigado!'};
    		}else{
    			$scope.resNews = {msg: 'Falha no cadastro, favor tente novamente.'};//{msg: 'Este email já está cadastrado.'};
    		}
    	});
    }

	$('.carousel').carousel({
      interval: 5000
    });
});