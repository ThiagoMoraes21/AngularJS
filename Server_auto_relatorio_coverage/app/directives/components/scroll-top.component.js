(function(angular) {
    'use strict';

    angular
        .module('ScrollTop', [])
        .run(['$anchorScroll', function($anchorScroll) {
            $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
          }])
          .component('scrollTop', {
                controller: function backToTopController($scope, $location, $anchorScroll){
                  var ctrl = this;
                  ctrl.backToTop = function() {
                      $anchorScroll();
                  }
                },
                template: `<div class="scroll scroll-top" ng-click="ctrl.backToTop()">
                            <a href=""><span class="fa fa-arrow-up"></span></a>
                        </div>`,
                controllerAs: 'ctrl'
        });

})(window.angular);
