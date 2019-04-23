(function(angular) {
    'use strict';

    angular
        .module('AnchorScroll', [])
        .run(['$anchorScroll', function($anchorScroll) {
            $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
          }])
          .component('backToTop', {
                controller: function backToTopController($scope, $location, $anchorScroll){
                  var ctrl = this;
                  ctrl.backToTop = function() {
                      $anchorScroll();
                  }
                },
                template: `<div class="back-to-top" ng-click="ctrl.backToTop()">
                            <a href=""><i class="fas fa-arrow-up"></i></a>
                        </div>`,
                controllerAs: 'ctrl'
        });

})(window.angular);
