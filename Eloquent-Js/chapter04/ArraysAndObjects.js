//* 1- Object.keys
const person = { name: "anusha", gender: "female", age: "25" };
console.log(Object.keys(person));

//* 2- delete in Object
console.log(delete person.age);
console.log(person);
console.log("age" in person); //false
console.log("nationality" in person); //false
console.log("name" in person); //true

//* 3- Object.asssign
let obj = { x: "1", y: "2" };
Object.assign(obj, { z: "3" });
console.log(obj);

//* 4- Mutability in Objects
let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };
console.log(obj1 === obj2);
console.log(obj1 === obj3);
console.log(obj2 === obj3);

obj1.value = 15;
console.log(obj1);
console.log(obj2);

const score = { visitors: 0, home: 0 };
score.visitors = 1;
console.log(score);

//! NOT ALLOWED using 'const'
// score = { visitors: 0, home: 1 };
// console.log(score);

//* 5- Arrays
const array = [1, 2, 3, 2, 1];
console.log(array.indexOf(2, 3)); //* start forwards, like 1,2,3,4 & so on...
console.log(array.lastIndexOf(2, 2)); //* start backwards, like index 4,3,2,1 & so on..

//* 6- Slice
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.slice(-2, -7)); //* return empty array[], because start index (-2) is greater than end index (-7)
console.log(arr.slice(-4)); //* start backwards : 0,-1,-2,-3 & so on...
console.log(arr.slice(-8, 4));
const str = "hello";

const newArr = arr.concat(str);
console.log(newArr);

const fruit = "Apple";
const fruitInArray = ["A", "P", "P", "L", "E"];
console.log(fruit.indexOf("A")); //* case sensitive
console.log(fruitInArray.indexOf("a")); //* case sensitive

//* 7- String Method - padStart
let letter = "ABC";
console.log(letter.padStart(26, "DEFGHIJKLMNOPQRSTUVWXYZ"));
console.log(letter.padEnd(26, "DEFGHIJKLMNOPQRSTUVWXYZ"));

//* 8- Rest Operator
const words = ["Hello", "World"];
const newWords = [...words, "I", "am", "Here"];
console.log([...newWords, "I", "am", "another", "array"]);

//* 9- JSON
const data = { squirrel: false, events: ["weekend"] };
const stringifyData = JSON.stringify(data);
console.log("Stringify :", stringifyData);
console.log("Parse :", JSON.parse(stringifyData));

//* Excercises from Book

//* Sum of Range
function range(start, end, step) {
  let range = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
    return range;
  } else if (step < 0 && start > end) {
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
    return range;
  } else {
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }
}

console.log("Range", range(5, 2, -1));
function sum(arr) {
  let sum = 0;
  arr.forEach((number) => {
    sum = number + sum;
  });
  return sum;
}
console.log("Sum", sum(range(1, 10, 2)));

//* Reversing An Array
let originalArray = [1, 5, 7, 3, 9];
function reverseArray(arr) {
  let revArray = [];
  for (let i = 0; i < arr.length; i++) {
    revArray.unshift(arr[i]);
  }
  return revArray;
}
console.log("Reverse Array", reverseArray(originalArray));

function reverseArrayInPlace(arr) {
  return reverseArray(arr.sort());
}
console.log("Reverse Array In Place", reverseArrayInPlace(originalArray));
