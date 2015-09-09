//Achievements Controlles
(function (Controllers, undefined) {

  app.Modules.app.controller('DungeonsTabsCtrl', ['$scope', '$http', '$sce', 'dungeons','$timeout', function ($scope, $http, $sce, dungeons,$timeout) {
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
    
    /*$scope.showAll = function($event){
      $event.target 
      //console.log(mybosses.css('heigth'));
    }*/
    
    /*this.myafter = $timeout(function(){
      var quest = angular.element(document.querySelector(".dungeon_main-conteiner"));
      quest.on('click', function(e){
        //console.log(e);
        var mybosses = quest.find('.d-col-bosses');
        console.log(mybosses.css('heigth'));
      });
      //var mybosses = quest.find('.d-col-bosses');
     /* console.log(mybosses.height);
      console.log("555");*/
   /* },500);*/
    
    //var questHeader = quest.find('h3');
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
        return "&#9733;&#9734;&#9733;&#9734;&#9734;";
      }

    }
  });
  app.Modules.app.filter('html', function ($sce) {
    return $sce.trustAsHtml;
  });
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