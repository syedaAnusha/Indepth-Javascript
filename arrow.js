//* This file is only to learn & practise arrow functions

//* one line statement without "return" & atleast 1 parameter
// var printName = (name) => name;
// console.log(printName("Hey, I am peter!"));

//* one line statement without "return" no parameter
// var getNumber = () => 42;
// console.log(getNumber());

//* one line statement without "return" & 2 parameter
// var calculatePrice = (quantity, tax) => quantity * 5 * (tax + 1);
// console.log(calculatePrice(5, 0.95));

//* more than 1 line statement and with "return" statement
// var calculatePrice = (quantity, tax) => {
//   let price = quantity * 5;
//   price *= tax + 1;
//   return price;
// };

// console.log(calculatePrice(5, 0.95));

//* Using `()` in arrow function to return an "object literal"
// var getNumber = (data) => ({ data: data, number: 42 });
// console.log(getNumber("check"));

//* or Equivalently
// var getNumber = function (data) {
//   return {
//     data: data,
//     number: 42,
//   };
// };
// console.log(getNumber("uncheck"));

//* Using arrow functions to create IIEF!

// var fn1 = (function (number) {
//   return {
//     getNumber: function () {
//       return number;
//     },
//   };
// })(44);
// console.log(fn1.getNumber());

// var fn2 = (function printName(name) {
//   return function getName() {
//     return name;
//   };
// })("Anusha");

// console.log(fn2());

//* Tale about "this"

//* 1- Function Invocation
// function taleAboutThis() {
//   console.log(this);
// }
// taleAboutThis();
// if (window == this) {
//   console.log("this refers to the Global Context!");
// }

//* 2- Metjod Invocation
// let obj = {
//   name: "fancy",
//   operation: function () {
//     console.log(this);
//   },
// };

// let obj2 = {
//   name: "Fairy",
// };

// obj.operation(); //* method invocation

// let x = obj.operation;
// x(); //* function invocation

// let operation = obj.operation;
// operation.call(obj2);

//* 3- Constructor Invocation

//* Constructor Function!
function Employee(name, age) {
  this.name = name;
  this.age = age;

  console.log("Welcome", this.name, "!");
}

let Employee1 = new Employee("Syeda Anuhsa", 23);

//* here new Employee is Constructor Invocation!
Employee1;
