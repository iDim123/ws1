//Players Table Factory
(function (Factory, undefined) {

  app.Modules.app.factory('players', ['$http', function ($http) {
    return {
      list: function (callback) {
        $http({
          method: 'GET',
          url: 'json/players.json',
          cache: true
        }).success(callback);
      },
      mylist: function (callback) {
        $http.get('json/players.json').success(callback);
      }
    }
  }]).factory('dungeons', ['$http', function ($http) {
    return {
      list: function (callback) {
        $http({
          method: 'GET',
          url: 'json/dungeons.json',
          cache: true
        }).success(callback);
      },
      mylist: function (callback) {
        $http.get('json/dungeons.json').success(callback);
      }
    }
  }]).factory('testing', ['$http', function ($http) {
    return {
      list: function (callback) {
        $http({
          method: 'GET',
          url: 'json/test.json',
          cache: true
        }).success(callback);
      }     
    }
  }]).factory('projects', ['$http','$q', function ($http,$q) {
    return {
       getData: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: 'json/projects.json'}).
             success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;
        }
    }
  }])
}(app.Factory = app.Factory || {}));