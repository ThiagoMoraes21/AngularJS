(function (angular) {
    'use strict';

    angular
        .module('Relatorio', ['ScrollTop', 'ScrollBottom', 'BootstrapFileInput',
                 'FileReader', 'QuickViewModule'])

        .controller('mainCtrl', ['$scope', 'fileReader', function ($scope, fileReader){
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