//Players Table Directives
(function (Directives, undefined) {

  app.Modules.app.$inject = ['$scope', '$filter'];

 /* app.Modules.app.directive('pagination', ['$parse', 'paginationConfig',
  function ($parse, config) {
      return {
          restrict: 'EA',
          scope: {
              page: '=',
              totalItems: '=',
              onSelectPage: ' &'
          },
          controller: 'PaginationController',
          templateUrl: 'templates/pagination/paginator.html',
          replace: true,
          link: function (scope, element, attrs, paginationCtrl) {

              // Setup configuration parameters
              var maxSize,
                boundaryLinks = paginationCtrl.getAttributeValue(attrs.boundaryLinks, config.boundaryLinks),
                directionLinks = paginationCtrl.getAttributeValue(attrs.directionLinks, config.directionLinks),
                firstText = paginationCtrl.getAttributeValue(attrs.firstText, config.firstText, true),
                previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true),
                nextText = paginationCtrl.getAttributeValue(attrs.nextText, config.nextText, true),
                lastText = paginationCtrl.getAttributeValue(attrs.lastText, config.lastText, true),
                rotate = paginationCtrl.getAttributeValue(attrs.rotate, config.rotate);

              paginationCtrl.init(config.itemsPerPage);

              if (attrs.maxSize) {
                  scope.$parent.$watch($parse(attrs.maxSize), function (value) {
                      maxSize = parseInt(value, 10);
                      paginationCtrl.render();
                  });
              }

              // Create page object used in template
              function makePage(number, text, isActive, isDisabled) {
                  return {
                      number: number,
                      text: text,
                      active: isActive,
                      disabled: isDisabled
                  };
              }

              paginationCtrl.getPages = function (currentPage, totalPages) {
                  var pages = [];

                  // Default page limits
                  var startPage = 1,
                    endPage = totalPages;
                  var isMaxSized = (angular.isDefined(maxSize) && maxSize < totalPages);

                  // recompute if maxSize
                  if (isMaxSized) {
                      if (rotate) {
                          // Current page is displayed in the middle of the visible ones
                          startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
                          endPage = startPage + maxSize - 1;

                          // Adjust if limit is exceeded
                          if (endPage > totalPages) {
                              endPage = totalPages;
                              startPage = endPage - maxSize + 1;
                          }
                      } else {
                          // Visible pages are paginated with maxSize
                          startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

                          // Adjust last page if limit is exceeded
                          endPage = Math.min(startPage + maxSize - 1, totalPages);
                      }
                  }

                  // Add page number links
                  for (var number = startPage; number <= endPage; number++) {
                      var page = makePage(number, number, paginationCtrl.isActive(number), false);
                      pages.push(page);
                  }

                  // Add links to move between page sets
                  if (isMaxSized && !rotate) {
                      if (startPage > 1) {
                          var previousPageSet = makePage(startPage - 1, '...', false, false);
                          pages.unshift(previousPageSet);
                      }

                      if (endPage < totalPages) {
                          var nextPageSet = makePage(endPage + 1, '...', false, false);
                          pages.push(nextPageSet);
                      }
                  }

                  // Add previous & next links
                  if (directionLinks) {
                      var previousPage = makePage(currentPage - 1, previousText, false, paginationCtrl.noPrevious());
                      pages.unshift(previousPage);

                      var nextPage = makePage(currentPage + 1, nextText, false, paginationCtrl.noNext());
                      pages.push(nextPage);
                  }

                  // Add first & last links
                  if (boundaryLinks) {
                      var firstPage = makePage(1, firstText, false, paginationCtrl.noPrevious());
                      pages.unshift(firstPage);

                      var lastPage = makePage(totalPages, lastText, false, paginationCtrl.noNext());
                      pages.push(lastPage);
                  }

                  return pages;
              };
          }
      };
  }
]);*/
  
  app.Modules.app.directive("customSort", ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      transclude: true,
      scope: {
        order: '=',
        sort: '='
      },
      template: ' <a ng-click="sort_by(order)" style="color: #555555;">' +
        '    <ng-transclude></ng-transclude>' +
        '    <i ng-class="selectedCls(order)"></i>' +
        '</a>',
      link: function (scope, element, attrs) {
        $timeout(function () {


          // change sorting order
          scope.sort_by = function (newSortingOrder) {
            var sort = scope.sort;

            if (sort.sortingOrder == newSortingOrder) {
              sort.reverse = !sort.reverse;
            }

            sort.sortingOrder = newSortingOrder;
          };

          scope.selectedCls = function (column) {
            if (column == scope.sort.sortingOrder) {
              return ('glyphicon glyphicon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
            } else {
              return 'glyphicon glyphicon-sort'
            }
          };


        }, 100); // end link icon-sort
      }
    }
        }]);

 /* app.Modules.app.directive('pager', ['pagerConfig',
  function (config) {
      return {
          restrict: 'EA',
          scope: {
              page: '=',
              totalItems: '=',
              onSelectPage: ' &'
          },
          controller: 'PaginationController',
          templateUrl: 'templates/pagination/pager.html',
          replace: true,
          link: function (scope, element, attrs, paginationCtrl) {

              // Setup configuration parameters
              var previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true),
                nextText = paginationCtrl.getAttributeValue(attrs.nextText, config.nextText, true),
                align = paginationCtrl.getAttributeValue(attrs.align, config.align);

              paginationCtrl.init(config.itemsPerPage);

              // Create page object used in template
              function makePage(number, text, isDisabled, isPrevious, isNext) {
                  return {
                      number: number,
                      text: text,
                      disabled: isDisabled,
                      previous: (align && isPrevious),
                      next: (align && isNext)
                  };
              }

              paginationCtrl.getPages = function (currentPage) {
                  return [
                    makePage(currentPage - 1, previousText, paginationCtrl.noPrevious(), true, false),
                    makePage(currentPage + 1, nextText, paginationCtrl.noNext(), false, true)
                  ];
              };
          }
      };
  }
]);*/
  
  
}(app.Directives = app.Directives || {}));