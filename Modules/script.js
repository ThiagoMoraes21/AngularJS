(function() {
    'use strict';

    var appModule = angular.module('myApp', []);

    // create a greet filter
    appModule.filter('greet', () => {
        return (name) => {
            if(name == undefined || name == "") {
                return 'Hello World!';
            }
            return `Hello, ${name}!`;
        }
    })

})();