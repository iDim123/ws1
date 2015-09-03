//Home Controlles
(function (Controllers, undefined) {

  app.Modules.app.controller('HomePageCtrl', [function(){
    //console.log("Controller 1 HomePageCtrl");
  }]);

  //News Controller for Home Page
  app.Modules.app.controller('NewsCtrl', ['$scope', '$http', function ($scope, $http) {
    //console.log("Controller 1 News");
    $http.get('json/news.json').success(function (data) {
      $scope.news = data;
    }).error(function () {
      console.log("Cannot find 'json/news.json'");
    })
  }]);
  
}(app.Controllers = app.Controllers || {}));