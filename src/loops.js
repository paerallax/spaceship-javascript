const factorial = (n) => {
  // count factorial of the number and return it
  // return "WRONG INPUT" if the type of n is not number or NaN
  // return "WRONG INPUT" if the number is negative

  // Example

  // Input: 5
  // Output: 120
}


const sumOfOddNumbers = (n) => {
  // Sum all odd numbers from 0 to n and return the sum
  // return "WRONG INPUT" if the type of n is not a number or NaN
  // Example
  
  // Input: 10
  // Output: 25
}

const countNumberOfDigits = (n) => {
  // Count the number of digits in the number and return it
  // return "WRONG INPUT" if the type of n is not a number or NaN
  // Example
  
  // Input: 35419
  // Output: 5
}

const productOfDigits = (n) => {
  // Count the product of all digits in the number and return it
  // return "WRONG INPUT" if the type of n is not a number or NaN
  // Example
  
  // Input: 1234
  // Output: 24
}

const checkArmstrongNumber = (n) => {
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