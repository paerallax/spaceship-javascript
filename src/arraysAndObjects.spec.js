const mocha = require('mocha')
const assert = require('chai').assert

const {
  findNumberGreaterThan10,
  findNumberInArray,
  concatenateArrays,
  sumValues,
  findMaxAndMin,
  reverseArray,
  getLengthOfObject,
  addCoolProperty,
  arrayIntoObject
} = require('./arraysAndObjects');

describe('findNumberGreaterThan10', function() {
  it('should return an array of numbers greater than or equal to 10.', function() {
    assert.deepEqual(findNumberGreaterThan10([1, 2, 10, 15, 20, 9]), [10, 15, 20]);
    assert.deepEqual(findNumberGreaterThan10([-10, 54, -5, 10, 15, 20, 3]), [54, 10, 15, 20]);
    assert.deepEqual(findNumberGreaterThan10([-10, 0, 2, -214, 9, 2, -123]), []);
  });
});

describe('findNumberInArray', function() {
  it('should search for the inputed number in the array. If found, return true, If not, return false', function() {
    assert.isTrue(findNumberInArray([1, 2, 10, 15, 20, 9], 10));
    assert.isTrue(findNumberInArray([-10, 54, -5, 10, 15, 20, 3], -5));
    assert.isFalse(findNumberInArray([-10, 0, 2, -214, 9, 2, -123], 1));
  });
});

describe('concatenateArrays', function() {
  it('should concatenate (append, add) 2 arrays to each other and return a new concatenated array.', function() {
    assert.deepEqual(concatenateArrays([1, 2, 10], [3, 6, 4]), [1, 2, 10, 3, 6, 4]);
    assert.deepEqual(concatenateArrays([-10, 54, -5], [0, 53, 2]), [-10, 54, -5, 0, 53, 2]);
    assert.deepEqual(concatenateArrays([-10, 0, 2], [4, 1, 4]), [-10, 0, 2, 4, 1, 4]);
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

describe('getLengthOfObject', function() {
  it('should return the number of properties in it', function() {
    assert.strictEqual(getLengthOfObject({a: 1, b: 2, c: 3}), 3);
    assert.strictEqual(getLengthOfObject({a: 1, b: 2}), 2);
    assert.strictEqual(getLengthOfObject({}), 0);
  });
});

describe('addCoolProperty', function() {
  it('should return modified obj with property cool: 123', function() {
    assert.deepEqual(addCoolProperty({ a: 1, b: 2, c: 3 }), { a: 1, b: 2, c: 3, cool: 123 });
    assert.deepEqual(addCoolProperty({ a: 1, b: 2 }), { a: 1, b: 2, cool: 123 });
    assert.deepEqual(addCoolProperty({}), { cool: 123 });
  });
});

describe('arrayIntoObject', function() {
  it('should return object with 2 properties: moreThan10 and lessThan10. Both are array of numbers', function() {
    assert.deepEqual(arrayIntoObject([1, 2, 10, 15, 20, 9]), {
      moreThan10: [15, 20],
      lessThan10: [1, 2, 10, 9]
    });
    assert.deepEqual(arrayIntoObject([-10, 54, -5, 10, 15, 20, 3]), {
      moreThan10: [54, 15, 20],
      lessThan10: [-10, -5, 10, 3]
    });
    assert.deepEqual(arrayIntoObject([-10, 0, 2, -214, 9, 2, -123]), {
      moreThan10: [],
      lessThan10: [-10, 0, 2, -214, 9, 2, -123]
    });
  });
});

