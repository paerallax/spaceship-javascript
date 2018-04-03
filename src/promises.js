// 1.
// create a function which returns promise which resolves when the passed number is bigger or equal 0
// rejects when the number is lower than 0.
// .then the promise and console.log the passed number
// Don't forget to .catch it!

// 2.
// You can skip it if you don't know async/await yet. It will be later today
// instead of .then use async/await

// 3.
// Create the same function which instead of promise uses callback!

// 4. Create a generator function which prints all numbers from `num` to 0 after each `.next`
// You can skip it if you don't know generators yet. It will be later today
// num is always positive
// HINT: probably you have to use while loop

// 5. create 5 different promises which resolve to some kind of number like
// const promm = new Promise((res, rej) => res(5));
// then use Promise.all to combine all of the promises in one and run resolve that promise

// 6. write a function which takes a number as an argument and resolves it.
// .then should take a function which returns one more promise. That promise should resolve to `num * 4`
// in the next .then you should console.log the number that you get from the promise.

/*
  We run a server on https://ef937523.ngrok.io
  This part should be run in browser as it uses `fetch`
*/

// 7. You should do fetch('https://ef937523.ngrok.io/twitter')
// This is a promise which resolves to a response object
// Then you should do JSON.parse(res). That is a promise that resolves to twitter object
// console.log that twitter object

// 8. You should do fetch('https://ef937523.ngrok.io/images')
// This is a promise which resolves to a response object
// Then you should do JSON.parse(res). That is a promise that resolves to an object which contains an array
// Then you should map through each element of the array (which is an image url) and do fetch that url
// console.log the response of that fetch

// *whew* :D
