'use strict';

angular.module('ScreenEasyApp')
  .controller('ScheduleCtrl', ['$scope', '$http', '$store', function ($scope, $http, $store) {
     $scope.scheduleInterview = function() {
        // generate hash for the interview
        var hash = "1234"
        var interview = {
           interviewer: $scope.interviewer,
           candidate: $scope.candidate,
           time: $scope.interviewTime,
           date: Date.now()
        };

        $http.post('/interview/create', interview);

        // save the interview

        // send an email to both candidates

     };

     $scope.inviteCandidate = function() {
        var candidate = {}
        candidate.name = $scope.candidate.name;
        candidate.email = $scope.candidate.email;
        candidate.phone = $scope.candidate.phone;

        $store.set('candidate_information',candidate);
        $http.post('http://127.0.0.1:3000/v1/developer/', { email: $scope.candidate.email}).
        success(function(data, status, headers, config) {
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            console.log(data);
        });
     };

  }]);
