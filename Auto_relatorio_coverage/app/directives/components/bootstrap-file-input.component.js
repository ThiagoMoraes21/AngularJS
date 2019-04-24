(function() {
    'use strict';

    angular
        .module('BootstrapFileInput', [])
        .component('bootstrapFileInput', {
            template:`<div class="panel-body">
                         <h3><i class="fas fa-share" style="font-size: 1.2rem;"></i> File Input</h3>
                         <p>Add class <code>file</code> to file input to get Bootstrap FileInput plugin</p>
                         <div class="file-loading"> 
                            <input id="input-b6" name="input-b6[]" type="file" 
                                class="file" multiple ng-init="ctrl.fileInput()">
                         </div>
                    </div>`,
            //templateUrl: 'templateUrl',
            controller: FileInputController,
            controllerAs: 'ctrl'
        });

    function FileInputController() {
        var ctrl = this;

        ctrl.fileInput = function() {
            $('#input-b6').fileinput({
                showUpload: true,
                dropZoneEnabled: false,
                maxFileCount: 10,
                mainClass: "input-group-md",
                theme: "fas",
                uploadUrl: "/file-upload-batch/2"
            });
        }

        ctrl.$onInit = function() {};
        ctrl.$onChanges = function(changesObj) { };
        ctrl.$onDestroy = function() { };
    }
})();