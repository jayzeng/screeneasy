'use strict';

angular.module('ScreenEasyApp')
  .directive('inviteCandidate', function () {
    return {
      templateUrl: 'views/schedule/invite_candidate.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the inviteCandidate directive');
      }
    };
  });
