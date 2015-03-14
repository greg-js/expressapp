var assert = require('assert');
// require files here necessary for writing tests

// arbitrary example test

var divide = function(a,b) {
  'use strict';
  return a / b;
};

describe('Client-side unit testing', function() {
  'use strict';
  describe('example test', function() {
    it('dividing 10 by 5 should return 2', function() {
      assert.equal(divide(10, 5), 2);
    });
  });
});
