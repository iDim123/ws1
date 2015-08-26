(function(Configs, undefined){
  
  app.Modules.app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl: app.TemplatePath + '/home.html',
      controller: 'HomePageCtrl'
    })
    .when('/projects',{
      templateUrl: app.TemplatePath + '/projects.html' 
      //controller: 'ProjectsCtrl'
    })
    .when('/gallery',{
      templateUrl: app.TemplatePath + '/gallery.html'  
      //controller: 'GalleryCtrl'
    })
    .when('/players_tree',{
      templateUrl: app.TemplatePath + '/players_tree.html'  
      //controller: 'PlayersTreeCtrl'
    })
    .when('/players_table',{
      templateUrl: app.TemplatePath + '/players_table.html'  
      //controller: 'PlayersTableCtrl'
    })
    .when('/registration',{
      templateUrl: app.TemplatePath + '/registration.html'  
      //controller: 'RegistrationCtrl'
    })
    .otherwise({
      redirectTo: '/',
      templateUrl: app.TemplatePath + '/home.html'  
    })
  }]);
  
}(app.Configs = app.Configs || {}));

