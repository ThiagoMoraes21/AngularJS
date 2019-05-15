angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('PaginationDemoCtrl', function ($scope, $log) {
  $scope.totalItems = 30;
  $scope.currentPage = 5;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 10;
  $scope.bigTotalItems = 20;
  $scope.bigCurrentPage = 1;
});