(function (angular) {
    'use strict';

    angular
        .module('Relatorio', ['ScrollTop', 'ScrollBottom', 'BootstrapFileInput',
                 'FileReader', 'QuickViewModule'])

        .controller('mainCtrl', ['$scope', 'fileReader', function ($scope, fileReader){
            $scope.cards  = [
                {"name":"KONICA", "serie": "ASD930202003", "model": "BH-2393", "pv": "789.321", "av" : "5,09"},
                {"name":"KONICA", "serie": "ASDGA2452653", "model": "BH-2393", "pv": "123.321", "av" : "5,09"},
                {"name":"KONICA", "serie": "JGFJFG434534", "model": "ER-3452", "pv": "789.321", "av" : "5,09"},
                {"name":"KONICA", "serie": "3453453DG343", "model": "ASD-345", "pv": "545.212", "av" : "5,09"},
                {"name":"KONICA", "serie": "SDFG43453535", "model": "DF-4555", "pv": "789.321", "av" : "5,09"}    
            ];
            $scope.getFile = function () {
                $scope.progress = 0;
                fileReader.readAsDataUrl($scope.file, $scope)
                              .then(function(result) {
                                  $scope.imageSrc = result;
                              });
            };
         
            $scope.$on("fileProgress", function(e, progress) {
                $scope.progress = progress.loaded / progress.total;
            });

            $scope.readFile = function () {            
                fileReader.readAsDataUrl($scope.file, $scope)
                          .then(function(result) {
                                $scope.imageSrc = result;
                            });
            };
        }]);

})(window.angular);