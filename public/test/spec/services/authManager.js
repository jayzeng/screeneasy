'use strict';

describe('Service: authManager', function () {

  // load the service's module
  beforeEach(module('publicApp'));

  // instantiate service
  var authManager;
  beforeEach(inject(function (_authManager_) {
    authManager = _authManager_;
  }));

  it('should do something', function () {
    expect(!!authManager).toBe(true);
  });

});
