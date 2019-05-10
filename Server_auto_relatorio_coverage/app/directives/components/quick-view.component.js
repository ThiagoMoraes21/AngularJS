angular
    .module('QuickViewModule', [])
    .component('kmKpi', {
        template: `
                <div class="widget widget-default widget-item-icon col-md-3">
                    <div class="widget-item-left">
                        <i class="fas fa-print"></i>
                    </div>                             
                    <div class="widget-data">
                        <div class="widget-title">{{$ctrl.name}}</div>
                        <div class="widget-subtitle">Série: {{$ctrl.serie}}</div>
                        <div class="widget-subtitle">Modelo: {{$ctrl.model}}</div>
                        <div class="widget-subtitle">Pv: {{$ctrl.pv}}</div>
                        <div class="widget-subtitle">{{$ctrl.av}}</div>
                    </div>      
                </div>  
        `,
        controllerAs: '$ctrl',
        replace : true,
        bindings: {
            name: '<',
            serie: '<',
            model: '<',
            pv: '<',
            average: '<'
        }
    });

    