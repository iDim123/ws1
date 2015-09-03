//Players Table Controlles
(function (Controllers, undefined) {

  app.Modules.app.controller('PlayersTableCtrl', ['$scope', '$filter','$timeout','players', function ($scope, $filter,$timeout, players) {
  
    $scope.countPlayersRoles = function(players, role){
      var counter = 0;
      angular.forEach(players, function(player, index){
        if(player.Specialization === role){
          counter++;
        }
      });
      return counter;
    }
    
    players.mylist(function (players) {
      $scope.items = players;
      
   //$scope.dd = $scope.countPlayersRoles($scope.items, "ДД"); 
    //});

      /*    $scope.sortField = undefined;
          $scope.reverse = false;

          $scope.sort = function (fieldName) {
            if ($scope.sortField === fieldName) {
              $scope.reverse = !$scope.reverse;
            } else {
              $scope.sortField = fieldName;
              $scope.reverse = false;
            }
          }*/

      // init
  //$timeout(function () {
         
     
         
      $scope.sort = {
        sortingOrder: 'id',
        reverse: false
      };

      $scope.gap = 4;

      $scope.filteredItems = [];
      $scope.groupedItems = [];
      $scope.itemsPerPage = 15;
      $scope.pagedItems = [];
      $scope.currentPage = 0;
      
      var searchMatch = function (haystack, needle) {
        if (!needle) {
          return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
      };

      // init the filtered items
      $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
          for (var attr in item) {
            if (searchMatch(item[attr], $scope.query))
              return true;
          }
          return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
          $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();
      };

      // calculate page in place
      $scope.groupToPages = function () {
        $scope.pagedItems = [];

        for (var i = 0; i < $scope.filteredItems.length; i++) {
          if (i % $scope.itemsPerPage === 0) {
            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
          } else {
            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
          }
        }
      };

      $scope.range = function (size, start, end) {
        var ret = [];
        //console.log(size, start, end);

        if (size < end) {
          end = size;
          start = size - $scope.gap;
        }
        for (var i = start; i < end; i++) {
          ret.push(i);
        }
        //console.log(ret);
        return ret;
      };

      $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
          $scope.currentPage--;
        }
      };

      $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
          $scope.currentPage++;
        }
      };

      $scope.setPage = function () {
        $scope.currentPage = this.n;
      };

      // functions have been describe process the data for display
      $scope.search();
 
    });
 }]);
 
 /* app.Modules.app.controller('PaginationController', ['$scope', '$attrs', '$parse', '$interpolate',
  function ($scope, $attrs, $parse, $interpolate) {
      var self = this,
        setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

      this.init = function (defaultItemsPerPage) {
          if ($attrs.itemsPerPage) {
              $scope.$parent.$watch($parse($attrs.itemsPerPage), function (value) {
                  self.itemsPerPage = parseInt(value, 10);
                  $scope.totalPages = self.calculateTotalPages();
              });
          } else {
              this.itemsPerPage = defaultItemsPerPage;
          }
      };

      this.noPrevious = function () {
          return this.page === 1;
      };
      this.noNext = function () {
          return this.page === $scope.totalPages;
      };

      this.isActive = function (page) {
          return this.page === page;
      };

      this.calculateTotalPages = function () {
          var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
          return Math.max(totalPages || 0, 1);
      };

      this.getAttributeValue = function (attribute, defaultValue, interpolate) {
          return angular.isDefined(attribute) ? (interpolate ? $interpolate(attribute)($scope.$parent) : $scope.$parent.$eval(attribute)) : defaultValue;
      };

      this.render = function () {
          this.page = parseInt($scope.page, 10) || 1;
          if (this.page > 0 && this.page <= $scope.totalPages) {
              $scope.pages = this.getPages(this.page, $scope.totalPages);
          }
      };

      $scope.selectPage = function (page) {
          if (!self.isActive(page) && page > 0 && page <= $scope.totalPages) {
              $scope.page = page;
              $scope.onSelectPage({
                  page: page
              });
          }
      };

      $scope.$watch('page', function () {
          self.render();
      });

      $scope.$watch('totalItems', function () {
          $scope.totalPages = self.calculateTotalPages();
      });

      $scope.$watch('totalPages', function (value) {
          setNumPages($scope.$parent, value); // Readonly variable

          if (self.page > value) {
              $scope.selectPage(value);
          } else {
              self.render();
          }
      });
  }
]);
  
   app.Modules.app.constant('paginationConfig', {
    itemsPerPage: 10,
    boundaryLinks: false,
    directionLinks: true,
    firstText: 'First',
    previousText: 'Previous',
    nextText: 'Next',
    lastText: 'Last',
    rotate: true
     
});
   app.Modules.app.constant('pagerConfig', {
    itemsPerPage: 10,
    previousText: 'Â« Previous',
    nextText: 'Next Â»',
    align: true
});
  */
  
}(app.Controllers = app.Controllers || {}));