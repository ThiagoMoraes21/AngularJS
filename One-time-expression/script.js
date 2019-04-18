(function() {
    'use strict';

    angular
        .module('myApp', [])
        .controller('EventController', ['$scope', ($scope) => {
            var counter = 0;
            var names = ['Igor', 'Misko', 'Chirayu', 'Lucas'];

            $scope.clickMe = (clickEvent) => {
                $scope.name = names[counter % names.length];
                counter++;
            }
        }]);
})();