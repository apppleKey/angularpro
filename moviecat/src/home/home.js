/*
这个文件的作用:
处理和首页模块相关的代码逻辑.
做的事情: 只做和首页模块相关的事情.
配置首页路由.
*/

(function(angular){
  //1.创建1个首页模块.
  var app = angular.module("moviecat_home",["ngRoute"]);

  app.config(["$locationProvider",function($locationProvider){
      $locationProvider.hashPrefix("");
  }]);
  
  //2.配置路由.
  app.config(["$routeProvider",function($routeProvider){
      $routeProvider.when("/home",{
          templateUrl:"./home/home.html"
      });
  }]);

})(angular);