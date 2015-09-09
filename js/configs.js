(function(Configs, undefined){
  
  app.Modules.app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl: app.TemplatePath + '/homepage.html',
      controller: 'HomeCtrl'
    }) 
    .when('/achievements',{
      templateUrl: app.TemplatePath + 'achivements/achievements.html', 
      controller: 'DungeonsTabsCtrl'
    })
    .when('/gallery',{
      templateUrl: app.TemplatePath + '/gallery.html', 
      controller: 'GalleryCtrl'
    })
    .when('/projects',{
      templateUrl: app.TemplatePath + '/projects.html', 
      controller: 'ProjectsCtrl'
    })
    .when('/players_tree',{
      templateUrl: app.TemplatePath + '/players_tree.html'  
    })
    .when('/players_table',{
      templateUrl: app.TemplatePath + '/players_table.html'  
    })
    .when('/registration',{
      templateUrl: app.TemplatePath + '/general/registration.html' 
    })
    .when('/contact',{
      templateUrl: app.TemplatePath + '/general/contact.html' 
    })
    .when('/players_table/:playerId',{
      templateUrl: app.TemplatePath + '/player-detail.html',  
      controller: 'PlayerDetailCtrl'
    })
    .otherwise({
      redirectTo: '/',
      templateUrl: app.TemplatePath + '/home.html'  
    })
  }]);
  
}(app.Configs = app.Configs || {}));

