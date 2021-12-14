var app = angular.module('app', []);

app.controller('main',function($scope){
  $scope.total = 15000;
  $scope.addRoom ="";
  $scope.addDespesa ="";
  $scope.emailAddress ="";
  
  $scope.rooms = [
  { room: 'Passagem Aérea', Despesa: 4550 },
  { room: 'Hospedagem', Despesa: 2795 },
  { room: 'Alimentação', Despesa: 1300 },
  { room: 'Ingresso Museu', Despesa: 100 },
  { room: 'Ingresso Show', Despesa: 700 },
  { room: 'Transportes', Despesa: 1000 },
  { room: 'Passeios Pacotes', Despesa: 1000 },
  { room: 'Lembrancinhas', Despesa: 500 },
  { room: 'Compras Mercado', Despesa: 3000 }
];
  
  $scope.test = function(){
    var Despesa = $scope.total;
    for(var index in $scope.rooms){
       Despesa -= $scope.rooms[index].Despesa; 
    }
    return Despesa;
};
  
  $scope.delete = function(index){
    $scope.rooms.splice(index, 1);
  }
  
  $scope.add = function()
  {
    $scope.rooms.push({room: $scope.addRoom, Despesa:$scope.addDespesa});
    $scope.addRoom ="";
    $scope.addDespesa ="";
  }
  
  $scope.email = function()
  {
    var data = ""
        for(var index in $scope.rooms){
       data += $scope.rooms[index].room +': R$'+$scope.rooms[index].Despesa + '.\r\n  '; 
    }
    
    window.open('mailto:'+ $scope.emailAddress +'?subject=Finance&body='+data);
  }
  
});