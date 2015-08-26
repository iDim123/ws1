//Players Table Directives
(function (Directives, undefined){
  
  app.Modules.app.directive('playersTable', [ function(){
    return{
      restrict: "E",
      controller: "PlayersTableCtrl",
      link: function(scope, elm , attrs){
        console.log("I am the directive for the players Table page")
      }
    }
  }])
  
}(app.Directives = app.Directives || {}));