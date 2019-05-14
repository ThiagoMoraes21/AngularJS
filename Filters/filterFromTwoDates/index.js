var app = angular.module('app',[]);
  
// filter record array based on the inputs parameters
app.filter("myfilter", function() {
return function(items, from, to) {
    var df = from;
    var dt = to;
    var result = [];   
    
    for (var i=0; i<items.length; i++){
        var date = new Date(items[i].invoice_date);
        date.setDate(date.getDate() + parseInt(items[i].terms));
        var tf = date;
        if (tf > df && tf < dt)  {
            result.push(items[i]);
        }
    }   
        console.log(items);
    return result;
  };
});

app.controller('ctrl1', function($scope){
  
    $scope.from = new Date(2016, 8, 01);
    $scope.to = new Date(2016, 09, 30);

    $scope.record = [{
            "_id": "57bdaa65ecc4b1701401fce4",
            "user": {
                "_id": "57400c32bd07906c1308e2cf",
                "displayName": "mani selvam"
            },
            "__v": 0,
            "created": "2016-08-24T14:08:37.555Z",
            "shipment_id": "57bda7c8ecc4b1701401fce3",
            "percentage_commission": "3",
            "terms": "6",
            "invoice_date": "2016-09-10",
            "supplier_name": "Msd",
            "buyer_name": "Mani selvam .R"
        },
        {
            "_id": "57bdaa65ecc4b1701401fce4",
            "user": {
            "_id": "57400c32bd07906c1308e2cf",
            "displayName": "mani selvam"
            },
            "__v": 0,
            "created": "2016-08-24T14:08:37.555Z",
            "shipment_id": "57bda7c8ecc4b1701401fce3",
            "percentage_commission": "3",
            "terms": "5",
            "invoice_date": "2016-09-20",
            "supplier_name": "Selvam",
            "buyer_name": "Mani selvam .R"
        },

        {
            "_id": "57bdaa65ecc4b1701401fce4",
            "user": {
            "_id": "57400c32bd07906c1308e2cf",
            "displayName": "mani selvam"
            },
            "__v": 0,
            "created": "2016-08-24T14:08:37.555Z",
            "shipment_id": "57bda7c8ecc4b1701401fce3",
            "percentage_commission": "3",
            "terms": "4",
            "invoice_date": "2016-09-24",
            "supplier_name": "Jessey",
            "buyer_name": "Mani selvam .R"
        },
        {
            "_id": "57bdaa65ecc4b1701401fce4",
            "user": {
            "_id": "57400c32bd07906c1308e2cf",
            "displayName": "mani selvam"
            },
            "__v": 0,
            "created": "2016-08-24T14:08:37.555Z",
            "shipment_id": "57bda7c8ecc4b1701401fce3",
            "percentage_commission": "3",
            "terms": "3",
            "invoice_date": "2016-09-27",
            "supplier_name": "Rambus",
            "buyer_name": "Mani selvam .R"
        }];
    
    // get the invoice_date key from the records object and sum it to the terms key value
    // PS: thats inrelevant to the filter
    $scope.addDays = function(stringDate,days) {
        var date = new Date(stringDate);
        date.setDate(date.getDate() + parseInt(days));
        return date;
    }
})
.filter('dateRange', function() {
    return function(records, dateKey, from, to) {
        return records.filter(function(record) {
            return !moment(record[dateKey], 'DD-MM-YYYY').isBefore(moment(from))
                && !moment(record[dateKey], 'DD-MM-YYYY').isAfter(moment(to));
        });
    }
})
