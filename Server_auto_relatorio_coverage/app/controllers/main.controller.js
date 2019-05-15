let app = angular.module('Relatorio', ['ScrollTop', 'QuickViewCardModule']);
    app.filter("filterCards", function() {
        return function(items, from, to) {
            var df = from;
            var dt = to;
            var result = [];   
            
            for (var i=0; i<items.length; i++){
                var date = new Date(items[i].date);
                date.setDate(date.getDate() + 1);
                var tf = date;
                if (tf >= df && tf <= dt)  {
                    result.push(items[i]);
                }
            }   
            console.log(items);
            console.log(result);
            return result;
        };
    });
    app.controller('mainCtrl', ['$scope', function ($scope){
        $scope.from = new Date(2018, 11, 01);
        $scope.to = new Date(2019, 08, 23);

        $scope.cards  = [
            {"name":"KONICA 1", "serie": "ASD930202003", "model": "BH-2393", "pv": "789.321", "av": "5,06", "date": "2019-07-01"},
            {"name":"KONICA 2", "serie": "ASDGA2452653", "model": "BH-2393", "pv": "123.321", "av": "3,06", "date": "2019-02-20"},
            {"name":"KONICA 3", "serie": "JGFJFG434534", "model": "ER-3452", "pv": "789.321", "av": "4,56", "date": "2019-02-13"},
            {"name":"KONICA 4", "serie": "3453453DG343", "model": "ASD-345", "pv": "545.212", "av": "3,96", "date": "2019-07-20"},
            {"name":"KONICA 5", "serie": "SDFG43453535", "model": "DF-4555", "pv": "789.321", "av": "7,06", "date": "2019-09-22"},
            {"name":"KONICA 6", "serie": "3453453DG343", "model": "ASD-345", "pv": "545.212", "av": "4,92", "date": "2019-03-12"},
            {"name":"KONICA 7", "serie": "SDFG43453535", "model": "DF-4555", "pv": "789.321", "av": "6,06", "date": "2019-07-14"}
        ];

        $scope.QuickViewCalcs = function() {
            $scope.calcPv();
            $scope.calcAreaCobertura();
        }
        // calcula total de pv das impressoras 
        $scope.calcPv = function() {
            let total = 0;
            $scope.cards.forEach( e => {
                total += parseInt(e.pv.replace('.', '')); // 
            });

            // retorna número formatado como 000.000.000
            $scope.totalPv = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); 
        }

        // tira a média da area de cobertura
        $scope.calcAreaCobertura = function() {
            let area = 0;
            let total = 0;
            $scope.cards.forEach( e => {
                total += parseFloat(e.av); // calcula número total de av
            });
            area = total / $scope.cards.length; // média da area de cobertura
            $scope.areaCobertura = Math.round(area * 100) / 100; // retorna número formatado como (000.00)
        }


        // simulação de dados obtidos do servidor
        let dataTable = {
            "devices": {
              "content": [
                {
                  "id": 11,
                  "product": "Press_1250/1250P",
                  "printTotal": 22992612,
                  "grandTotal": 23014202,
                  "timeStamp": "14/05/2019 03:00",
                  "coverageRate": [
                    8.8,
                    8.9,
                    7.1,
                    6.2,
                    6.2,
                    6.2,
                    6.2,
                    10.2,
                    12,
                    12,
                    12,
                    12,
                    12,
                    12,
                    12,
                    12,
                    12,
                    9.1,
                    8.6,
                    8.6,
                    8.6,
                    8.6,
                    8.6,
                    8.3,
                    3.8,
                    4.5,
                    4.4,
                    7.5,
                    8.1,
                    8.1,
                    4.8
                  ],
                  "devicetId": "A4EX011040290",
                  "dailyTotal": 21590,
                  "avarage": 8.69032258064516
                }
              ],
              "pageable": {
                "sort": {
                  "sorted": true,
                  "unsorted": false,
                  "empty": false
                },
                "offset": 1,
                "pageNumber": 1,
                "pageSize": 1,
                "unpaged": false,
                "paged": true
              },
              "last": true,
              "totalElements": 2,
              "totalPages": 2,
              "size": 1,
              "number": 1,
              "sort": {
                "sorted": true,
                "unsorted": false,
                "empty": false
              },
              "numberOfElements": 1,
              "first": false,
              "empty": false
            },
            "tllAvarage": 8.652688172043009,
            "ttlPrintTotal": 64770
          }

    }]);
