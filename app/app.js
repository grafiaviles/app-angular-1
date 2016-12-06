angular.module('miapp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('ListTodo', {
        url: '/',
        controller:'ListController',
        templateUrl:'app/views/list.html',
      })
    $urlRouterProvider.otherwise('/')
})
angular.module('miapp')
  .controller('ListController', function($scope) {
    $scope.todos = [
      {id: 1, desc: 'Todo 1', completado: true},
      {id: 2, desc: 'Todo 2', completado: false}
    ]
    $scope.desc = ''

    $scope.agregar = function agregar () {
      $scope.todos.push({
        id: (new Date()).getTime(),
        desc: $scope.desc,
        completado: false,
      })
      $scope.desc = ''
    }
  })