/*
 正在热映模块.
 这个模块中只需要写和正在热映相关的代码.

*/

(function (angular) {
    
        //1.创建1个模块.
        var app = angular.module("moviecat_top250", ["ngRoute","hmService"]);
    
        //2.配置路由.
        app.config(["$routeProvider", function ($routeProvider) {
            //                    /in_theaters/1
            //                   #/in_theaters
            $routeProvider.when("/top250/:page?", {
                templateUrl: "./top250/top250.html",
                controller: "top250Controller"
            });
        }]);
    
    
        app.controller("top250Controller", [
            "$scope",
            "$routeParams",
            "$route",
            "$window",
            "hmJsonp", 
            function ($scope,$routeParams,$route,$window, hmJsonp) {
           //angularJS自动生成的函数的名字是带了点的.
           //而服务器是不支持的.
           //自己写1个可以实现跨域请求的功能.
           //hmJsonp.jsonp({});
           /*
           1     0
           2     10
           3     20
           4     30
           n     (n-1)*10
    
    
    
           */
    
           $scope.isShow = true;
    
           //每一页的电影条目
           $scope.pageSize = 10;
           //取到路由带过来的参数 页码.
           //    #/in_theaters
           //    undefined
          
           $scope.pageIndex = ($routeParams.page || "1") - 0;
    
           hmJsonp.jsonp({
               url:"http://api.douban.com/v2/movie/top250",
               params:{
                   count:$scope.pageSize,
                   start:($scope.pageIndex-1)*$scope.pageSize
               },
               callback:function(data){
                   $scope.movies = data;
                   $scope.totalPage = $window.Math.ceil(data.total / $scope.pageSize);
                   //告诉视图 数据模型发生变化了 你赶紧刷新你的视图.
                   $scope.isShow = false;
                   $scope.$apply();
               }
           });
    
    
           //展示指定页码的数据.
           $scope.getPage = function(pageIndex){
                 //#/in_theaterts/2
                 //想办法将地址栏的页码参数成 pageIndex
    
                 //更新参数.
                 if(pageIndex < 1 || pageIndex > $scope.totalPage)  return;
    
                 $route.updateParams({
                     page:pageIndex
                 });
           }
    
    
    
    
        }]);
    
    
    
    
    })(angular);