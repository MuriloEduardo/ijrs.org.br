app.controller("sobreCtrl", function ($rootScope, $route, $scope, $http, $location) {
	
	$rootScope.activetab = $location.path();

	$scope.go = function (route) {
        $location.path(route);
    }
	
	var dadosForm
	$http.post('php/dados.php', dadosForm).success(function(data, status){

     // Angular
     $scope.array.push(data);

	})

    /*
	$scope.analistas = [
    	{
    		img: "",
    		nome: "Adriana S.Ferreira",
    		endereco: "Rua Paulistania, 591. VILA MADALENA - SP",
    		fone: "011-971402943 011-28254405",
    		email: "adriambar@uol.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "Anahy Fagundes Dias Fonseca",
    		endereco: "Av. Praia de Belas, 2266, conj. 304, Bairro Menino Deus",
    		fone: "(51) 32411591 (51) 99556806 (51) 37795549",
    		email: "anahy@terra.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "ANITA MUSSI KLAFKE",
    		endereco: "Cel. Pedro Benedet, 505/609 - Ed. Millenium Saúde Center. Criciúma-SC",
    		fone: "(48) 34375229 (48)91469630",
    		email: "anitamk@terra.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "Clenir Bueno",
    		endereco: "Av. Getúlio Vargas, 1184/402",
    		fone: "(51) 32336680",
    		email: "clenirpsi@gmail.com",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "Corina Post",
    		endereco: "Av. Getúlio Vargas, 1184 Conj.407",
    		fone: "(51) 99039722",
    		email: "corinapost@yahoo.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "Eliane Berenice Frota Luconi",
    		endereco: "Av. Getúlio Vargas 1184 Sala 506 ",
    		fone: "(51) 9991 8852 / (51) 3233 6500",
    		email: "niceluconi@terra.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "Gelson Luis Roberto",
    		endereco: "Av. Getúlio Vargas, 1184/402",
    		fone: "(51) 32336680",
    		email: "glroberto@terra.com.br",
    		sex: "m"
    	},
    	{
    		img: "",
    		nome: "Gerson Farias Klein",
    		endereco: "Av. Carlos Gomes, 1610, sala 607 - Auxiliadora - Porto Alegre",
    		fone: "(51) 93744134 e (51) 33437060",
    		email: "gfknavegante@gmail.com",
    		sex: "m"
    	},
    	{
    		img: "",
    		nome: "Joyce Lessa Werres",
    		endereco: "Av. Getúlio Vargas, 1184/409",
    		fone: "(51)32323230 e (51)84595822",
    		email: "joycewerres@yahoo.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "BENIGNA JUSSARA GANDOLFI",
    		endereco: "Av. Getúlio Vargas, 1184/402",
    		fone: "(51) 32336680",
    		email: "jugandolfi@gmail.com",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "Maria Denise Leal Vargas",
    		endereco: "Rua Venâncio Aires,13 sala 201. Centro Comercial - Esplanada - Carazinho - RS - Fone: (54)33313613",
    		fone: "",
    		email: "mdlealvargas@gmail.com",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "Maytê Cristina Da Cruz Romero",
    		endereco: "Rua Rosalina Jung, 052. Cruz Alta-Rs. Fone:(55)91588342",
    		fone: "",
    		email: "mayteromero@uol.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "Roberto Fábio Lehmkuhl",
    		endereco: "Av. Getúlio Vargas, 1157 sala 1012 - Menino Deus",
    		fone: "(51) 92259015",
    		email: "robertofl1@hotmail.com",
    		sex: "m"
    	},
    	{
    		img: "",
    		nome: "Rogério Mesquita",
    		endereco: "Av. José de Alencar, 386 sala 607",
    		fone: "32316399 ou 99767877",
    		email: "romesqui@terra.com.br",
    		sex: "m"
    	},
    	{
    		img: "",
    		nome: "Rosa Brizola Felizardo",
    		endereco: "Av. Getúlio Vargas, 1184 Conj. 407",
    		fone: "(51) 30243243/99573344",
    		email: "rosabriza@hotmail.com",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "Rosa Valente Corrêa Pinto",
    		endereco: "Av. Getúlio Vargas, 1184/402",
    		fone: "(51) 32336680",
    		email: "rosavalente@terra.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		nome: "Telma Ripoll Becker",
    		endereco: "La Plata 455, Jardim Botânico, POA",
    		fone: "(51) 33319950 e (51)99812826",
    		email: "telmaripoll@yahoo.com.br",
    		sex: "f"
    	}
    ];
	*/
    $scope.diretores = [
    	{
    		img: "",
    		cargo: "Diretor Presidente",
    		nome: "Rosa Brizola Felizardo",
    		endereco: "Av. Getúlio Vargas 1184 Sala 407 | Menino Deus - Porto Alegre / RS",
    		fone: "(51) 99573344 ",
    		email: "rosabriza@hotmail.com",
    		sex: "f"
    	},
    	{
    		img: "",
    		cargo: "Diretor de Comunicação",
    		nome: "Joyce Lessa Werres",
    		endereco: "Av. Getúlio Vargas, 1184/409 | Menino Deus - Porto Alegre / RS",
    		fone: "(51) 3232.3230 e (51) 8459.5822",
    		email: "joycewerres@yahoo.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		cargo: "Diretor de Ensino",
    		nome: "Telma Ripoll Becker",
    		endereco: "Rua La Plata 455, Jardim Botânico - 90670.040  Porto Alegre, RS",
    		fone: "(51) 9981.2826 e (51) 3331.9950",
    		email: "telmaripoll@yahoo.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		cargo: "Diretor Administrativo",
    		nome: "Corina Post",
    		endereco: "Av. Getúlio Vargas 1184 Sala 407",
    		fone: "(51) 99039722",
    		email: "corinapost@yahoo.com.br",
    		sex: "f"
    	},
    	{
    		img: "",
    		cargo: "Diretor Fiscal",
    		nome: "Rogério Mesquita",
    		endereco: "Av. José de Alencar, 386 sala 607",
    		fone: "(51) 3231.6399 ou (51) 9976.7877",
    		email: "romesqui@terra.com.br",
    		sex: "m"
    	},
    	{
    		img: "",
    		cargo: "Conselheiros",
    		nome: "Jussara Gandolfi, Corina Post e Rosa Valente Corrêa Pinto",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	},
    	{
    		img: "",
    		cargo: "Biblioteca",
    		nome: "Jussara Gandolfi e Laudeci Saldivia",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	},
    	{
    		img: "",
    		cargo: "Estágio",
    		nome: "Corina Post",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	},
    	{
    		img: "",
    		cargo: "Departamento Social",
    		nome: "Rosa Brizola",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	},
    	{
    		img: "",
    		cargo: "Departamento de Mitos e Imagens",
    		nome: "Telma Ripoll Becker",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	},
    	{
    		img: "",
    		cargo: "Departamento de Gênero e Sexualidade",
    		nome: "Rogério Mesquita",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	},
    	{
    		img: "",
    		cargo: "Departamento de Arteterapia e Dançaterapia",
    		nome: "Corina Post e Rosa Brizola",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	},
    	{
    		img: "",
    		cargo: "Departamento de Estudos sobre Espiritualidade",
    		nome: "Anahy Fagundes",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	},
    	{
    		img: "",
    		cargo: "Departamento de Psicologia Infantil",
    		nome: "Jussara Gandolfi",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	},
    	{
    		img: "",
    		cargo: "Departamento de Psicologia Quântica",
    		nome: "Gelson Roberto",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	},
    	{
    		img: "",
    		cargo: "Departamento de Consciência Feminina e Corpo",
    		nome: "Anita Mussi e Joyce Werres",
    		endereco: "",
    		fone: "",
    		email: "",
    		sex: ""
    	}
    ];
    $scope.departamentos = [
    	{
    		nome: "Departamento Consciência Feminina e Corpo",
    		descricao: "",
    		tit_a: "Objetivo Geral",
    		descricao_a: "O Departamento CONSCIÊNCIA FEMININA e CORPO tem como objetivo abordar a relação corpo/psique a partir da perspectiva junguiana da alma, que de acordo com Jung faz a conexão entre a vida instintiva e a vida espiritual. Esta integração entre o físico e o psíquico constitui a base do desenvolvimento da Consciência Feminina. Neste sentido enfocaremos o entrelaçamento dessas duas instâncias através de atividades voltadas para este fim.",
    		tit_b: "Atividades Propostas",
    		obs: "",
    		sub_tit_b: "Apresentação e discussão do filme:",
    		descricao_b: "Dancing in the Flames, documentário sobre a vida da analista junguiana Marion Woodman",
    		sub_tit_c: "Dia:",
    		descricao_c: "06/09 Horário: 19h, na sede do IJRS",
    		sub_tit_d: "",
    		descricao_d: "",
    		sub_tit_e: "",
    		descricao_e: "",
    		coordenadoras: "Anita Mussi e Joyce Werres",
    		coordenacao: "",
    		colaboradoras: "Cláudia Moraes e Grace Gandolfi"
    	},
    	{
    		nome: "Departamento de Arteterapia e Musicoterapia",
    		descricao: "",
    		tit_a: "Objetivo Geral",
    		descricao_a: "O Departamento de Arteterapia e Musicoterapia têm como finalidades principais, apresentar a arte como representação da vida, como um recurso mediador de interação entre pessoas e veículo para a criatividade; e através de atividades voltadas para este fim, propiciar ações de permanente diálogo com as artes em geral, desenvolvendo a interlocução da Psicologia Analítica com as mais variadas formas de expressão artística.",
    		tit_b: "Atividades Propostas (2013/2014)",
    		obs: "",
    		sub_tit_b: "1 -",
    		descricao_b: "Organizar encontros periódicos ligados a arte, música, dança e literatura",
    		sub_tit_c: "2 -",
    		descricao_c: "Estruturar parceria do IJRS com o curso de Formação em Arteterapia",
    		sub_tit_d: "3 -",
    		descricao_d: "Representar o IJRS em eventos nesta área",
    		sub_tit_e: "",
    		descricao_e: "",
    		coordenadoras: "",
    		coordenacao: "Corina Post",
    		colaboradoras: "Rosa Brizola"
    	},
    	{
    		nome: "Departamento de Mito e Imagem",
    		descricao: "O material do mito é o material da nossa vida, do nosso corpo, do nosso ambiente... entrar em harmonia e sintonia com o universo e permanecer nesse estado, é a principal função da mitologia.  Joseph Campbell",
    		tit_a: "Objetivo Geral",
    		descricao_a: "Temos como objetivo maior refletir mito/imagem enquanto realidade viva e atuante em nossa prática diária, não só no setting terapêutico, mas em nosso dia a dia, em nossa cultura local. Assim buscaremos observar e promover o estudo e discussão do mito, da antiguidade aos dias de hoje, em suas aparições vibrantes e atualizadas nos sonhos; imortalizado na música, em obras de arte, literatura, teatro e cinema; literalizado nas patologias do homem do século XXI; ritualizado em situações específicas, seja no âmbito das religiões formais ou não; atuado em crendices e práticas populares; relatado em lendas da tradição locai. Privilegiaremos a busca, estudo e reflexão de lendas da cultura indígena e afro-brasileira, já absorvidas por nossa cultura e inseridas em nosso cotidiano, sem que aparentemente lhes creditemos alguma importância.",
    		tit_b: "Atividades",
    		obs: "",
    		sub_tit_b: "1 -",
    		descricao_b: "Grupo de estudo de mitos, de caráter regular e quinzenal, previsto para o segundo semestre de 2013, a ser divulgado em breve.",
    		sub_tit_c: "2 -",
    		descricao_c: "Seminários semestrais, gratuitos e abertos ao público em geral, onde alguma questão referente aos mitos seja trazida à discussão. Imaginamos contar com a presença de palestrantes não só do nosso corpo de analistas e alunos, de modo a diversificar e enriquecer a reflexão.",
    		sub_tit_d: "",
    		descricao_d: "",
    		sub_tit_e: "",
    		descricao_e: "",
    		coordenadoras: "Telma Ripoll Becker",
    		coordenacao: "",
    		colaboradoras: "Maria da Graça Serpa e Ana Luisa de Menezes"
    	},
    	{
    		nome: "Departamento de Psicologia e Espiritualidade",
    		descricao: "",
    		tit_a: "Objetivo Geral",
    		descricao_a: "Promover reflexões e debates entre os profissionais da área da saúde mental e o público em geral sobre as relações entre espiritualidade e saúde;Promover a integração entre os demais Núcleos de Estudo da área e o IJRS;Convidar profissionais de áreas afins para participação nas atividades do Núcleo visando à integração de conhecimentos;Promover o estudo da cultura religiosa em vários âmbitos através de um espaço multidisciplinar.",
    		tit_b: "Atividade programada para 2013",
    		obs: "Momentos Sagrados em Psicoterapia. Discussão de caso clínico",
    		sub_tit_b: "Público alvo:",
    		descricao_b: "psicoterapeutas, psicólogos, psiquiatras",
    		sub_tit_c: "Obs.:",
    		descricao_c: "Inscrições antecipadas e material a ser entregue após inscrição.",
    		sub_tit_d: "Data:",
    		descricao_d: "18 de setembro",
    		sub_tit_e: "Horário:",
    		descricao_e: "20h",
    		coordenadoras: "",
    		coordenacao: "Anahy Fagundes Dias Fonseca",
    		colaboradoras: "Gelson Roberto, Michelle Ponzoni dos Santos e Alexandre Fontoura dos Santos"
    	},
    	{
    		nome: "Departamento de Psicologia Infantil",
    		descricao: "",
    		tit_a: "Objetivo Geral",
    		descricao_a: "O Departamento de psicologia Infantil tem por objetivo abrir um espaço para maior conhecimento e reflexão sobre a prática clínica da psicologia infantil. Espaço esse  em que possamos contribuir e participar de trocas entre profissionais,educadores e comunidade.",
    		tit_b: "Objetivos específicos",
    		obs: "",
    		sub_tit_b: "",
    		descricao_b: "Considerar e tornar de conhecimento público as ideias de Jung sobre a Infância é uma atitude de respeito a nossa teoria e a criança; dialogar com os demais Institutos Junguianos, além de fortalecer laços com a AJB amplia o conhecimento e fortalecimento de uma psicologia da criança; relação e integração com os demais membros de nosso Instituto, como estagiários, alunos do curso de especialização e formação, colegas, professores para contribuir para o crescimento e desenvolvimento da nossa proposta e do desejo de ter no Instituto Junguiano do RS um referencial na psicologia infantil; refletir sobre a nova geração de crianças Y ou geração do milênio como estão sendo chamadas estas crianças nos meios acadêmicos e na mídia, que estão chegando aos nossos consultórios com diagnósticos de hiperatividade, déficit de atenção etc.; levar nosso projeto os pais e educadores através de encontros e palestras com profissionais não só do Instituto como também de outras áreas . Que através do desejo e da vontade, abençoados por Eros deus do amor e da relação possamos concretizar nossa proposta.",
    		sub_tit_c: "",
    		descricao_c: "",
    		sub_tit_d: "",
    		descricao_d: "",
    		sub_tit_e: "",
    		descricao_e: "",
    		coordenadoras: "",
    		coordenacao: "Jussara Gandolfi",
    		colaboradoras: ""
    	},
    	{
    		nome: "Departamento de Sexualidade e Gênero",
    		descricao: "",
    		tit_a: "Proposta",
    		descricao_a: "Fazer uma reflexão sobre a sexualidade Humana e suas formas de vivencia-la tendo como objetivo ampliar e entender este aspecto do ser humano. Para tal será proposta uma discussão entre os  integrantes do grupo, IJRS e pessoas convidadas.",
    		tit_b: "Objetivos",
    		obs: "Ampliar o entendimento das questões relativas a sexualidade e gênero trazidas pelo paciente na clínica e assim ajuda-lo a desenvolver uma identidade positiva sobre si desenvolvendo um absoluto respeito por sua sexualidade, sua cultura e seu estilo de vida.",
    		sub_tit_b: "Atividade:",
    		descricao_b: "Homofobia internalizada.",
    		sub_tit_c: "",
    		descricao_c: "A visão da Psicologia Analítica e um comparativo coma visão da ong SOMOS trazido por Claudia Penalvo, educadora e coordenadora técnica do Somos.",
    		sub_tit_d: "",
    		descricao_d: "Grupo de estudos com encontros bimensais para desenvolver o tema. No segundo semestre de 2014 propor um seminário com os temas desenvolvidos durante estes grupos.",
    		sub_tit_e: "",
    		descricao_e: "",
    		coordenadoras: "",
    		coordenacao: "Rogério Mesquita",
    		colaboradoras: "Claudia Penalvo"
    	},
    	{
    		nome: "Departamento Social",
    		descricao: "",
    		tit_a: "Objetivo Geral",
    		descricao_a: "O Departamento Social tem como finalidades principais, a promoção de atividades voltadas a ações solidárias que visem o bem comum da sociedade onde atua, entendendo que é missão do IJRS promover a psicologia analítica como ciência viva, vinculada da realidade social; e ainda cabe a este departamento organizar atividades de integração, confraternização e participação dos profissionais do IJRS e entidades parceiras.",
    		tit_b: "Atividades Propostas (2013/2014)",
    		obs: "Dar continuidade ao trabalho da Clínica Social do IJRS;",
    		sub_tit_b: "",
    		descricao_b: "Estruturar e instrumentalizar (produção de material próprio a ser divulgado nos eventos) a participação do IJRS, como parceiro do MP no Movimento Sepé Tiaraju de Cultura da Paz;",
    		sub_tit_c: "",
    		descricao_c: "Organização da Festa de Encerramento 2013 para os profissionais do IJRS; ",
    		sub_tit_d: "",
    		descricao_d: "Criação do Coral/Grupo Vocal do IJRS;",
    		sub_tit_e: "",
    		descricao_e: "Palestra de cunho social no mês de outubro/2013 (tema ainda a ser definido);",
    		coordenadoras: "",
    		coordenacao: "Rosa Brizola",
    		colaboradoras: ""
    	}
    ];
    $scope.profissionais = [
    	{
    		nome: "Adriana S.Ferreira",
    		sobre: "Psicologa, analista Junguiana pela AJB, Mestre em Artes Visuais pela UNICAMP-SP, doutoranda em Multimeios( SONHOS E CINEMA) pela UNICAMP- SP. Estudiosa da vida do CORPO em Jung e  com Stanley Keleman(Anatomia Emocional e outros...) em Berkley-CA-USA.Clinica em São Paulo, e realiza seu trabalho SONHOS E O CORPO em vários lugares do Brasil, ampliando as conexões PSIQUE-CORPO-TOTALIDADE.",
    		endereco: "Rua Paulistania, 591. VILA MADALENA - SP",
    		fone: "011-971402943 011-28254405",
    		email: "adriambar@uol.com.br"
    	},
    	{
    		nome: "Aline Machado Oliveira",
    		sobre: "Médica especialista em Psiquiatria pela Universidade Federal de Santa Maria; especialista em Psicologia Clínica Junguiana pelo IJRS; candidata à Analista Junguiana pelo IJRS. Atende adultos em Bento Gonçalves",
    		endereco: "Rua General Osório n° 170, Segundo Piso, Centro, Bento Gonçalves, RS",
    		fone: "54 37023772 ou 54 97070204",
    		email: "alinesm10@hotmail.com"
    	},
    	{
    		nome: "Ana Luisa de Menezes",
    		sobre: "Psicóloga com graduação na UFC, mestrado em Psicologia na PUC/RS e doutorado em Educação pela UFRGS. Atualmente é professora titular e Pró-Reitora de Extensão e Relações Comunitárias da Universidade de Santa Cruz do Sul. Tem experiência na área de Psicologia, com ênfase em Processos Grupais e de Comunicação, atuando principalmente nos seguintes temas: biodança, dança, saúde, psicologia comunitária, corporeidade e educação indígena. Candidata à Analista Junguiana pelo IJRS.",
    		endereco: "Rua 28 de setembro, 36 sala 510. Santa Cruz - RS",
    		fone: "95043031",
    		email: "analuisatdm@gmail.com"
    	},
    	{
    		nome: "Anahy Fagundes Dias Fonseca",
    		sobre: "Médica Psiquiatra (UFRGS/HCPA), Analista do IJRS/AJB, Diretora de Divulgação da Associação de Psiquiatria do RS (APRS), Coordenadora do Núcleo de Psiquiatria e Espiritualidade da APRS, Coordenadora do Depto. de Estudos sobre Espiritualidade do IJRS, Membro do Comitê de Estudos e Pesquisas em Espiritualidade e Saúde Mental da Associação Brasileira de Psiquiatria e Membro da \"Section on Religion, Spirituality and Psychiatry\" da World Psychiatry Association (WPA).",
    		endereco: "Av. Praia de Belas, 2266, conj. 304, Bairro Menino Deus",
    		fone: "(51) 32411591; (51) 99556806; (51) 37795549 Fax",
    		email: "anahy@terra.com.br"
    	},
    	{
    		nome: "Anita Mussi Klafke",
    		sobre: "Psicóloga Clínica- Analista Junguiana pelo IJRS, Especialista em Psicologia Analítica. Membro da SSMP (Sociedade Sul-Rio Grandense de Medicina Psicossomática). Membro fundadora da CERES (Associação Criciumense de Apoio à Saúde Mental). Membro da Sociedade de Psicologia de Criciúma, pela PUC-PR.",
    		endereco: "Cel. Pedro Benedet, 505/609 - Ed. Millenium Saúde Center. Criciúma-SC",
    		fone: "(48)34375229 e (48)91469630",
    		email: "anitamk@terra.com.br"
    	},
    	{
    		nome: "Benigna Jussara Gandolfi",
    		sobre: "Psicóloga, especialista em Educação, Analista Junguiana pelo IJRS. Atendimento clínico de crianças, adolescentes e adultos.",
    		endereco: "",
    		fone: "(51) 32336680",
    		email: "jugandolfi@gmail.com"
    	},
    	{
    		nome: "Claise Maria Raddatz",
    		sobre: "Médica gineco-obstetra; formada pela UFPEL (Universidade Federal de Pelotas no ano de 1977); Pós graduada em Sexualidade Humana pela Universidade Gama Filho no Rio de Janeiro; Pós graduada em Psicossomática pela FACIS - SP; Pós graduada em Terapia Junguiana pela FACIS - SP; Candidata a analista junguiana pelo Instituto Junguiano do Rio Grande do Sul.",
    		endereco: "Rua Fernando Abott, 380/303 - Santa Cruz do Sul - RS",
    		fone: "(51) 3056-3970 (consultório) e (51) 9995-3628",
    		email: ""
    	},
    	{
    		nome: "Clenir Bueno",
    		sobre: "Psicóloga (UNISINOS) e Analista Junguiana. Diretora Fiscal do IJRS. Membro da IAAP (Internacional  Association for Analytical Psychology) e da AJB (Associação Junguiana do Brasil). Atendimento clínico de adolescentes, adultos e casais. Supervisão clínica de profissionais e estudantes, individual ou em grupo.",
    		endereco: "Av. Getúlio Vargas, 1184/402",
    		fone: "(51)32336680 e (51)32336586",
    		email: "clenirpsi@gmail.com"
    	},
    	{
    		nome: "Corina Post",
    		sobre: "Psicóloga - Analista Junguiana do IJRS - Arteterapeuta. Membro da AJB e da IAAP,  professora do curso de Pós Graduação em Psicologia clinica junguiana, coordenadora e supervisora do estágio do IJRS, atendimento clínico de crianças, adolescentes e adultos.",
    		endereco: "Av. Getúlio Vargas, 1184/407, bairro Menino Deus",
    		fone: "(51) 99039722",
    		email: "corinapost@yahoo.com.br"
    	},
    	{
    		nome: "Eliane Berenice Frota Luconi",
    		sobre: "Psicóloga. Analista Junguina.  Membro fundador e presidente do IJRS, Instituto Junguiano do Rio Grande do Sul. Membro da Associação Internacional, IAAP e da AJB, Associação Junguiana Brasileira.",
    		endereco: "",
    		fone: "(51)99918852 e (51)32336500",
    		email: "niceluconi@terra.com.br"
    	},
    	{
    		nome: "Gelson Luis Roberto",
    		sobre: "Psicólogo, mestre em psicologia clínica, analista junguiano, membro fundador do Insituto Junguiano do RS, membro da Associação Junguiana do Brasil e da IAAP  Internacional Association for Analytical Psychology, membro da Sociedade Sulriograndense de Medicina Psicossomática.",
    		endereco: "",
    		fone: "(51) 32336680",
    		email: "glroberto@terra.com.br"
    	},
    	{
    		nome: "Gerson Farias Klein",
    		sobre: "Psicólogo (UNISINOS), analista junguiano pelo IJRS, membro da AJB (Associação Junguiana do Brasil) e da IAAP (International Association for Analytical Psychology). Atendimento clínico de adultos.",
    		endereco: "Av. Carlos Gomes, 1610, sala 607 - Auxiliadora - Porto Alegre",
    		fone: "(51) 93744134 e (51) 33437060",
    		email: "gfknavegante@gmail.com"
    	},
    	{
    		nome: "Gisela Cardoso",
    		sobre: "Psicóloga Clínica especialista em Teoria e Prática Junguiana (Universidade Veiga de Almeida, RJ) e Arteterapia (ISEPE, PR). Pós-graduada em Abordagem Transpessoal da Consciência (Unipaz-Sul) e Biopsicologia (Instituto Visão Futuro).  Facilitadora de dançaterapia no Giramundo, espaço integrado de arte, cultura e psicologia (fanpage: Giramundo: dançaterapia e outros movimentos). Mestre em Literatura, Cultura e Regionalidade pela UCS (Universidade de Caxias do Sul). Candidata à Analista Junguiana pelo  IJRS.",
    		endereco: "Caxias do Sul",
    		fone: "(54) 32297566 e (54) 91811466",
    		email: "gisedp@terra.com.br"
    	},
    	{
    		nome: "Grace Gandolfi",
    		sobre: "Psicóloga, graduada pela PUC-RS, Especialista em Psicologia Junguiana pela Faculdade de Ciências da Saúde de São Paulo (FACIS), Mestranda em Psicoterapia com orientação em Psicologia Analítica Junguiana pela Universidad Católica del Uruguay (UCU-UY) e candidata a Analista Junguiana pelo IJRS.",
    		endereco: "",
    		fone: "",
    		email: ""
    	},
    	{
    		nome: "Heloisa Helena Bartholomay",
    		sobre: "Cirurgiã - Dentista, Psicóloga, especializada em Psicologia Analítica Junguiana PUC/MG, candidata à Analista Junguiana IJRS. Atendimento clínico de adultos.",
    		endereco: "R. 28 de Setembro, 36 sala 710 - Centro, Santa Cruz do Sul - RS",
    		fone: "(51) 39027576 e (51) 82067290",
    		email: "heloisa.bartholomay@terra.com.br"
    	},
    	{
    		nome: "Joyce Lessa Werres",
    		sobre: "Psicóloga e Mestre em Psicologia Clínica pela PUCRS, Analista Junguiana Didata, membro da AJB e da IAAP. Organizadora do livro \"Ensaios sobre a clínica Junguiana\", co-autora do livro \"Puer-senex: dinâmicas relacionais\". Professora e Coordenadora do curso de Pós-Graduação em Psicologia Clínica Junguiana. Diretora de Comunicação do IJRS. Atendimento clínico de adultos e casais; supervisão clínica para profissionais.",
    		endereco: "Av. Getúlio Vargas, 1184/409 | Menino Deus, Porto Alegre",
    		fone: "(51)32323230 e (51)84595822",
    		email: "joycewerres@yahoo.com.br"
    	},
    	{
    		nome: "Maria da Graça Serpa",
    		sobre: "Psicóloga graduada pela PUC-RS, psicoterapeuta a 30 anos de adolescentes, adultos e casais; há 20 anos trabalha dentro da abordagem junguiana. Especialista em Clínica Junguiana e Licencianda em Psicologia da UFRGS. Candidata à Analista Junguiana pelo IJRS.",
    		endereco: "",
    		fone: "",
    		email: "gracaserpa@terra.com.br"
    	},
    	{
    		nome: "Maria Denise Leal Vargas",
    		sobre: "Médica (UFSM). Especialista em Sexualidade Humana pelo CEPPE, Faculdade Tuiuti. Especialista em Psicossomática (FACIS), Especialicação Profissional em Psicologia Junguiana (FACIS) e candidata à analista pelo IJRS. Atendimento clínico de adultos.",
    		endereco: "Rua Venâncio Aires,13 sala 201. Centro Comercial - Esplanada - Carazinho - RS",
    		fone: "(54)33313613",
    		email: "mdlealvargas@gmail.com | psicoterapiadenisevargas.blogspot.com"
    	},
    	{
    		nome: "Maytê Cristina Da Cruz Romero",
    		sobre: "Psicóloga (UNIBAN), Analista Junguiana pelo IJRS. Atendimento clínico de adolescentes, adultos e grupos.",
    		endereco: "Rua Rosalina Jung, 052. Cruz Alta-Rs",
    		fone: "(55) 91588342",
    		email: "mayteromero@uol.com.br"
    	},
    	{
    		nome: "Patricia Flores de Medeiros",
    		sobre: "Psicologa(PUCRS); Mestre em Psicologis Social e da Personalidade (PUCRS); Doutora em Psicologia (PUCRS); Psicoterapeuta Junguiana e Professora do curso de Psicologia da UNIVATES.",
    		endereco: "Lajeado/RS",
    		fone: "",
    		email: "florespm@terra.com.br"
    	},
    	{
    		nome: "Rafael Gomes Giordano",
    		sobre: "Psicólogo, Especialista em Psicossomática, candidato à Analista Junguiano pelo IJRS. Atendimento clínico de crianças, adolescentes e adultos.",
    		endereco: "Rua Dona Laura 414 sala 303 (Porto Alegre) | Rua Manoel da Silva Pacheco 100 (Camaquã)",
    		fone: "(51) 99159116",
    		email: "giordanorafael@gmail.com"
    	},
    	{
    		nome: "Roberto Fábio Lehmkuhl",
    		sobre: "Médico (UFSC); Especialista em  Medicina Ayurvédica (Academia Internacional de Ayurveda, Poona - Índia), Medico de Família e Comunidade (Grupo Hospitalar Conceição); Analista Junguiano. Atendimento Clínico de adolescentes e adultos.",
    		endereco: "Av. Getúlio Vargas, 1157 sala 1012 - Menino Deus",
    		fone: "(51) 92259015",
    		email: "robertofl1@hotmail.com"
    	},
    	{
    		nome: "Rogério Mesquita",
    		sobre: "Formação em Psicologia pela PUCRS, Analista Junguiano do IJRS. Atendimento clínico de adolescentes e adultos.",
    		endereco: "Av. José de Alencar, 386 sala 607- Menino Deus - Porto Alegre",
    		fone: "(51) 32316399 ou (51) 99767877",
    		email: "romesqui@terra.com.br"
    	},
    	{
    		nome: "Rosa Brizola Felizardo",
    		sobre: "Psicóloga - Analista Junguiana pelo IJRS. Pedagoga - Especialista Em Orientação Educacional.",
    		endereco: "Av. Getúlio Vargas, 1184/407 - Menino Deus",
    		fone: "(51) 99573344 ",
    		email: "rosabriza@hotmail.com"
    	},
    	{
    		nome: "Rosa Valente Corrêa Pinto",
    		sobre: "Psicóloga, Analista Junguiana, portuguesa, há 30 anos residindo em Porto Alegre.",
    		endereco: "Av. Getúlio Vargas, 1184, conj. 402",
    		fone: "(51)32336680 (51)99578811",
    		email: "rosavalente@terra.com.br"
    	},
    	{
    		nome: "Rose Mary Kerr de Barros",
    		sobre: "Psicologa especialista em Clinica Junguiana, Psicooncologia e candidata à analista junguiana pelo IJRS. Atendimento de adolescentes e adultos.",
    		endereco: "Pelotas - RS",
    		fone: "(53) 91203868 e (53) 99824539",
    		email: "roseb@terra.com.br"
    	},
    	{
    		nome: "Susane Maria Curra",
    		sobre: "Psicóloga com graduação na UFRGS em 1980, especialista em psicologia Analítica pela Fato/IJRS; Jurídica pela Ulbra e com título de especialista em Clínica pelo CRP/RS. Experiência em atendimento a crianças e adolescentes vítima de violências. Há 30 anos exerce psicologia clínica de adultos e adolescentes em consultório e há 12 com saúde pública no HMIPV.  Candidata a analista Junguiana pelo IJRS.",
    		endereco: "Av. Protásio Alves 1281/305, Porto Alegre/RS",
    		fone: "(51) 9998 1089",
    		email: "susanemc@ig.com.br"
    	},
    	{
    		nome: "Telma Ripoll Becker",
    		sobre: "Médica sanitarista (UFRGS), Analista Junguiana pelo IJRS, membro da AJB e IAAP, professora do Curso de Pós-Graduação em Psicologia Clínica Junguiana. Atendimento clínico de adultos e adolescentes, supervisão clínica de profissionais e estudantes.",
    		endereco: "La Plata 455, Jardim Botânico, POA",
    		fone: "(51) 33319950 e (51)99812826",
    		email: "telmaripoll@yahoo.com.br"
    	},
    	{
    		nome: "Vanice Klein",
    		sobre: "Médica Cardiologista (SBC/AMB). Psicoterapeuta Junguiana (Pós-Graduação em Teoria e Prática Junguiana-UVA-RJ).  Candidata a Analista Junguiana pelo IJRS. Atendimento de adultos.",
    		endereco: "Caxias do Sul",
    		fone: "(54)302147-57, (54)9176-9444",
    		email: "vanicejk@gmail.com"
    	}
    ];
});