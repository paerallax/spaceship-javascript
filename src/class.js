/*
  Task 1

  Create a constructor function for a car.
  That function should get 3 arguments:
  1) brand
  2) color
  3) type // (sedan, van, etc.)
  The instance of car should have:
  1) method "drive" which logs "Somebody is driving a car"
  2) method "turnOffEngine" which logs "The engine is turned off"
  3) method "turnOnEngine" which logs "The engine is turned on"
  4) properties brand, color, type, which are assigned using
  the argument the function get while called
  5) add a prototype function "addPetrol" which logs
  "Petrol is added to the car *brandOfTheCar*"
  where *brandOfTheCar* is a brand of the car
  6) add a prototype function "repaintCar" which gets one argument,
  changes color of the car to the given color and
  7) add a static function "whatIsSedan" which logs "sedan is a car :D"
*/

/*
  Task 2

  Do the previous task with "class"
  1) create a subclass Sedan which is inherited from Car
  2) add a constructor function to Sedan,
  which gets only 2 arguments: brand and color
  3) add a prototype function "shine" to Sedan which logs "this car shines!"
*/

/*
  Task 3

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
  Task 4

  So what are the ways to get string "hello" in this case
  Write as many as you can
  Note: try call, bind, apply
*/

a = 'hey';

const obj = {
    a: 'hello',
    f: function() {
        console.log(this.a);
    }
};


/*
   Bonus question!
   What will the code below output to the console and why?
   Write the answer and describe it
*/

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
  We also highly advise to read a book "You don't know JS"
  And this is a part of that book that perfectly describes this & prototypes:
  https://github.com/getify/You-Dont-Know-JS/tree/master/this%20&%20object%20prototypes

*/
