(function() {
    'use strict';

    angular
        .module('FileInput', [])
        .component('fileInput', {
            template:`<div class="file-loading"> 
                         <input id="input-b6" name="input-b6[]" type="file" class="file" multiple ng-init="ctrl.fileInput()">
                      </div>`,
            //templateUrl: 'templateUrl',
            controller: FileInputController,
            controllerAs: 'ctrl',
        });

    function FileInputController() {
        var ctrl = this;

        ctrl.fileInput = function() {
            $('#input-b6').fileinput({
                showUpload: true,
                dropZoneEnabled: false,
                maxFileCount: 10,
                mainClass: "input-group-md"
            });
        }

        ctrl.$onInit = function() {};
        ctrl.$onChanges = function(changesObj) { };
        ctrl.$onDestroy = function() { };
    }
})();