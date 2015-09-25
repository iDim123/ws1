//Achievements Controlles
(function (Controllers, undefined) {

  app.Modules.app.controller('DungeonsTabsCtrl', ['$scope', '$http', 'dungeons', '$timeout', '$sce', function ($scope, $http, dungeons, $timeout, $sce) {
    $scope.dungeonvalue = 'lvl45';
    $http.get('json/dungeons.json').success(function (data) {
      $scope.dungeons = data;
    }).error(function () {
      console.log("Cannot find 'json/news.json'");
    });
    $scope.ProggressCalc = function (dung) {
      var progress = 0;
      angular.forEach(dung.Bosses, function (Boss, index) {
        if (Boss.Killed) {
          progress++;
        }
      })
      return progress;
    }
    $scope.dungeonComplete = function (progress, allbosses) {
      if (progress >= allbosses)
        return "kill-all";
      else
        return "kill-not-all";
    }
    $scope.to_trusted = function (html_code) {
      return $sce.trustAsHtml(html_code);
    }
  }]);

  app.Modules.app.filter("hardStar", function () {
    return function (stars) {
      if (stars > 4) {
        return "&#9733;&#9733;&#9733;&#9733;&#9733;";
      } else if (stars > 3) {
        return "&#9733;&#9733;&#9733;&#9733;&#9734;";
      } else if (stars > 2) {
        return "&#9733;&#9733;&#9733;&#9734;&#9734;";
      } else if (stars > 1) {
        return "&#9733;&#9733;&#9734;&#9734;&#9734;";
      } else if (stars > 0) {
        return "&#9733;&#9734;&#9734;&#9734;&#9734;";
      }
    }
  });
    app.Modules.app.filter('to_html', ['$sce', function ($sce) {
      return function (text) {
        return $sce.trustAsHtml(text);
      }
    }]);

  app.Modules.app.filter('dungeonFilter', function () {
    return function (items, value) {
      var filtered = [];
      if (items !== undefined) {
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (value == "lvl45") {
            if (item.Lvl == 45) {
              filtered.push(item);
            }
          } else if (value == "lvl-45") {
            if (item.Lvl < 45) {
              filtered.push(item);
            }
          } else if (value == "lvl+45") {
            if (item.Lvl > 45) {
              filtered.push(item);
            }
          } else if (value == "solo") {
            if (item.PeopleNeed == 1) {
              filtered.push(item);
            }
          }
        }
        return filtered;
      }
    }
  });

}(app.Controllers = app.Controllers || {}));