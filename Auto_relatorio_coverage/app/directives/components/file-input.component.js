'use strict';

angular
    .module('FileInput', ['FileReader'])
    .directive('fileInput', ['fileReader', '$parse', fileInput]);

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

            scope.$on("fileProgress", function (e, progress) {
                ctrl.progress = progress.loaded / progress.total;
            });

        },
        controller: fileInputController,
        controllerAs: 'ctrl'
    };

    function fileInputController(fileReader) {
        var ctrl = this;
        ctrl.getFile = function () {
        ctrl.progress = 0;
        fileReader.readAsDataUrl(ctrl.file, ctrl)
                      .then(function(result) {
                          ctrl.imageSrc = result;
                      });
        };
     
    //     ctrl.$on("fileProgress", function(e, progress) {
    //         ctrl.progress = progress.loaded / progress.total;
    //     });

        ctrl.readFile = function () {            
            fileReader.readAsDataUrl(ctrl.file, ctrl)
                        .then(function(result) {
                            ctrl.imageSrc = result;
                        });
        };
    }
};

