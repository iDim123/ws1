//Home Directives
(function(Directives,undefined){
  
  app.Modules.app.directive('tabsContent', [function(){
    return{
      restrict: 'E',
      templateUrl: app.TemplatePath + "achivements/tabs.html",
      link: function(scope, elment, attrs){
        console.log("Directive 2 achievements");
      }
    }
  }]);
  
}(app.Directives = app.Directives || {} ));