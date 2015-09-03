//Home Directives
(function(Directives,undefined){
  
 app.Modules.app.directive('projects', [function(){
    return{
      restrict: 'E',
      controller: 'ProjectsCtrl',
      templateUrl: app.TemplatePath + "/projects.html",
      link: function(scope, elm, attrs){
        //console.log("Directive 4 projects");
      }
    }
  }]);
  
}(app.Directives = app.Directives || {} ));