(function() {
    'use strict';

    angular
        .module('myApp', [])
        .controller('FilterController', ['$scope', 'filterFilter', function FilterController($scope, filterFilter) {
            $scope.names = [
                {name: 'Tobias'},
                {name: 'Jeff'},
                {name: 'Brian'},
                {name: 'Igor'},
                {name: 'James'},
                {name: 'Brad'}
            ];
            $scope.filteredArray = function(name) {
                return filterFilter($scope.names, name);
            }
        }]);

})();