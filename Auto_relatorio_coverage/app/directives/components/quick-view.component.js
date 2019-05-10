angular
    .module('QuickViewModule', [])
    .component('quickView', {
        template: '',
        controller: quickViewController
    });

    quickViewController.$inject = ['$http'];
    function quickViewController($http) {
        var $ctrl = this;
        $http.get('testJson.js').then(function(response) {
            console.log(response.data);
            //$ctrl.test = response.data;
        });
    }
