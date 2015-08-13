//Controllers

//--NewsListCtrl--
app.controller('NewsListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('json/news.json').success(function (data) {
    $scope.news = data;
  }).error(function () {
    console.log("Cannot find 'json/news.json'");
  });
}]);

//--Players Tree Ctrl--
app.controller('PlayersTreeCtrl', ['$scope', function ($scope) {
  $scope.title = "PlayersTreeCtrl";
  console.log($scope.title);
}]);


//--Players Table Ctrl--
app.controller('PlayersTableCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('json/players.json').success(function (data) {
    $scope.players = data;
  });
  
  $scope.sortField = undefined;
  $scope.reverse = false;
  
  $scope.sort = function(fieldName){
    if($scope.sortField === fieldName){
      $scope.reverse = !$scope.reverse;
    } else{
      $scope.sortField = fieldName;
      $scope.reverse = false;
    }
  }
}]);



//--RegistrationCtrl--
app.controller('RegistrationCtrl', ['$scope', function ($scope) {
  $scope.title = "RegistrationCtrl";
  console.log($scope.title);
}]);

//--LandingPageCtrl--
/*app.controller('RegistrationCtrl', ['$scope', function($scope){
  $scope.title = "RegistrationCtrl";
  console.log($scope.title);
}]); */