//Players Table Controlles
(function (Controllers, undefined) {

  //Players Table Page Controller
  app.Modules.app.controller('PlayersTableCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("I am the controller for the players table");

    $http.get('json/players.json').success(function (data) {
      $scope.players = data;
    });

    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function (fieldName) {
      if ($scope.sortField === fieldName) {
        $scope.reverse = !$scope.reverse;
      } else {
        $scope.sortField = fieldName;
        $scope.reverse = false;
      }
    }
  }]);


}(app.Controllers = app.Controllers || {}));