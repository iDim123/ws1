//Achievements Controlles
(function (Controllers, undefined) {

  app.Modules.app.controller('GalleryCtrl', ['$scope', 'testService', function ($scope, testService) {
     $scope.myvideos = [      {
        "gameurl": "vB8xqdIbWMs"
     }, {
        "gameurl": "S4k3ikvEY24"
     }, {
        "gameurl": "vFSv2A-jHEY"
     }];
  }]);

  app.Modules.app.controller('Ctrl', ['$scope', '$document', function ($scope, $document) {
    this.images  = [{
    "thumb": "images/gallery/thumbs/1.jpg",
    "img": "images/gallery/1.jpg",
    "description": "GuildWars2"
  }, {
    "thumb": "images/gallery/thumbs/2.jpg",
    "img": "images/gallery/2.jpg",
    "description": "GuildWars2"
  }, {
    "thumb": "images/gallery/thumbs/3.jpg",
    "img": "images/gallery/3.jpg",
    "description": "Blade&Soul"
  }, {
    "thumb": "images/gallery/thumbs/4.jpg",
    "img": "images/gallery/4.jpg",
    "description": "Blade&Soul"
  }, {
    "thumb": "images/gallery/thumbs/5.jpg",
    "img": "images/gallery/5.jpg",
    "description": "Blade&Soul"
  }, {
    "thumb": "images/gallery/thumbs/6.jpg",
    "img": "images/gallery/6.jpg",
    "description": "Blade&Soul"
  }, {
    "thumb": "images/gallery/thumbs/7.jpg",
    "img": "images/gallery/7.jpg",
    "description": "ArcheAge"
  }, {
    "thumb": "images/gallery/thumbs/8.jpg",
    "img": "images/gallery/8.jpg",
    "description": "ArcheAge"
  }, {
    "thumb": "images/gallery/thumbs/9.jpg",
    "img": "images/gallery/9.jpg",
    "description": "ArcheAge"
  }, {
    "thumb": "images/gallery/thumbs/10.jpg",
    "img": "images/gallery/10.jpg",
    "description": "ArcheAge"
  }, {
    "thumb": "images/gallery/thumbs/11.jpg",
    "img": "images/gallery/11.jpg",
    "description": "ArcheAge"
  }, {
    "thumb": "images/gallery/thumbs/12.jpg",
    "img": "images/gallery/12.jpg",
    "description": "ArcheAge"
  }, {
    "thumb": "images/gallery/thumbs/13.jpg",
    "img": "images/gallery/13.jpg",
    "description": "Wow"
  }, {
    "thumb": "images/gallery/thumbs/14.jpg",
    "img": "images/gallery/14.jpg",
    "description": "Wow"
  }, {
    "thumb": "images/gallery/thumbs/15.jpg",
    "img": "images/gallery/15.jpg",
    "description": "Blade&Soul"
  }
];
  }]);

}(app.Controllers = app.Controllers || {}));