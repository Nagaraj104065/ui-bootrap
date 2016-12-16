var app=angular.module("app",["ui.router"]);
app.config(function ($urlRouterProvider,$stateProvider){
  $urlRouterProvider.when("/","/home").otherwise("/");
  $stateProvider.state("home",{
    url:"/home",
    templateUrl:"src/view/home.html"
  }).state("home.get",{
    url:"/gett",
    controller:"get",
    templateUrl:"src/view/get.html"
  }).state("home.post",{
    url:"/postt",
    controller:"post",
    templateUrl:"src/view/post.html"
  })
});
