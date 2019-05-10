'use strict';

angular
    .module('FileInput', ['FileReader'])
    .directive('fileInput', ['fileReader', '$parse', fileInput]);
    
function fileInput ($parse) {
    return {
        restrict: "EA",
        template: `<input type="file">`,
        replace: true,          
        link: link,
        // controller: fileInputController,
        // controllerAs: 'scope'
    };

    function link(scope, element, attrs) {
        // var modelGet = $parse.readAsDataUrl(attrs.$$element["0"].children[1].children["0"]);
        var modelGet = $parse(attrs.fileInput)
        var modelSet = modelGet.assign;
        var onChange = $parse(attrs.onChange);

        var updateModel = function () {
            scope.$apply(function () {
                modelSet(scope, element[0].files[0]);
                onChange(scope);
            });                    
        };
             
        element.bind('change', updateModel);

        // scope.$on("fileProgress", function (e, progress) {
        //     console.log('Event: '+ e);
        //     console.log('Progress: ' + progress)
        //     scope.progress = progress.loaded / progress.total;
        // });

        // scope.readFile = function () {            
        //     scope.progress = 0;
        //     fileReader.readAsDataUrl(scope.file, scope)
        //                 .then(function(result) {
        //                     scope.imageSrc = result;
        //                 });
        // };

    }

    function fileInputController(fileReader) {
        //var scope = this;
     
    //     scope.$on("fileProgress", function(e, progress) {
    //         scope.progress = progress.loaded / progress.total;
    //     });

        // scope.readFile = function () {            
        //     scope.progress = 0;
        //     fileReader.readAsDataUrl(scope.file, scope)
        //                 .then(function(result) {
        //                     scope.imageSrc = result;
        //                 });
        // };
    }
};


