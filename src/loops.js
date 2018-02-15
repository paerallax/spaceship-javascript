const factorial = (n) => {
  if (typeof n !== 'number' || Number.isNaN(n) || n < 0) {
    return 'WRONG INPUT';
  }
  let product = 1;
  for (let i = 0; i < n; ++i) {
    product *= i + 1;
  }
  return product;
}


const sumOfOddNumbers = (n) => {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    return 'WRONG INPUT';
  }
  let sum = 0;
  for (let i = 0; i <= Math.abs(n); ++i) {
    if (Math.abs(i % 2) === 1) {
      sum += i;
    }
  }
  if (n >= 0) {
    return sum;
  } else {
    return -sum;
  }
  // Sum all odd numbers from 0 to n and return the sum
  // return "WRONG INPUT" if the type of n is not a number or NaN
  // Example
  
  // Input: 10
  // Output: 25
}

const countNumberOfDigits = (n) => {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    return 'WRONG INPUT';
  }
  let newN = Math.abs(n);
  let k = 1;
  while (Math.floor(newN / 10) > 0) {
    newN = Math.floor(newN / 10);
    ++k;
  }
  return k;
  // Count the number of digits in the number and return it
  // return "WRONG INPUT" if the type of n is not a number or NaN
  // Example
  
  // Input: 35419
  // Output: 5
}

const productOfDigits = (n) => {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    return 'WRONG INPUT';
  }
  if(n === 0) {
    return 0;
  }
  let newN = Math.abs(n);
  let product = 1;
  while (Math.floor(newN / 10) > 0 || newN % 10 > 0) {
    const lastDigit = newN % 10;
    newN = Math.floor(newN / 10);
    product *= lastDigit;
  }
  return product;
  // Count the product of all digits in the number and return it
  // return "WRONG INPUT" if the type of n is not a number or NaN
  // Example
  
  // Input: 1234
  // Output: 24
}

const checkArmstrongNumber = (n) => {
  const numberOfDigits = countNumberOfDigits(n);
  let newN = Math.abs(n);
  let product = 1;
  while (Math.floor(newN / 10) > 0 || newN % 10 > 0) {
    const lastDigit = newN % 10;
    newN = Math.floor(newN / 10);
    product += lastDigit ** numberOfDigits;
  }
  // Find out if the number is an Armstrong number or not.
  // return "WRONG INPUT" if the type of n is not a number or NaN
  // Return a boolean value
  
  // An Armstrong number is a n-digit number that is equal
  // to the sum of the nth power of its digits. For example -
  // 6 = 61 = 6
  // 371 = 3^3 + 7^3 + 1^3 = 371
  
  // Example
  
  // Input: 371
  // Output: true
}

const swapDigits = (n) => {
  // Swap first and last digits of the number and return it
  // return "WRONG INPUT" if the type of n is not a number or NaN
  // Example
  
  // Input: 431
  // Output: 134
}

const reverseNumber = (n) => {
  // Reverse the digits of the number and return it
  // return "WRONG INPUT" if the type of n is not a number or NaN
  // Example
  
  // Input: 4129
  // Output: 9214
}

const isPalindrome = (n) => {
  // Find out if the number is Palindrome or not
  // Return a boolean value
  // return "WRONG INPUT" if the type of n is not a number or NaN
  
  // Palindrome number is such number which when reversed
  // is equal to the original number. For example: 121, 12321, 1001 etc.
  
  // Example
  
  // Input: 12321
  // Output: true
}

const powersOf2 = (n) => {
  // Count 2 to the power of 0 to n, concatenate those
  // into a string like: "1 2 4 8 16 32" and return it
  // return "WRONG INPUT" if the type of n is not number or NaN
  // return "WRONG INPUT" if the number is negative

  // Example

  // Input: 4
  // Output: "1 2 4 8 16"
}

const drawTriangle = (rows) => {
  // Return a string which represents a tringle in the output
  // Hint: to make a new line use "\n"
  // return "WRONG INPUT" if the type of n is not number or NaN
  // return "WRONG INPUT" if the number is negative
  
  // Example

  // Input: 5

  // Output: 
  // *
  // **
  // ***
  // ****
  // *****
}

module.exports = {
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
};