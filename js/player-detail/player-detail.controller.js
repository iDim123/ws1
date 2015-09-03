(function (Controllers, undefined) {

  app.Modules.app.controller('PlayerDetailCtrl', 
    ['$scope', '$routeParams', 'playersDataService','players',
    function ($scope, $routeParams, playersDataService, players) {
      var promise = playersDataService.getPlayers();
      //=========================================
      //Вариант 1 (service) 
      /*promise.then(function (data) {
        angular.forEach(data, function (item, i) {
          if (item.Id === Number($routeParams.playerId)) {
            $scope.player = item;
          }
        });
      })*/
      //----------------------------
      //Вариант 2 (service)
      /*promise.then(function (data) {
        $scope.player = data.filter(function(entry){
          return entry.Id === Number($routeParams.playerId);
        })[0];
        console.log($scope.player);
      })
      */
      //Вариант 3 (factory)
      players.list(function (data) {
        $scope.player = data.filter(function(entry){
          return entry.Id === Number($routeParams.playerId);
        })[0];
        console.log($scope.player);
      })
      
      //=========================================
    }]);

}(app.Controllers = app.Controllers || {}));