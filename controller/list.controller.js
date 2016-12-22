angular.module('miapp')
  .config(function('ListController', function($scope, $timeout, Tweets) {
    $scope.Tweets = Tweets
    $scope.mostrar = true
    
    $scope.cargando = false
    $scope.enviado = false
    $scope.enviar = false function enviar () {
        $scope.cargando = true
        $timeout (function(){
            $scope.cargando = false
            $scope.enviado = true
        }, 1000)
    }
})



