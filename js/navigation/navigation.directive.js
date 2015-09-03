(function (Directives, undefined) {

  app.Modules.app.directive("loginWindow", function () {

    return {
      restrict: 'E',
      templateUrl: app.TemplatePath + 'general/login.html',
      link: function (scope, element, attrs) {}
    }
  });

}(app.Directives = app.Directives || {}));