/*

  Hi everyone!
  Use presentation slides as a reference to solve these problems:
  https://yerevancoder.com/2018-03-27-ecmascript6-part1/

  EVERY task you should implement in both ES5 and ES6

*/


// 1.
// Solve both with arrow function and standard function
// You have an array of numbers "nums" below
const nums = [1, 43, 21, 34, 23];
// Map through this array using ".map".


// 2.
// Solve both with arrow function and standard function
// You have a constructor function Func
// Create a function inside "Func", which adds property "name" to "this" of constructor function "Func"
const Func = function() {

}
const inst = new Func;
// console.log(inst); // should return { name: 'MyName' }


// 3.
// You have a function add, which gets 3 arguments: "a", "b", "c"
const add = (a, b, c) => {
    return a + b + c;
}
// Modify the function, so that
// b should have a default value 5, c should have a default value 12


// 4.
// You have a function "f" which gets uncontrolled amount of arguments.
const f = (a) => {

}
// Modify this function such that it returns the number of arguments it gets when called.


// 5.
// You have 2 arrays of numbers
const a = [1, 34, 54, 3];
const b = [3, 4, 12, 4, 2];
// concatenate these arrays and put the result in variable another variable


// 6.
// You have an object "person"
const person = {
    firstName: "Brendan",
    lastName: "Eich"
}
// create a function which prints "- Who is (firstName) (lastName)?\nHe created Javascript!"
// that function should use object "person"


// 7.
// Call this function both with template literals(ES6) and standard function call.
// !WARNING! that funciton should print a string
const printString = s => console.log(s);


// 8.
// You have a function which gets this object
const weirdObject = {
    first: 1,
    second: 2,
    someObject: {
        strangeArray: [1, 2, 3],
        what: "what"
    }
}
// You have to destructure this object's every property (assign array's values to variables of your choice)
