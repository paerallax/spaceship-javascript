// What will the code below output to the console and why?

const myObject = {
    foo: "bar",
    func: function() {
        const self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

/*
  You have an object like this:
  const obj = {
    firstName: "Bill",
    lastName: "Brown"
  }
  You need to write:
  1) getter "fullName" which returns fullname of a purson like "Bill Brown"
  2) function "hiEveryone" which logs "Hello everyone, my name is *fullName*" to the screen,
  where *fullName* is a string which returns getter "fullName"
  3) setter "setFullName" which sets firstName and lastName to the object
  4) add a prototype function "sayHello" to "obj" which logs "hello"
  5) create a class that extends "obj"
  6) overwrite the prototype function "sayHello" to log "hello, my name is *fullName*"
  where *fullName* is a string which returns getter "fullName"
*/

/*


 */
