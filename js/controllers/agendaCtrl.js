app.controller("agendaCtrl", function ($rootScope, $route, $scope, $http, $location, $filter, $routeParams) {
	
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
	
	$http.get("php/agenda.php").then(function(response) {
        $scope.myData = response.data.records;
		$scope.agendas = response.data.agendas;

        if($routeParams.id){
            var agenda = $filter('filter')($scope.agendas, function (result) {
                return result.id === $routeParams.id;
            })[0];
            $scope.openAgenda(agenda);
        }
    });

    $scope.objOpen = {
		open: undefined,
		id: undefined,
        like: true,
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
    			nome: undefined,
    			email: undefined
    		}
		]
	}

	$scope.like = function(id) {
        var object_by_id = $filter('filter')($scope.agendas, {id: id})[0];
        if(object_by_id.like){
            object_by_id.likes ++;
            object_by_id.like = false;
        }
	}

    $scope.comentar = function(objForm) {
        objForm = {
            texto: objForm.texto,
            nome: 'Murilo Eduardo',
            email: 'muriloeduardoooooo@gmail.com'
        }
        $scope.objOpen.comentarios.push(objForm);
        delete $scope.comentario;
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

app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
