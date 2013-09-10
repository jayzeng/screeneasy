'use strict';

describe('Directive: inviteCandidate', function () {
  beforeEach(module('publicApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<invite-candidate></invite-candidate>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the inviteCandidate directive');
  }));
});
