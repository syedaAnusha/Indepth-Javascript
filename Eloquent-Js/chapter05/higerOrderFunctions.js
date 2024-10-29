//* Exercises

//* Variables Definition
let arrayOfArray = [
  [1, 2],
  [3, 4],
  [true, false, "a"],
  ["hello world", "Higher order functions are good"],
];
let value = 10;
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
  for (i = value; i > 0; i--) {
    if (!testFunc(i)) return false;
    bodyFunc(i);
    updateFunc(i);
  }
}

console.log(
  myOwnLoop(
    value,
    (value) => value > 1,
    (value) => value / 2,
    (value) => console.log(value)
  )
);
