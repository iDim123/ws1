//Controllers
var app = angular.module('app',['ui.router']);

/*
app.config(['$urlRouterProvider', function($urlRouterProvider){
  $urlRouterProvider
  .when('/',{
    templateUrl:'template/home.html',
    controller : 'HomeCtrl'
  })
  .when('/player',{
    templateUrl:'template/player.html',
    controller : 'PlayerCtrl'
  })  
  .when('/registration',{
    templateUrl:'template/registration.html',
    controller : 'RegistrationCtrl'
  })
  .otherwise('/');
  
}]);
*/


app.controller('DemoCtrl', function($scope){
  $scope.name = 'world';
})

app.controller('NewsListCtrl', ['$scope','$http', function($scope, $http){
  $http.get('json/news.json').success(function(data, status, headers, config){
    $scope.news = data;
  }).error(function(){
    
  });
}]);