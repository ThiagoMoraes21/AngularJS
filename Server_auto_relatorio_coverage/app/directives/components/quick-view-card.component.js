angular
    .module('QuickViewCardModule', [])
    .component('kmKpi', {
        template: `
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget widget-default widget-item-icon">
                    <div class="widget-item-left">
                        <i class="fa fa-print"></i>
                    </div>                             
                    <div class="widget-data">
                        <div class="widget-title">{{$ctrl.name}}</div>
                        <div class="widget-subtitle">Série: {{$ctrl.serie}}</div>
                        <div class="widget-subtitle">Modelo: {{$ctrl.model}}</div>
                        <div class="widget-subtitle">Pv: {{$ctrl.pv}}</div>
                        <div class="widget-subtitle"><h4><strong>{{$ctrl.av}}</strong></h4></div>
                    </div>      
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

    