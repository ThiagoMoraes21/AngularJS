(function (angular) {
    'use strict';

    angular
        .module('ScrollBottom', [])
        .component('scrollBottom', {
            controller: scrollBottomController,
            template: `<div class="scroll scroll-bottom" ng-click="ctrl.scrollBottom()">
                            <a href=""><i class="fas fa-arrow-down"></i></a>
                        </div>`,
            controllerAs: 'ctrl'
        });


    function scrollBottomController($scope, $location, $anchorScroll) {
        var ctrl = this;
        ctrl.scrollBottom = function () {
            $('html, body').animate({ scrollTop: $(document).height() }, 0);
        }
    }

})(window.angular);
