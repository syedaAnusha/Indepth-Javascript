const { SCRIPTS } = require("./SCRIPTS");
//* Exercises

//* Variables Definition
let arrayOfArray = [
  [1, 2],
  [3, 4],
  [true, false, "a"],
  ["hello world", "Higher order functions are good"],
];
let value = 0;

//* 1- Flattening

//* Use the reduce method in combination with the concat method to “flatten” an array of arrays
//* into a single array that has all the elements of the original arrays

function flattenArray(array) {
  return array.reduce((arr, emptyArr) => [...arr].concat(emptyArr), []);
}

// console.log("Flattened Array 👉", flattenArray(arrayOfArray));

//* 2- Your own loop

//* Write a higher-order function loop that provides something like a for loop statement.
//* It takes a value, a test function, an update function, and a body function. Each iteration,
//* it first runs the test function on the current loop value and stops if that returns false.
//* Then it calls the body function, giving it the current value. Finally, it calls the update
//* function to create a new value and starts from the beginning.
//* When defining the function, you can use a regular loop to do the actual looping.

function myOwnLoop(value, testFunc, updateFunc, bodyFunc) {
  let i = value;
  while (testFunc(i)) {
    bodyFunc(i);
    i = updateFunc(i);
  }
}

// myOwnLoop(
//   value,
//   (value) => value < 0,
//   (value) => value - 3,
//   (value) => console.log(value)
// );

//* 3- Everything

//* Analogous to the some method, arrays also have an every method. This
//* one returns true when the given function returns true for every element
//* in the array. In a way, some is a version of the || operator that acts on
//* arrays, and every is like the && operator.
//* Implement every as a function that takes an array and a predicate
//* function as parameters. Write two versions, one using a loop and one
//* using the some method

//* Using a loop - version 01

function mySome1(array, func) {
  let flagCounter = 0;
  array.forEach((element) => {
    if (func(element)) {
      flagCounter++;
    } else {
      flagCounter--;
    }
  });
  if (flagCounter === array.length) return true;
  else return false;
}

// console.log(mySome([3, 5, 7, 9], (n) => n % 3 === 0));
// console.log(mySome([1, 2, 3, 4], (n) => n > 0));
// console.log(mySome([true, true, false], (val) => val === true));
// console.log(mySome(["apple", "banana", "cherry"], (str) => str.includes("a")));

//* Using some method - version 02

function mySome2(array, func) {
  let flagCounter = 0;
  array.some((element) => {
    if (func(element)) {
      flagCounter++;
    } else flagCounter--;
  });
  if (flagCounter === array.length) return true;
  else return false;
}
// console.log(mySome2([3, 5, 7, 9], (n) => n % 3 === 0));
// console.log(mySome2([1, 2, 3, 4], (n) => n > 0));
// console.log(mySome2([true, true, false], (val) => val === true));
// console.log(mySome2(["apple", "banana", "cherry"], (str) => str.includes("a")));

//*  4- Dominant writing direction

//* Write a function that computes the dominant writing direction in a
//* string of text. Remember that each script object has a direction prop-
//* erty that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top
//* to bottom).The dominant direction is the direction of a majority of the characters
//* that have a script associated with them. The characterScript and countBy functions
//* defined earlier in the chapter are probably useful here.

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(121));
