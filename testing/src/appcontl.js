app.controller("get", function($scope, $http) {
    $http({
        url: "/get",
        method: "GET"
    }).then(function(a) {
        $scope.getvalue = a.data;
        console.log(a);
        alert("output status" + a.status);
    }, function(b) {
        console.log(b);
        alert("error log" + b.status);
    })
});
app.controller("post", function($scope, $http) {
    // $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.post = function() {
        $http({
            url: "/post/",
            method: "post",
            data:{name:$scope.data,name2:$scope.data2},
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(function(a) {
            $scope.sathya = a;
             $scope.testing=$scope.data
            console.log(a);
            alert("output status" + a.status);
        }, function(b) {
            console.log(b);
            alert("error log" + b.status);
        })
        // $http.post("/post",{'name':$scope.data}).then(function(a) {
        //     $scope.sathya = a;
        //      $scope.testing=$scope.data
        //     console.log(a);
        //     alert("output status" + a.status);
        // }, function(b) {
        //     console.log(b);
        //     alert("error log" + b.status);
        // })
    }
});
