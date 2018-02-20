
/**
 * 
 * TASKS FOR ARRAYS
 *  
 */

const findNumberGreaterThan10 = (arr) => {
  // The program must take an array of numbers as an argument
  // and return an array of numbers greater than or equal to 10.
}
const findNumberInArray = (arr, num) => {
  // The program must take an array of numbers and a number as arguments.
  // it should search for the inputed number in the array.
  // If found, return true 
  // If not found, return false
}
const concatenateArrays = (arrA, arrB) => {
  // The program must take 2 arrays of numbers as arguments
  // The program should concatenate (append, add) 2 arrays to each other
  // and return a new concatenated array.
}
const sumValues = (arr) => {
  // The program must take array of numbers as an argument
  // and return the sum of all values
}
const findMaxAndMin = (arr) => {
  // The program must take an array of numbers as an argument
  // find maximum and minumum numbers in the array
  // return an object { max, min } where "max" is a maximum number
  // and "min" is a minimum number
}
const reverseArray = (arr) => {
  // The program must take an array of numbers as an argument
  // and return the reverse of that array
}

/**
 * 
 * TASKS FOR OBJECTS AND ARRAYS
 *  
 */

const getLengthOfObject = (obj) => {
  // The program must take an object as an argument
  // and return the number of properties in it
}
const addCoolProperty = (obj) => {
  // The program must take an object as an argument
  // add "cool" property to it
  // assign value 123 to "cool" property
  // return modified obj
}
const arrayIntoObject = (arr) => {
  // The program must take an array of numbers as an argument
  // it should create an object with 2 properties (moreThan10, lessThan10)
  // moreThan10 is an array of values of "arr", which values are more than 10
  // lessThan10 is an array of values of "arr", which values are less than 10
  // return that object with 2 properties
}

module.exports = {
  findNumberGreaterThan10,
  findNumberInArray,
  concatenateArrays,
  sumValues,
  findMaxAndMin,
  reverseArray,
  getLengthOfObject,
  addCoolProperty,
  arrayIntoObject
}