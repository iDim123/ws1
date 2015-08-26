//Home Controlles
(function (Controllers, undefined) {

  //Home Page Controller
  app.Modules.app.controller('HomePageCtrl', ['$scope', function ($scope) {
    console.log("I am the controller for the home page");
  }]);


  //News Controller for Home Page
  app.Modules.app.controller('NewsCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("I am the News controller for the home page");
    $http.get('json/news.json').success(function (data) {
      $scope.news = data;
    }).error(function () {
      console.log("Cannot find 'json/news.json'");
    })
  }]);


}(app.Controllers = app.Controllers || {}));