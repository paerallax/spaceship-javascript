const mocha = require('mocha')
const assert = require('chai').assert

const {
  power,
  findNumberInArray,
  range,
  factorial,
  sumValues,
  findMaxAndMin,
  reverseArray,
} = require('./recursion');

describe('power', function() {
  it('should return the number "num" in power of number "pow" (num ^ pow)', function() {
    assert.deepEqual(power(5, 2), 25);
    assert.deepEqual(power(2, 4), 16);
    assert.deepEqual(power(2, 0), 1);
    assert.deepEqual(power(1, 123), 1);
  });
});

describe('findNumberInArray', function() {
  it('should search for the inputed number in the array. If found, return true, If not, return false', function() {
    assert.isTrue(findNumberInArray([1, 2, 10, 15, 20, 9], 10));
    assert.isTrue(findNumberInArray([-10, 54, -5, 10, 15, 20, 3], -5));
    assert.isFalse(findNumberInArray([-10, 0, 2, -214, 9, 2, -123], 1));
  });
});

describe('range', function() {
  it('should return an array of numbers between numA and numB (the array should not include numA and numB)', function() {
    assert.strictEqual(range(1, 5), [2, 3, 4]);
    assert.strictEqual(range(-4, 3), [-3, -2, -1, 0, 1, 2]);
    assert.strictEqual(range(1, 2), []);
    assert.strictEqual(range(1, 1), []);
  });
});

describe('factorial', function() {
  it('should return n! (n factorial) for any positive number', function() {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(1), 1);
    assert.strictEqual(factorial(3), 6);
  });
  it('should return 1 if n is equal to 0', function() {
    assert.strictEqual(factorial(0), 1);
  });
});

describe('sumValues', function() {
  it('should return the sum of all values of the array', function() {
    assert.strictEqual(sumValues([1, 2, 10, 15, 20, 9]), 57);
    assert.strictEqual(sumValues([-10, 54, -5, 10, 15, 20, 3]), 87);
    assert.strictEqual(sumValues([-10, 0, 2, -214, 9, 2, -123]), -334);
  });
});

describe('findMaxAndMin', function() {
  it('should return an object { max, min } where "max" is a maximum number and "min" is a minimum number', function() {
    assert.deepEqual(findMaxAndMin([1, 2, 10, 15, 20, 9]), { max: 20, min: 1 });
    assert.deepEqual(findMaxAndMin([-10, 54, -5, 10, 15, 20, 3]), { max: 54, min: -10 });
    assert.deepEqual(findMaxAndMin([-10, 0, 2, -214, 9, 2, -123]), { max: 9, min: -214 });
  });
});

describe('reverseArray', function() {
  it('should return the reverse of that array', function() {
    assert.deepEqual(reverseArray([1, 2, 10, 15, 20, 9]), [9, 20, 15, 10, 2, 1]);
    assert.deepEqual(reverseArray([-10, 54, -5, 10, 15, 20, 3]), [3, 20, 15, 10, -5, 54, -10]);
    assert.deepEqual(reverseArray([-10, 0, 2, -214, 9, 2, -123]), [-123, 2, 9, -214, 2, 0, -10]);
  });
});
