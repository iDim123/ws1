//Home Controlles
(function (Controllers, undefined) {

  app.Modules.app.controller('ProjectsCtrl', ['$scope','$http','projects', function($scope ,$http,projects){
    $http.get("json/projects.json").success(function(data){
      $scope.projects = data;
    });
/*    $scope.projects = projects.getData();*/
  }]); 
  
}(app.Controllers = app.Controllers || {}));