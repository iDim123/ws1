//Home Controlles
(function (Controllers, undefined) {

  app.Modules.app.controller('ProjectsCtrl', ['$scope','$http', function($scope ,$http){
    $http.get("json/projects.json").success(function(data){
      $scope.projects = data;
    });
  }]); 
  
}(app.Controllers = app.Controllers || {}));