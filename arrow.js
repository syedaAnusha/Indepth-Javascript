//* This file is only to learn & practise arrow functions

//* one line statement without "return" & atleast 1 parameter
var printName = (name) => name;
console.log(printName("Hey, I am peter!"));

//* one line statement without "return" no parameter
var getNumber = () => 42;
console.log(getNumber());

//* one line statement without "return" & 2 parameter
var calculatePrice = (quantity, tax) => quantity * 5 * (tax + 1);
console.log(calculatePrice(5, 0.95));

//* more than 1 line statement and with "return" statement
var calculatePrice = (quantity, tax) => {
  let price = quantity * 5;
  price *= tax + 1;
  return price;
};

console.log(calculatePrice(5, 0.95));

//* Using `()` in arrow function to return an "object literal"
var getNumber = (data) => ({ data: data, number: 42 });
console.log(getNumber("check"));

//* or Equivalently
var getNumber = function (data) {
  return {
    data: data,
    number: 42,
  };
};
console.log(getNumber("uncheck"));
