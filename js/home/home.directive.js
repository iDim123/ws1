//Home Directives
(function(Directives,undefined){
  
  app.Modules.app.directive('homepage', [function () {
    return{
      restrict: 'E',
      controller: 'HomePageCtrl',
      link: function(scope, elm, attrs){
        console.log("I am the directive for the home page");
      }
    }
  }]);
  
}(app.Directives = app.Directives || {} ));