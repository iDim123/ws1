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
  
}(app.Controllers = app.Controllers || {}));