'use strict';

angular
    .module('FileInput', ['FileReader'])
    .directive('fileInput', ['fileReader', fileInput]);

fileInput.$inject = ['$scope'];

function fileInput($parse) {
    return {
        restrict: "EA",
        template: `<div class="col-12 mt-5">
                        <img ng-src="{{ imageSrc }}"/>
                        <div on-change="readFile()">
                            <input type="file" />
                        </div>
                    </div>`,
        replace: true,          
        link: function (scope, element, attrs) {
            var modelGet = $parse(attrs.fileInput);
            var modelSet = modelGet.assign;
            var onChange = $parse(attrs.onChange);
 
            var updateModel = function () {
                scope.$apply(function () {
                    modelSet(scope, element[0].files[0]);
                    onChange(scope);
                });                    
            };
             
            element.bind('change', updateModel);

        },
        controller: fileInputController
    };

    function fileInputController(fileReader) {
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
    }
};

