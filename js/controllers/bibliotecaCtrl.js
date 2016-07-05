app.controller("bibliotecaCtrl", function ($rootScope, $route, $scope, $http, $location, $window) {
	
    $rootScope.activetab = $location.path();
    $scope.viewAberta = 1;

    $scope.go = function (route) {
        $location.path(route);
    }

    $scope.openLinkArquivo = function(route) {
    	$window.href = route;
    }

    $scope.monografias = [
    	{
    		titulo: 'A ALMA NO COMPASSO DO TANGO',
    		subTitulo: 'Esta monografia foi defendida em 16/10/2010 por Rosa Brizola Felizardo e publicada em 28/11/2012 com a autorização da autora.',
    		link: 'http://ijrs.org.br/includes/_incDownload.php?arquivo=arq_20121218183807_1.pdf',
    		resumo: 'Este estudo aborda o fenômeno do Tango (aqui com ênfase na dança do tango-salão) na ótica da Psicologia Analítica, buscando compreender simbolicamente os motivos arquetípicos de sua universalidade, desde sua origem até a atualidade, detendo-se também em perceber como a alma se expressa neste universo particular. Analisa alguns dos principais elementos desta dança: A caminhada, a improvisação, a dissociação, o abraço e o terceiro eixo, estabelecendo uma analogia destes movimentos presentes na dança do tango e o movimento da psique em direção à integração dos opostos complementares, não só a partir da imagem do casal que dança, mas também com relação aos processos intra-psíquicos que ocorrem com cada um dos dançarinos envolvidos.'
    	},
    	{
    		titulo: 'A ALMA NO COMPASSO DO TANGO',
    		subTitulo: 'Esta monografia foi defendida em 16/10/2010 por Rosa Brizola Felizardo e publicada em 28/11/2012 com a autorização da autora.',
    		link: 'http://ijrs.org.br/includes/_incDownload.php?arquivo=arq_20121218183807_1.pdf',
    		resumo: 'Este estudo aborda o fenômeno do Tango (aqui com ênfase na dança do tango-salão) na ótica da Psicologia Analítica, buscando compreender simbolicamente os motivos arquetípicos de sua universalidade, desde sua origem até a atualidade, detendo-se também em perceber como a alma se expressa neste universo particular. Analisa alguns dos principais elementos desta dança: A caminhada, a improvisação, a dissociação, o abraço e o terceiro eixo, estabelecendo uma analogia destes movimentos presentes na dança do tango e o movimento da psique em direção à integração dos opostos complementares, não só a partir da imagem do casal que dança, mas também com relação aos processos intra-psíquicos que ocorrem com cada um dos dançarinos envolvidos.'
    	},
    	{
    		titulo: 'A ALMA NO COMPASSO DO TANGO',
    		subTitulo: 'Esta monografia foi defendida em 16/10/2010 por Rosa Brizola Felizardo e publicada em 28/11/2012 com a autorização da autora.',
    		link: 'http://ijrs.org.br/includes/_incDownload.php?arquivo=arq_20121218183807_1.pdf',
    		resumo: 'Este estudo aborda o fenômeno do Tango (aqui com ênfase na dança do tango-salão) na ótica da Psicologia Analítica, buscando compreender simbolicamente os motivos arquetípicos de sua universalidade, desde sua origem até a atualidade, detendo-se também em perceber como a alma se expressa neste universo particular. Analisa alguns dos principais elementos desta dança: A caminhada, a improvisação, a dissociação, o abraço e o terceiro eixo, estabelecendo uma analogia destes movimentos presentes na dança do tango e o movimento da psique em direção à integração dos opostos complementares, não só a partir da imagem do casal que dança, mas também com relação aos processos intra-psíquicos que ocorrem com cada um dos dançarinos envolvidos.'
    	},
    	{
    		titulo: 'A ALMA NO COMPASSO DO TANGO',
    		subTitulo: 'Esta monografia foi defendida em 16/10/2010 por Rosa Brizola Felizardo e publicada em 28/11/2012 com a autorização da autora.',
    		link: 'http://ijrs.org.br/includes/_incDownload.php?arquivo=arq_20121218183807_1.pdf',
    		resumo: 'Este estudo aborda o fenômeno do Tango (aqui com ênfase na dança do tango-salão) na ótica da Psicologia Analítica, buscando compreender simbolicamente os motivos arquetípicos de sua universalidade, desde sua origem até a atualidade, detendo-se também em perceber como a alma se expressa neste universo particular. Analisa alguns dos principais elementos desta dança: A caminhada, a improvisação, a dissociação, o abraço e o terceiro eixo, estabelecendo uma analogia destes movimentos presentes na dança do tango e o movimento da psique em direção à integração dos opostos complementares, não só a partir da imagem do casal que dança, mas também com relação aos processos intra-psíquicos que ocorrem com cada um dos dançarinos envolvidos.'
    	},
    	{
    		titulo: 'A ALMA NO COMPASSO DO TANGO',
    		subTitulo: 'Esta monografia foi defendida em 16/10/2010 por Rosa Brizola Felizardo e publicada em 28/11/2012 com a autorização da autora.',
    		link: 'http://ijrs.org.br/includes/_incDownload.php?arquivo=arq_20121218183807_1.pdf',
    		resumo: 'Este estudo aborda o fenômeno do Tango (aqui com ênfase na dança do tango-salão) na ótica da Psicologia Analítica, buscando compreender simbolicamente os motivos arquetípicos de sua universalidade, desde sua origem até a atualidade, detendo-se também em perceber como a alma se expressa neste universo particular. Analisa alguns dos principais elementos desta dança: A caminhada, a improvisação, a dissociação, o abraço e o terceiro eixo, estabelecendo uma analogia destes movimentos presentes na dança do tango e o movimento da psique em direção à integração dos opostos complementares, não só a partir da imagem do casal que dança, mas também com relação aos processos intra-psíquicos que ocorrem com cada um dos dançarinos envolvidos.'
    	}
    ];

    $scope.viewsBiblioteca = function(view) {
    	$scope.viewAberta = view;
    }

    $scope.entrevistas = [
    	{
    		titulo: 'O suposto fim do mundo',
    		link1: 'http://g1.globo.com/rs/rio-grande-do-sul/bom-dia-rio-grande/videos/t/edicoes/v/suposto-fim-do-mundo-pode-servir-para-um-momento-de-reflexao/2306176/',
    		link2: '',
    		resumo: 'A analista junguiana Corina Post concedeu entrevista no programa BOM DIA RIO GRANDE sobre O suposto fim do mundo. Confira!'
    	},
    	{
    		titulo: 'O suposto fim do mundo',
    		link1: 'http://g1.globo.com/rs/rio-grande-do-sul/bom-dia-rio-grande/videos/t/edicoes/v/suposto-fim-do-mundo-pode-servir-para-um-momento-de-reflexao/2306176/',
    		link2: '',
    		resumo: 'A analista junguiana Corina Post concedeu entrevista no programa BOM DIA RIO GRANDE sobre O suposto fim do mundo. Confira!'
    	},
    	{
    		titulo: 'O suposto fim do mundo',
    		link1: 'http://g1.globo.com/rs/rio-grande-do-sul/bom-dia-rio-grande/videos/t/edicoes/v/suposto-fim-do-mundo-pode-servir-para-um-momento-de-reflexao/2306176/',
    		link2: '',
    		resumo: 'A analista junguiana Corina Post concedeu entrevista no programa BOM DIA RIO GRANDE sobre O suposto fim do mundo. Confira!'
    	},
    	{
    		titulo: 'O suposto fim do mundo',
    		link1: 'http://g1.globo.com/rs/rio-grande-do-sul/bom-dia-rio-grande/videos/t/edicoes/v/suposto-fim-do-mundo-pode-servir-para-um-momento-de-reflexao/2306176/',
    		link2: '',
    		resumo: 'A analista junguiana Corina Post concedeu entrevista no programa BOM DIA RIO GRANDE sobre O suposto fim do mundo. Confira!'
    	}
    ];
});