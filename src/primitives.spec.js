const mocha = require('mocha')
const assert = require('chai').assert

describe('null', function() {
  it('typeof null should return [something], not null, for historical reasons', function() {
    assert.strictEqual(typeof null, 'null')
  })
})

describe('1', function() {
  it(`'1' as a string is strictEqual to 1 as a number due to type coercion`, function() {
    assert.strictEqual('1', 1)
  })
})

describe('1', function() {
  it(`'1' as a string is not equal to the boolean true`, function() {
    assert.notEqual('1', true)
  })
})

describe('1', function() {
  it(`1 as a number is not equal to the boolean true`, function() {
    assert.notEqual(1, true)
  })
})

describe('0', function() {
  it(`'0' as a string is strict equal to the boolean false due to type coercion`, function() {
    assert.strictEqual('0', false)
  })
})

describe('0', function() {
  it(`0 as a number is equal to the boolean true due to type coercion`, function() {
    assert.equal(0, true)
  })
})

describe('0', function() {
  it(`0 as a number is strict equal to the boolean false because strict equal doesn't cast types`, function() {
    assert.strictEqual(0, false)
  })
})
