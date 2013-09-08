'use strict';

angular.module('publicApp')
  .controller('AuthenticationCtrl', ['authManager', function ($scope, angularFireAuth) {
    var ref = new Firebase("https://collaboration-screeneasy.firebaseio.com/");
    angularFireAuth.initialize(ref, {scope: $scope, name: "user"});

    $scope.login = function() {
      var promise = angularFireAuth.login("github");
      console.log(promise);
      promise.then(function(auth) {
          console.log(auth);
      });


    };

    $scope.logout = function() {
      angularFireAuth.logout();
    };

    $scope.$on("angularFireAuth:login", function(evt, user) {
      // User logged in.
    });

    $scope.$on("angularFireAuth:logout", function(evt) {
      // User logged out.
    });

    $scope.$on("angularFireAuth:error", function(evt, err) {
      // There was an error during authentication.
    });
  }]);
