var assert = require('assert');
// require files here necessary for writing tests

// arbitrary example test

var multiply = function(a,b) {
  'use strict';
  return a * b;
};

describe('Server-side unit testing', function() {
  'use strict';
  describe('example test', function() {
    it('multiplying 10 by 5 should return 50', function() {
      assert.equal(multiply(10, 5), 50);
    });
  });
});
