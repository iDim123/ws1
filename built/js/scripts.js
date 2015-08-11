/*angular.module('app',['ui.router'])
.config(['']);*/

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
    appPage.initialize();
   
});
//Controllers
var app = angular.module('app',['ui.router']);

/*
app.config(['$urlRouterProvider', function($urlRouterProvider){
  $urlRouterProvider
  .when('/',{
    templateUrl:'template/home.html',
    controller : 'HomeCtrl'
  })
  .when('/player',{
    templateUrl:'template/player.html',
    controller : 'PlayerCtrl'
  })  
  .when('/registration',{
    templateUrl:'template/registration.html',
    controller : 'RegistrationCtrl'
  })
  .otherwise('/');
  
}]);
*/


app.controller('DemoCtrl', function($scope){
  $scope.name = 'world';
})

app.controller('NewsListCtrl', ['$scope','$http', function($scope, $http){
  $http.get('json/news.json').success(function(data, status, headers, config){
    $scope.news = data;
  }).error(function(){
    
  });
}]);
//Directives