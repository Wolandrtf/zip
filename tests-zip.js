const {zip} = require('./zip');
const assert = require('assert');

describe('Zip', function() {
  it('should return correct value, for test case #1', function() {
    assert.equal(zip('bachgjizx'), 'a-c,g-j,x,z');
  });
  
  it('should return correct value, for test case #2', function() {
    assert.equal(zip('dacb'), 'a-d');
  });
  
  it('should return correct value, for test case #3', function() {
    assert.equal(zip('amb'), 'a,b,m');
  });
  
  it('should return correct value, for test case #4', function() {
    assert.equal(zip(''), '');
  });
  
  it('should return correct value, for test case #5', function() {
    assert.equal(zip('a'), 'a');
  });
  
});
