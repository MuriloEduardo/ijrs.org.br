app.controller("agendaCtrl", function ($rootScope, $route, $scope, $http, $location) {
	
    $rootScope.activetab = $location.path();

    $scope.go = function (route) {
        $location.path(route);
    }

	var dataAtualFormatada = function(){
		var data = new Date();
		var dia = data.getDate();
		
		if (dia.toString().length == 1)
			dia = "0"+dia;
		
		var mes = data.getMonth()+1;
		
		if (mes.toString().length == 1)
			mes = "0"+mes;
		
		var ano = data.getFullYear();  
		return dia+"/"+mes+"/"+ano;
	}

    $scope.agendas = [
    	{
    		id: 1,
    		open: false,
    		img: 'img/blog/b02.jpg',
    		data: dataAtualFormatada(),
    		titulo: 'Tempor vestibulum turpis id ligula mi mattis.',
    		resumo: 'Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus',
    		texto: 'Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus',
    		likes: 10,
    		views: 234,
    		comentarios: [
    			{
	    			texto: 'Ahh! Que legal, adorei.',
	    			img: '../img/blog/01.jpg',
	    			nome: 'Murilo Eduardo',
	    			email: 'muriloeduardoooooo@gmail.com'
	    		},
	    		{
	    			texto: 'Ahh! Que legal, adorei.',
	    			img: '../img/blog/01.jpg',
	    			nome: 'Murilo Eduardo',
	    			email: 'muriloeduardoooooo@gmail.com'
	    		}
    		]
    	},
    	{
    		id: 2,
    		open: false,
    		img: 'img/blog/b03.jpg',
    		data: dataAtualFormatada(),
    		titulo: 'Tempor vestibulum turpis id ligula mi mattis.',
    		resumo: 'Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus',
    		texto: 'Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus Tempor vestibulum turpis id ligula mi mattis. Eget arcu vitae mauris amet odio. Diam nibh diam, quam elit, libero nostra ut. Pellentesque vehicula. Eget sed, dapibus',
    		likes: 10,
    		views: 234,
    		comentarios: [
    			{
	    			texto: 'Ahh! Que legal, adorei.',
	    			img: '../img/blog/01.jpg',
	    			nome: 'Murilo Eduardo',
	    			email: 'muriloeduardoooooo@gmail.com'
	    		}
    		]
    	}
    ]

    $scope.objOpen = {
		open: undefined,
		id: undefined,
		img: undefined,
		data: undefined,
		titulo: undefined,
		resumo: undefined,
		texto: undefined,
		likes: undefined,
		views: undefined,
		comentarios: [
			{
    			texto: undefined,
    			img: undefined,
    			nome: undefined,
    			email: undefined
    		}
		]
	}

	$scope.like = function(id) {
		
	}

    $scope.openAgenda = function(agenda) {
    	if(agenda){
    		agenda.open = true;
    		agenda.views = agenda.views + 1;
    		$scope.objOpen = agenda;
    	}else{
    		$scope.agendas.open = true;
    		delete $scope.objOpen;
    	}
    }
});