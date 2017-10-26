(function(angular){
    var app = angular.module("moviecat_details",["ngRoute","hmService"]);

    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/details/:id",{
            templateUrl:"./details/details.html",
            controller:"detailsController"
        });
    }]);

    app.controller("detailsController",["$scope","$routeParams","hmJsonp",function($scope,$routeParams,hmJsonp){
        
        $scope.isShow = true;
        //1.拿到传递过来的参数.
        var id = $routeParams.id;
        //2 发请求.
        hmJsonp.jsonp({
            url:"http://api.douban.com/v2/movie/subject/"+id,
            params:{},
            callback:function(data){
                $scope.movieData = data;
                $scope.isShow = false;
                $scope.$apply();
            }
        });
    }])
})(angular);