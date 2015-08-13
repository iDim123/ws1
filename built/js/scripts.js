$(document).ready(function () {
  $('.carousel').carousel();
  
  var appPage =
    {
        initialize: function () {
            this.setUpListeners();
            $('.page:first-child').addClass('active');
            //this.showSection(window.location.hash, false);
        },
        setUpListeners: function () {
            $('body').on('mousewheel', this.wheelPageAnimate);
            $('.nav__item-link').on('click', this.clickPageAnimate);
        },
        screen: 0,
        conteiner: $('.maincontent'),
        pages: $('.page'),
        inscroll: false,
        navSidebar: $('nav-sidebar'),
        wheelPageAnimate: function (e) {
            e.preventDefault();

            var activePage = appPage.pages.filter('.active');
            var position = (-appPage.screen * 100) + '%';

            if (!appPage.inscroll) {
                appPage.inscroll = true;
                if (e.deltaY > 0) {
                    if (activePage.prev().length) {
                        appPage.screen--;
                    }
                } else {
                    if (activePage.next().length) {
                        appPage.screen++;
                    }
                }
            }
            appPage.transitionAnimate(position);
        },
        clickPageAnimate: function (e) {
            e.preventDefault();

            appPage.screen = Number($(this).attr('href').replace(/#p/, '') - 1);
            var position = (-appPage.screen * 100) + '%';

            appPage.transitionAnimate(position);
        },
        transitionAnimate: function (position) {

            appPage.pages.eq(appPage.screen).addClass('active').siblings().removeClass('active');
            appPage.conteiner.css('top', position);

            if (appPage.screen === 0 || (appPage.screen === appPage.pages.length - 1)) {
                setTimeout(function () {
                    appPage.inscroll = false;
                }, 1300);
            } else {
                appPage.conteiner.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                    appPage.inscroll = false;
                });
            }
            appPage.navSidebar.find('.nav__item').eq(appPage.screen).addClass('mynav-active').siblings().removeClass('mynav-active');

        },
    };
    //appPage.initialize();
   
});

var app = angular.module('app',['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,   $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
        .state("home", {
          url: "/",
          templateUrl: 'templates/home.html',
          controller : 'NewsListCtrl'
        })       
        .state("players_tree", {
          url: "/players_tree",
          templateUrl: 'templates/players_tree.html',
          controller: 'PlayersTreeCtrl'
        })
        .state("players_table", {
          url: "/players_table",
          templateUrl: 'templates/players_table.html',
          controller: 'PlayersTableCtrl'
        })
        .state("registration", {
          url: "/registration",
          templateUrl: 'templates/registration.html',
          controller : 'RegistrationCtrl'
        })
}]);
//Controllers

//--NewsListCtrl--
app.controller('NewsListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('json/news.json').success(function (data) {
    $scope.news = data;
  }).error(function () {
    console.log("Cannot find 'json/news.json'");
  });
}]);

//--Players Tree Ctrl--
app.controller('PlayersTreeCtrl', ['$scope', function ($scope) {
  $scope.title = "PlayersTreeCtrl";
  console.log($scope.title);
}]);


//--Players Table Ctrl--
app.controller('PlayersTableCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('json/players.json').success(function (data) {
    $scope.players = data;
  });
  
  $scope.sortField = undefined;
  $scope.reverse = false;
  
  $scope.sort = function(fieldName){
    if($scope.sortField === fieldName){
      $scope.reverse = !$scope.reverse;
    } else{
      $scope.sortField = fieldName;
      $scope.reverse = false;
    }
  }
}]);



//--RegistrationCtrl--
app.controller('RegistrationCtrl', ['$scope', function ($scope) {
  $scope.title = "RegistrationCtrl";
  console.log($scope.title);
}]);

//--LandingPageCtrl--
/*app.controller('RegistrationCtrl', ['$scope', function($scope){
  $scope.title = "RegistrationCtrl";
  console.log($scope.title);
}]); */
//Directives