angular.module("app",["ngRoute","cp.ngConfirm"]).config(["$routeProvider",function(o){o.otherwise("home")}]).run(["$ngConfirmDefaults",function(o){o.theme="supervan"}]),angular.module("app").config(["$routeProvider",function(o){o.when("/home",{templateUrl:"/temp/core/home/html/ng.home.html",controller:"homeCtrl"})}]),angular.module("app").controller("homeCtrl",["$scope","$ngConfirm",function(o,n){o.list=[{name:"统一用户",isRunning:!0,svn:"",ip:"",port:80,domain:"",sh:{start:"",stop:"",logsDir:""}}],o.addOrEdit=function(o){n({title:(o?"编辑":"新增")+"服务器",contentUrl:"/temp/core/home/html/ng.home.server.add.html",columnClass:"col-md-6 col-md-offset-3",buttons:{ok:{text:"保存",btnClass:"btn-info",action:function(){return!1}},canel:{text:"取消"}}})}}]),angular.bootstrap(document,["app"]);