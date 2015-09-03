//Achievements Controlles
(function (Controllers, undefined) {

  app.Modules.app.controller('DungeonsTabsCtrl', ['$scope','dungeons', function ($scope,dungeons) {
    console.log("Controller 2 AchievementCtrl");
    $scope.dungeonsTabs = [{
      "tab1": [{
        "Id": 0,
        "Name": "",
        "BossCount": 0,
        "Difficult": 0,
        "Tactic": "",
        "Location": "",
        "ImgBg": "",
        "BossKilled": 0,
        "Bosses": [{
          "flag": "",
          "BossName": "",
          "Video": ""
        }]
      }],
      "tab2": [{
        "Id": 0,
        "Name": "",
        "BossCount": 0,
        "Difficult": 0,
        "Tactic": "",
        "Location": "",
        "ImgBg": "",
        "BossKilled": 0,
        "Bosses": [{
          "flag": "",
          "BossName": "",
          "Video": ""
        }]
      }],
      "tab3": [{
        "Id": 0,
        "Name": "",
        "BossCount": 0,
        "Difficult": 0,
        "Tactic": "",
        "Location": "",
        "ImgBg": "",
        "BossKilled": 0,
        "Bosses": [{
          "flag": "",
          "BossName": "",
          "Video": ""
        }]
      }],
      "tab4": [{
        "Id": 0,
        "Name": "",
        "BossCount": 0,
        "Difficult": 0,
        "Tactic": "",
        "Location": "",
        "ImgBg": "",
        "BossKilled": 0,
        "Bosses": [{
          "flag": "",
          "BossName": "",
          "Video": ""
        }]
      }],
    }];
    console.log($scope.dungeonsTabs);
    dungeons.list(function(data){
       console.log(data);
    });
    
  }]);

}(app.Controllers = app.Controllers || {}));