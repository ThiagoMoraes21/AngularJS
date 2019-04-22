(function(angular) {
    
    'use strict';
    angular
        .module('Relatorio')
        .run(['$anchorScroll', function($anchorScroll) {
            $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
          }])
        .component('backToTop', {
            template: '<div class="back-to-top">'+
                        '<a href="" ng-click="backToTop()"><i class="fas fa-arrow-up"></i></a>'+
                      '</div>',
            bindings: {
                where: "<"
            },
            controller: function backToTopController($scope, $location, $anchorScroll){
                var $ctrl = this;
                $ctrl.backToTop = function() {
                    // $location.hash();
                    $anchorScroll();
                }
            }
        });

})(window.angular);
