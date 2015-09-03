//Home Directives
(function(Directives,undefined){
  
  app.Modules.app.directive('dungeonsCollection', [function(){
    return{
      restrict: 'E',
      //controller: ,
      templateUrl: app.TemplatePath + "achivements/tabset.html",
      link: function(scope, elm, attrs){
        console.log("Directive 2 achievements");
      }
    }
  }]);
  
}(app.Directives = app.Directives || {} ));