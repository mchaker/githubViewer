// Code goes here

(function() {

  var app = angular.module("githubViewer");

  var MainController = function($scope, $interval, $location) {

    var decrementCountdown = function(){
      $scope.countdown -= 1;
      if($scope.countdown < 1){
        $scope.search($scope.username);
      }
    };
    
    var countdownInterval = null;
    var startCountdown = function(){
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = function(username) {
      if(countdownInterval){
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" + username);
    };

    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();

  };

  // minifier safety: list parameters prior to the controller in an array,
  //  when registering the controller with the app. Tell angular explicitly
  //  about the dependencies that the controller needs. See below:
  app.controller("MainController", MainController);

}());