'use strict';

angular.module('publicApp')
  .factory('authManager', ['$rootScope', 'angularFireAuth', function ($rootScope, angularFireAuth) {
    var ref = new Firebase("https://collaboration-screeneasy.firebaseio.com/");
    angularFireAuth.initialize(ref, {
       scope: $rootScope,
       name: 'user',
       path: '/login'
    });

    // provide some convenience methods to log in and out
    return {
       login: function(providerId) {
          angularFireAuth.login(providerId, { rememberMe: true, scope: 'email'});
       },

       logout: function() {
          angularFireAuth.logout();
       }
    };

  }]);
