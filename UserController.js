// Code goes here

(function() {

  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };
    
    var onRepos = function(data){
      $scope.repos = data;
    }

    var onError = function(reason) {
      $scope.error = "Could not fetch the data.";
    };
    
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);

  };

  // minifier safety: list parameters prior to the controller in an array,
  //  when registering the controller with the app. Tell angular explicitly
  //  about the dependencies that the controller needs. See below:
  app.controller("UserController", UserController);

}());