angular.module("nj1app", []).controller("sathya", ['$scope', '$log', '$interval', '$http', function(sathya, $log, $interval, $http) {
    sathya.a = "anbae anbae";
    sathya.array2 = ["red", "green", "blue"];

    sathya.function = function() {
        sathya.c = sathya.a;
        return sathya.c;
    }
    sathya.json = [{
        name: "sathya",
        edu: ["sslc", "+2", "BE"]
    }, {
        name: "sathya",
        edu: ["sslc", "+2", "BE"]
    }];
    sathya.contacts = [{
            contact: 'AAA',
            mlist: [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1]
        }, {
            contact: 'BBB',
            mlist: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
        }

    ];
    sathya.count1 = 0;

    sathya.add1 = function() {
        sathya.count1++;
        return sathya.count1;
    }
    sathya.theTime = new Date().toLocaleTimeString();
    // $interval(function () {
    //     sathya.theTime = new Date().toLocaleTimeString();
    // }, 1000);
    $http({
        url: "http://localhost:4444/login/",
        method: "GET",
        headers: {
  'Content-Type': "text/html"
}
    }).then(function show(a) {
        sathya.golang = a.data;
    }, function errror(a) {
        sathya.error = a.satusText;
    });
    $http({
        method: "GET",
        url: "http://localhost:4444/login/",
        headers: {
  'Content-Type': 'text/html'
}
    }).then(function mySucces(response) {
        sathya.myWelcome = response.data;
    }, function myError(response) {
        sathya.myData = response.statusText;
    });
    $http.get("http://localhost:4444/login/").then(function(response) {
        sathya.myData = response.data.records;
    });
}]);
var app = angular.module('myShoppingList', []);
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function() {
        if ($scope.addMe == "") {
            alert("enter the word")
        } else {
            $scope.products.push($scope.addMe);
        }
    }
    $scope.remove = function(x) {
        $scope.products.splice(x, 1)
    }
    $scope.alert=function(){
      alert($scope.text)
    }
});
app.controller("econtroller",function($scope){
  $scope.testingData="sathya";
});
app.controller("scontroller",function($scope){
});
app.controller("tcontroller",function($scope){});
app.controller("fcontroller",function($scope){});
angular.bootstrap(document.getElementById("1"), ['nj1app']);
