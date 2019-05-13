
angular
    .module('Relatorio', ['ScrollTop', 'QuickViewCardModule'])
    .controller('mainCtrl', ['$scope', function ($scope){
        $scope.cards  = [
            {"name":"KONICA 1", "serie": "ASD930202003", "model": "BH-2393", "pv": "789.321", "av": "5,06", "data": "01/01/2019"},
            {"name":"KONICA 2", "serie": "ASDGA2452653", "model": "BH-2393", "pv": "123.321", "av": "3,06", "data": "23/02/2019"},
            {"name":"KONICA 3", "serie": "JGFJFG434534", "model": "ER-3452", "pv": "789.321", "av": "4,56", "data": "12/12/2018"},
            {"name":"KONICA 4", "serie": "3453453DG343", "model": "ASD-345", "pv": "545.212", "av": "3,96", "data": "23/03/2019"},
            {"name":"KONICA 5", "serie": "SDFG43453535", "model": "DF-4555", "pv": "789.321", "av": "7,06", "data": "06/03/2019"},
            {"name":"KONICA 6", "serie": "3453453DG343", "model": "ASD-345", "pv": "545.212", "av": "4,92", "data": "13/05/2018"},
            {"name":"KONICA 7", "serie": "SDFG43453535", "model": "DF-4555", "pv": "789.321", "av": "6,06", "data": "24/05/2019"}
        ];

        // calcula total de pv das impressoras
        $scope.totalPv = function() {
            let total = 0;
            $scope.cards.forEach( e => {
                total += parseInt(e.pv.replace('.', '')); // 
            });

            // retorna número formatado como 000.000.000
            return total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); 
        }

        // tira a média da area de cobertura
        $scope.areaCobertura = function() {
            let area = 0;
            let total = 0;
            $scope.cards.forEach( e => {
                total += parseFloat(e.av); // calcula número total de av
            });
            area = total / $scope.cards.length; // média da area de cobertura
            return Math.round(area * 100) / 100; // retorna número formatado como (000.00)
        }

    }]);
