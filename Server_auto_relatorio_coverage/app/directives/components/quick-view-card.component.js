angular
    .module('QuickViewCardModule', [])
    .component('kmKpi', {
        template: `
                <div class="widget widget-default widget-item-icon">
                    <div class="widget-item-left">
                        <i class="fas fa-print"></i>
                    </div>                             
                    <div class="widget-data">
                        <div class="widget-title">{{$ctrl.name}}</div>
                        <div class="widget-subtitle">Série: {{$ctrl.serie}}</div>
                        <div class="widget-subtitle">Modelo: {{$ctrl.model}}</div>
                        <div class="widget-subtitle">Pv: {{$ctrl.pv}}</div>
                        <div class="widget-subtitle"><h4><strong>{{$ctrl.av}}</strong></h4></div>
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
            av: '<'
        }
    });

    