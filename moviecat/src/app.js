/*
1. 一般项目的目录结构.
    src
    dist
    
2. 分析了模板结构


3. 分析一下项目的功能组成.
   
   AngularJS应用是以模块化的方式来构建的.


   分析模块:

   首页模块
   正在热映模块
   即将上映模块
   top250模块.
   详情

   既然有五个模块
   新建了五个文件夹.
   home
      home.html 保存首页视图.
   in_theaters
      in_theaters.html 保存的是正在热映的视图
   coming_soon
   top250
   details
      details.html 保存的是详情视图.
   用来分别保存这四个模块相关的代码.
   

4. 创建AngularJS模块的时候,模块的名字:
   
   如果模块的名字和ng-app的值一致. 这个模块叫做主模块. 
        这个模块就是来管理ng-app指定的范围的.
   模块的名字也可以不和ng-app的值一致.这样的模块叫做从模块
        从模块的代码就算你引入到了页面上.仍然也不会起作用的.
        除非你在主模块中依赖从模块.
*/


(function (angular) {
    
    //1.创建模块.
    var app = angular.module("moviecat",[
        "moviecat_home",
        "moviecat_in_theaters",
        "moviecat_details",
        "moviecat_coming_soon",
        "moviecat_top250"
    ]);

})(angular);