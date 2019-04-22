(function(){
    'use strict';

    angular
        .module('myApp', [])
        .controller('appController', function($scope, random) {
            $scope.genarateRandomNum = function() {
                $scope.randomNum = random.genarate();
            }
        })
        .factory('random', function() {
            var randomObj = {};
            var num = Math.floor(Math.random() * 10);
            randomObj.genarate = function() {
                return num;
            }
            return randomObj;
        });


}());