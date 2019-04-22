
angular
    .module('myApp', [])
    .controller("namesCtrl", function ($scope) {
       $scope.people = [
           {name: 'Thiago', age: 21, city: 'São Paulo'},
           {name: 'Rachel', age: 17, city: 'São Paulo'},
           {name: 'Bruna', age: 32, city: 'Curitiba'},
           {name: 'Tamires', age: 19, city: 'Minas Gerais'},
           {name: 'Pedro', age: 24, city: 'Bahia'}
        ];
    });  