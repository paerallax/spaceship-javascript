const mocha = require('mocha')
const assert = require('chai').assert

const {
  factorial,
  sumOfOddNumbers,
  countNumberOfDigits,
  productOfDigits,
  checkArmstrongNumber,
  swapDigits,
  reverseNumber,
  isPalindrome,
  powersOf2,
  drawTriangle
} = require('./loops');

describe('factorial', function() {
  it('should return n! (n factorial) for any positive number', function() {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(1), 1);
    assert.strictEqual(factorial(3), 6);
  });
  it('should return 1 if n is equal to 0', function() {
    assert.strictEqual(factorial(0), 1);
  });
  it('should return WRONG INPUT if item is NaN (hint: use Number.isNaN())', function() {
    assert.strictEqual(factorial(NaN), "WRONG INPUT");
  });
  it('should return WRONG INPUT if item is a negative number', function() {
    assert.strictEqual(factorial(-4), "WRONG INPUT");
  });
  it('should return WRONG INPUT if type of item is not a number', function() {
    assert.strictEqual(factorial("yo"), "WRONG INPUT");
    assert.strictEqual(factorial(undefined), "WRONG INPUT");
  });
});

describe('sumOfOddNumbers', function() {
  it('should return sum of odd number from 0 to n', function() {
    assert.strictEqual(sumOfOddNumbers(10), 25);
    assert.strictEqual(sumOfOddNumbers(15), 64);
    assert.strictEqual(sumOfOddNumbers(0), 0);
  });
  it('should return WRONG INPUT if item is NaN (hint: use Number.isNaN())', function() {
    assert.strictEqual(sumOfOddNumbers(NaN), "WRONG INPUT");
  });
  it('should return WRONG INPUT if type of item is not a number', function() {
    assert.strictEqual(sumOfOddNumbers("yo"), "WRONG INPUT");
    assert.strictEqual(sumOfOddNumbers(undefined), "WRONG INPUT");
  });
});

describe('countNumberOfDigits', function() {
  it('should return the number of digits in n', function() {
    assert.strictEqual(countNumberOfDigits(0), 1);
    assert.strictEqual(countNumberOfDigits(123), 3);
    assert.strictEqual(countNumberOfDigits(15323), 5);
    assert.strictEqual(countNumberOfDigits(-153), 3);
  });
  it('should return WRONG INPUT if item is NaN (hint: use Number.isNaN())', function() {
    assert.strictEqual(countNumberOfDigits(NaN), "WRONG INPUT");
  });
  it('should return WRONG INPUT if type of item is not a number', function() {
    assert.strictEqual(countNumberOfDigits("yo"), "WRONG INPUT");
    assert.strictEqual(countNumberOfDigits(undefined), "WRONG INPUT");
  });
});

describe('productOfDigits', function() {
  it('should return product of digits of the number', function() {
    assert.strictEqual(productOfDigits(0), 0);
    assert.strictEqual(productOfDigits(123), 6);
    assert.strictEqual(productOfDigits(5261), 60);
    assert.strictEqual(productOfDigits(-561), 30);
  });
  it('should return WRONG INPUT if item is NaN (hint: use Number.isNaN())', function() {
    assert.strictEqual(productOfDigits(NaN), "WRONG INPUT");
  });
  it('should return WRONG INPUT if type of item is not a number', function() {
    assert.strictEqual(productOfDigits("yo"), "WRONG INPUT");
    assert.strictEqual(productOfDigits(undefined), "WRONG INPUT");
  });
});

describe('checkArmstrongNumber', function() {
  it('should return product of digits of the number', function() {
    assert.isTrue(checkArmstrongNumber(0));
    assert.isTrue(checkArmstrongNumber(1));
    assert.isTrue(checkArmstrongNumber(153));
    assert.isTrue(checkArmstrongNumber(370));
    assert.isTrue(checkArmstrongNumber(371));
    assert.isNotTrue(checkArmstrongNumber(100));
    assert.isNotTrue(checkArmstrongNumber(23));
    assert.isNotTrue(checkArmstrongNumber(400));
  });
  it('should return WRONG INPUT if item is NaN (hint: use Number.isNaN())', function() {
    assert.strictEqual(checkArmstrongNumber(NaN), "WRONG INPUT");
  });
  it('should return WRONG INPUT if type of item is not a number', function() {
    assert.strictEqual(checkArmstrongNumber("yo"), "WRONG INPUT");
    assert.strictEqual(checkArmstrongNumber(undefined), "WRONG INPUT");
  });
});

describe('swapDigits', function() {
  it('should return product of digits of the number', function() {
    assert.strictEqual(swapDigits(0), 0);
    assert.strictEqual(swapDigits(3), 3);
    assert.strictEqual(swapDigits(123), 321);
    assert.strictEqual(swapDigits(5261), 1265);
    assert.strictEqual(swapDigits(-561), -165);
  });
  it('should return WRONG INPUT if item is NaN (hint: use Number.isNaN())', function() {
    assert.strictEqual(swapDigits(NaN), "WRONG INPUT");
  });
  it('should return WRONG INPUT if type of item is not a number', function() {
    assert.strictEqual(swapDigits("yo"), "WRONG INPUT");
    assert.strictEqual(swapDigits(undefined), "WRONG INPUT");
  });
});

describe('reverseNumber', function() {
  it('should return product of digits of the number', function() {
    assert.strictEqual(reverseNumber(0), 0);
    assert.strictEqual(reverseNumber(3), 3);
    assert.strictEqual(reverseNumber(123), 321);
    assert.strictEqual(reverseNumber(5261), 1625);
    assert.strictEqual(reverseNumber(52612), 21625);
    assert.strictEqual(reverseNumber(-561), -165);
  });
  it('should return WRONG INPUT if item is NaN (hint: use Number.isNaN())', function() {
    assert.strictEqual(reverseNumber(NaN), "WRONG INPUT");
  });
  it('should return WRONG INPUT if type of item is not a number', function() {
    assert.strictEqual(reverseNumber("yo"), "WRONG INPUT");
    assert.strictEqual(reverseNumber(undefined), "WRONG INPUT");
  });
});

describe('isPalindrome', function() {
  it('should return product of digits of the number', function() {
    assert.isTrue(isPalindrome(0));
    assert.isTrue(isPalindrome(1));
    assert.isTrue(isPalindrome(151));
    assert.isTrue(isPalindrome(373));
    assert.isTrue(isPalindrome(10401));
    assert.isNotTrue(isPalindrome(154));
    assert.isNotTrue(isPalindrome(370));
    assert.isNotTrue(isPalindrome(10453));
  });
  it('should return WRONG INPUT if item is NaN (hint: use Number.isNaN())', function() {
    assert.strictEqual(isPalindrome(NaN), "WRONG INPUT");
  });
  it('should return WRONG INPUT if type of item is not a number', function() {
    assert.strictEqual(isPalindrome("yo"), "WRONG INPUT");
    assert.strictEqual(isPalindrome(undefined), "WRONG INPUT");
  });
});

describe('powersOf2', function() {
  it('should return a sequence of powers of 2, which are concatenated in the string like this: "1 2 4 8 16 32"', function() {
    assert.strictEqual(powersOf2(4), '1 2 4 8 16');
    assert.strictEqual(powersOf2(6), '1 2 4 8 16 32 64');
  });
  it('should return WRONG INPUT if item is NaN (hint: use Number.isNaN())', function() {
    assert.strictEqual(powersOf2(NaN), "WRONG INPUT");
  });
  it('should return WRONG INPUT if item is a negative number', function() {
    assert.strictEqual(powersOf2(-4), "WRONG INPUT");
  });
  it('should return WRONG INPUT if type of item is not a number', function() {
    assert.strictEqual(powersOf2("yo"), "WRONG INPUT");
    assert.strictEqual(powersOf2(undefined), "WRONG INPUT");
  });
});

describe('drawTriangle', function() {
  it('should return a sequence of powers of 2, which are concatenated in the string like this: "1 2 4 8 16 32"', function() {
    assert.strictEqual(drawTriangle(0), '');
    assert.strictEqual(drawTriangle(2), '*\n**');
    assert.strictEqual(drawTriangle(4), '*\n**\n***\n****');
  });
  it('should return WRONG INPUT if item is NaN (hint: use Number.isNaN())', function() {
    assert.strictEqual(drawTriangle(NaN), "WRONG INPUT");
  });
  it('should return WRONG INPUT if item is a negative number', function() {
    assert.strictEqual(drawTriangle(-4), "WRONG INPUT");
  });
  it('should return WRONG INPUT if type of item is not a number', function() {
    assert.strictEqual(drawTriangle("yo"), "WRONG INPUT");
    assert.strictEqual(drawTriangle(undefined), "WRONG INPUT");
  });
});
