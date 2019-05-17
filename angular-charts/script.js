angular.module("app", ["chart.js"])
       .controller("LineCtrl", function ($scope) {
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
                        "coverageRate": [],
                        "devicetId": "A4EX011040290",
                        "dailyTotal": 21590,
                        "avarage": 8.98032258064516
                    },
                    {
                        "id": 12,
                        "product": "Press_1250/1250P",
                        "printTotal": 22992612,
                        "grandTotal": 23014202,
                        "timeStamp": "14/05/2019 03:00",
                        "coverageRate": [],
                        "devicetId": "A4EX011040290",
                        "dailyTotal": 21590,
                        "avarage": 8.01032258064516
                    },
                    {
                        "id": 13,
                        "product": "Press_1250/1250P",
                        "printTotal": 22992612,
                        "grandTotal": 23014202,
                        "timeStamp": "14/05/2019 03:00",
                        "coverageRate": [],
                        "devicetId": "A4EX011040290",
                        "dailyTotal": 21590,
                        "avarage": 8.78032258064516
                    },
                    {
                        "id": 14,
                        "product": "Press_1250/1250P",
                        "printTotal": 22992612,
                        "grandTotal": 23014202,
                        "timeStamp": "14/05/2019 03:00",
                        "coverageRate": [],
                        "devicetId": "A4EX011040290",
                        "dailyTotal": 21590,
                        "avarage": 8.29032258064516
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
                "totalElements": 4,
                "totalPages": 5,
                "size": 4,
                "number": 1,
                "sort": {
                    "sorted": true,
                    "unsorted": false,
                    "empty": false
                },
                "numberOfElements": 4,
                "first": false,
                "empty": false
                },
                "tllAvarage": 8.652688172043009,
                "ttlPrintTotal": 64770
            }

            $scope.getAvarage = function() {
                var areaCobertura = [];
                dataTable.devices.content.forEach((e, index) => {
                    areaCobertura[index] = e.avarage;
                });
                console.log(areaCobertura);
                data = [areaCobertura];
                console.log(data);
                return data;
            }

            $scope.getLabels = function() {
                var labels = [];
                dataTable.devices.content.forEach((e, index) => {
                    labels[index] = e.timeStamp.split(' ')[0];
                });
                console.log(labels);
                return labels;
            }

            $scope.labels = $scope.getLabels();
            $scope.series = ['Series A'];
            $scope.data = $scope.getAvarage();
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
            $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
            $scope.options = {
            scales: {
                yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
                ]
            }
            };

        });