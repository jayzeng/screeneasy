'use strict';

describe('Service: Candidate', function () {

  // load the service's module
  beforeEach(module('publicApp'));

  // instantiate service
  var Candidate;
  beforeEach(inject(function (_Candidate_) {
    Candidate = _Candidate_;
  }));

  it('should do something', function () {
    expect(!!Candidate).toBe(true);
  });

});
