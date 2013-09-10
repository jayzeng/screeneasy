'use strict';

angular.module('ScreenEasyApp')
.factory('CandidateResource', ['$resource', function ($resource) {
      var candidate = $resource(
          'https://127.0.0.1:3000//v1/developer/:email', {
            'email': '',
            'callback': 'JSON_CALLBACK'
          }, {
            'post': {method:'POST', params: {entryId: '@entryId'}},
          }
        );

      return candidate;
    }]);
