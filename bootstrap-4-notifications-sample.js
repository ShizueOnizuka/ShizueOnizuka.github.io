$('.alert').hide();
 var Nome1="";
var myApp= angular.module("myModule",[]);
myApp.controller("myController", function($scope){

  var roteiros =[
    
    {'Nome':'LISBOA, Portugal', 'Inicio_evento':new Date("Oct 15, 2017"),'Fim_evento':new Date("Oct 30, 2017"), 'Orcamento_reservado':5200, 'photo':'https://cdn3.iconfinder.com/data/icons/world-cities-1/256/29-512.png', 'quote':'Lisboa é a capital de Portugal, situada na costa. Do imponente Castelo de São Jorge, a vista abrange as construções em tons pastel da cidade antiga, o estuário do Tejo e a Ponte 25 de Abril. Perto dali, o Museu Nacional do Azulejo exibe 5 séculos de azulejos decorativos.'},
    
    {'Nome':'BERLIM, Alemanha', 'Inicio_evento':new Date("Nov 16, 2016"),'Fim_evento':new Date("Oct 15, 2017"), 'Orcamento_reservado':7250, 'photo':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KF9ndqBxf-2fdeEqdckY0PNV2s90K-ywTg&usqp=CAU', 'quote':'Berlim, a capital da Alemanha, existe desde o século XIII. Algumas recordações da história turbulenta da cidade no século XX são o Memorial do Holocausto e as ruínas do Muro de Berlim, repletas de grafites. Usado como divisão de fronteiras durante a Guerra Fria, o Portão de Brandemburgo, construído no século XVIII, tornou-se um símbolo da reunificação.'},
    
    {'Nome':'MACEIÓ, Alagoas','Inicio_evento':new Date("Dec 17, 2021"),'Fim_evento':new Date("Dec 31, 2021"), 'Orcamento_reservado':2600, 'photo':'https://cdn.w600.comps.canstockphoto.com/flag-of-maceio-alagoas-brazil-drawings_csp33708898.jpg', 'quote':'Maceió, é a capital do estado de Alagoas, na costa leste do Brasil. O seu centro histórico alberga casas coloniais cor de pastel, uma catedral do século XIX e o Museu Théo Brandão de Antropologia e Folclore, localizado numa mansão renovada à beira-mar.'},
    
    {'Nome':'SYDNEY, Austrália','Inicio_evento':new Date("Dec 17, 2014"),'Fim_evento':new Date("Dec 31, 2014"), 'Orcamento_reservado':8600, 'photo':'https://img.freepik.com/free-vector/sydney-opera-house-cartoon-icon-illustration-famous-building-traveling-icon-concept-isolated-flat-cartoon-style_138676-1714.jpg?size=338&ext=jpg', 'quote':'Sydney, capital do estado de Nova Gales do Sul e uma das maiores cidades da Austrália, é especialmente conhecida pela Ópera de Sydney, que fica na orla e tem um design inspirado em velas de barco. O enorme Porto Darling e o porto de Circular Quay, de menores dimensões, são centros da vida à beira-mar.'},
  ];
  
  $scope.roteiros = roteiros;
  $scope.sortCol = "Nome";
  
  
  $scope.addroteiro = function(){
    $scope.roteiros.push({ 'Nome':$scope.Nome, 'Inicio_evento':new Date($scope.Inicio_evento), 'Fim_evento':new Date($scope.Fim_evento), 'Orcamento_reservado':$scope.Orcamento_reservado, 'photo':$scope.photo, 'quote':$scope.quote });
  
    $('#addModal').modal('hide');
    $('#noti-box').prepend('<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>' + $scope.Nome +' adicionado com sucesso!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>  </button></div>');
 
    $scope.Nome='';
    $scope.Inicio_evento='';
    $scope.Fim_evento='';
    $scope.Orcamento_reservado='';
    $scope.photo='';
    $scope.quote='';
	}
   $scope.getIndex = function (Nome){
      var index = -1;		
      var comArr = eval( $scope.roteiros );
      for( var i = 0; i < comArr.length; i++ ) {
         if( comArr[i].Nome === Nome ) {
              index = i;
              break;
            }
          }
         if( index === -1 ) {
            alert( "Algo deu errado" );
          }
         return index;
   }
   $scope.viewDetails = function (Nome) {
            var index = $scope.getIndex(Nome);
            $scope.Nome3 = $scope.roteiros[index].Nome;
            $scope.Inicio_evento3 = new Date($scope.roteiros[index].Inicio_evento);
            $scope.Fim_evento3 = new Date($scope.roteiros[index].Fim_evento);
            $scope.Orcamento_reservado3 = $scope.roteiros[index].Orcamento_reservado;
            $scope.photo3 = $scope.roteiros[index].photo;
            $scope.quote3 = $scope.roteiros[index].quote;
    }
   $scope.fetchDetails = function (Nome) {
            var index = $scope.getIndex(Nome);
            $scope.Nome2 = $scope.roteiros[index].Nome;
            $scope.Inicio_evento2 = new Date($scope.roteiros[index].Inicio_evento);
            $scope.Fim_evento2 = new Date($scope.roteiros[index].Fim_evento);
            $scope.Orcamento_reservado2 = $scope.roteiros[index].Orcamento_reservado;
            $scope.photo2 = $scope.roteiros[index].photo;
            $scope.quote2 = $scope.roteiros[index].quote;
            Nome1= $scope.roteiros[index].Nome;
    }
  
  $scope.updateroteiro = function(){
    
             var index = $scope.getIndex(Nome1);
             $scope.roteiros[index].Nome =   $scope.Nome2;
             $scope.roteiros[index].Inicio_evento =  new Date($scope.Inicio_evento2);
             $scope.roteiros[index].Fim_evento =  new Date($scope.Fim_evento2);   
             $scope.roteiros[index].Orcamento_reservado = $scope.Orcamento_reservado2;   
             $scope.roteiros[index].photo = $scope.photo2;   
             $scope.roteiros[index].quote = $scope.quote2;   
        $('#editModal').modal('hide');
    $('#noti-box').prepend('<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>' + $scope.Nome2 +' atualizado com sucesso!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>  </button></div>');
  }
  $scope.delroteiro = function(Nome){
    if (confirm("Tem certeza de que deseja excluir "+ Nome + "?")) {
    var index = $scope.getIndex(Nome);
		$scope.roteiros.splice( index, 1 );	
    $('#noti-box').prepend('<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>' + Nome +' apagado com sucesso!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>  </button></div>');
        }
  }
})

