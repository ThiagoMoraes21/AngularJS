
angular
    .module('myApp', [])
    .controller("namesCtrl", function ($scope) {
        $scope.friends = [
            { name: "Karl", age: 27, city: "Bangalore" },
            { name: "Lewis", age: 55, city: "Newyork" },
            { name: "Adarsh", age: 20, city: "London" },
            { name: "John", age: 21, city: "Newyork" },
            { name: "David", age: 20, city: "Chenai" },
            { name: "Miller", age: 32, city: "Paris" }
        ];
    });  