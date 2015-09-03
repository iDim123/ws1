/*(function (Services, undefined){
  
  app.Modules.app.service('playersDataService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
    var deferred = $q.defer();
    $http.get('json/players.json').success(function(data){
      deferred.resolve(data);
    }).error(function () {
      console.log("Cannot find 'json/players.json'");
    });
    
    this.getPlayers = function(){
      return deferred.promise;
    }
  
  }]);
  
}(app.Services = app.Services || {}));*/