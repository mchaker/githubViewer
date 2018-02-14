(function(){
  var app = angular.module("githubViewer", ["ngRoute"]);
  // square brackets denote DEFINING a module
  // without that additional parameter -- square brackets -- just retrieves
  //  a REFERENCE TO a module. Not what we want.
  
  app.config(function($routeProvider){
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "UserController"
      })
      .when("/repo/:username/:reponame", {
        templateUrl: "repo.html",
        controller: "RepoController"
      })
      .otherwise({redirectTo:"/main"});
  });
  
}());