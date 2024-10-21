//* 1- Object.keys
const person = { name: "anusha", gender: "female", age: "25" };
// console.log(Object.keys(person));

//* 2- delete in Object
// console.log(delete person.age);
// console.log(person);
// console.log("age" in person); //false
// console.log("nationality" in person); //false
// console.log("name" in person); //true

//* 3- Object.asssign
let obj = { x: "1", y: "2" };
// Object.assign(obj, { z: "3" });
// console.log(obj);

//* 4- Mutability in Objects
let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };
// console.log(obj1 === obj2);
// console.log(obj1 === obj3);
// console.log(obj2 === obj3);

obj1.value = 15;
// console.log(obj1);
// console.log(obj2);

const score = { visitors: 0, home: 0 };
score.visitors = 1;
// console.log(score);

//! NOT ALLOWED using 'const'
// score = { visitors: 0, home: 1 };
// console.log(score);

//* 5- Arrays
const array = [1, 2, 3, 2, 1];
// console.log(array.indexOf(2, 3)); //* start forwards, like 1,2,3,4 & so on...
// console.log(array.lastIndexOf(2, 2)); //* start backwards, like index 4,3,2,1 & so on..

//* 6- Slice
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.slice(-2, -7)); //* return empty array[], because start index (-2) is greater than end index (-7)
// console.log(arr.slice(-4)); //* start backwards : 0,-1,-2,-3 & so on...
// console.log(arr.slice(-8, 4));
const str = "hello";

const newArr = arr.concat(str);
// console.log(newArr);

const fruit = "Apple";
const fruitInArray = ["A", "P", "P", "L", "E"];
// console.log(fruit.indexOf("A")); //* case sensitive
// console.log(fruitInArray.indexOf("a")); //* case sensitive

//* 7- String Method - padStart
let letter = "ABC";
// console.log(letter.padStart(26, "DEFGHIJKLMNOPQRSTUVWXYZ"));
// console.log(letter.padEnd(26, "DEFGHIJKLMNOPQRSTUVWXYZ"));

//* 8- Rest Operator
const words = ["Hello", "World"];
const newWords = [...words, "I", "am", "Here"];
// console.log([...newWords, "I", "am", "another", "array"]);

//* 9- JSON
const data = { squirrel: false, events: ["weekend"] };
const stringifyData = JSON.stringify(data);
// console.log("Stringify :", stringifyData);
// console.log("Parse :", JSON.parse(stringifyData));

//* Recursion

//* Print N to 1
function printNumbers(num) {
  if (num < 0) {
    return;
  } else {
    console.log(num);
    printNumbers(num - 1);
  }
}
// printNumbers(5);

//* Print N to 1 with (Backtracking) and not doing num-1
function printNumbersUsingBacktracking(start, end) {
  if (start > end) return;
  else printNumbersUsingBacktracking(start + 1, end);
  console.log(start);
}

// printNumbersUsingBacktracking(1, 5);
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

// console.log("Range", range(5, 2, -1));
function sum(arr) {
  let sum = 0;
  arr.forEach((number) => {
    sum = number + sum;
  });
  return sum;
}
// console.log("Sum", sum(range(1, 10, 2)));

//* Reversing An Array
let originalArray = [1, 5, 7, 3, 9];
function reverseArray(arr) {
  let revArray = [];
  for (let i = 0; i < arr.length; i++) {
    revArray.unshift(arr[i]);
  }
  return revArray;
}
// console.log("Reverse Array", reverseArray(originalArray));

function reverseArrayInPlace(arr) {
  return reverseArray(arr.sort());
}
// console.log("Reverse Array In Place", reverseArrayInPlace(originalArray));

//* Array To List
let dummyArray = [1, 2, 3];
function ArrayToList(arr) {
  let list = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

// console.log("ArrayToList :", ArrayToList(dummyArray));

let list = null;
function ArrayToListWithRecursion(index, arr) {
  if (index > arr.length - 1) {
    return;
  } else {
    ArrayToListWithRecursion(index + 1, arr);
    list = { value: arr[index], rest: list };
    // console.log(list);
  }
  return list;
}
// const newList = ArrayToListWithRecursion(0, dummyArray);
// console.log("ArrayToList", newList);

//* List To Array
let toArray = [];
function listToArray(list) {
  if (list.rest === null) {
    toArray.push(list.value);
    return;
  } else {
    toArray.push(list.value);
    listToArray(list.rest);
  }
  return toArray;
}
// console.log(listToArray(newList));

function prepend(element, list) {
  const newList = { value: -1, rest: {} };
  newList.value = element;
  newList.rest = list;
  return newList;
}

// const prependList = prepend(20, list);

function findElement(index, list) {
  let arr = listToArray(list);
  let element = arr.find((ele) => {
    if (ele === arr[index]) return ele;
    else {
      return undefined;
    }
  });
  return element;
}

// console.log(findElement(2, prependList));

let element = null;
let i = 0;
function findElementRecursively(index, list) {
  if (list.rest === null) {
    if (i === index) {
      element = list.value;
      return element;
    } else {
      element = undefined;
      return element;
    }
  } else {
    if (i === index) {
      element = list.value;
      return element;
    }
    i++;
    findElementRecursively(index, list.rest);
  }
  return element;
}
// console.log(findElementRecursively(0, prependList));

//* Deep comparison
const pet = {
  name: "Cat",
  sound: "meow",
};

const wild = {
  name: "Lion",
  sound: "roar",
};
let index = 0;
let flag = null;

function deepEqual(value1, value2) {
  if (typeof value1 == "object" && typeof value2 == "object") {
    if (Object.keys(value1).length === Object.keys(value2).length) {
      deepEqual(Object.keys(value1)[index], Object.keys(value2)[index]);
    } else {
      flag = false;
      return flag;
    }
  } else {
    if (value1 === value2) {
      flag = true;
      if (
        Object.keys(value1).length === index + 1 &&
        Object.keys(value2).length === index + 1
      ) {
        return;
      } else {
        index++;
      }
    } else {
      flag = false;
      if (
        Object.keys(value1).length === index + 1 &&
        Object.keys(value2).length === index + 1
      ) {
        return;
      } else {
        index++;
      }
    }
  }
  if (typeof value1 == "object" && typeof value2 == "object") {
    deepEqual(Object.keys(value1)[index], Object.keys(value2)[index]);
  }
  return flag;
}

// console.log(deepEqual(pet, wild));

//* Some More Exercises on Arrays & Objects - Generated by Chat-GPT

//* Easy

//* 1- Question: How do you create an array with the elements "apple",
//* "banana", and "orange" and access the second element of the array?

const elements = "apple , banana, orange";
const fruits = elements.split(",");
// console.log("Fruits", fruits);
// console.log(fruits[1]);

//* 2- Question: Given the object person = { name: "John", age: 30 },
//* how would you access the value of the "name" property?

const pupil = { Name: "john", Age: 30 };
const { Name } = pupil;
// console.log(Name);

//* 3- Question: How do you add an element "grape" to
//* the end of an array fruits = ["apple", "banana", "orange"]?

fruits.push("grapes");
// console.log(fruits);

//* Medium

//* 4- Question: Write a code snippet that checks if the array
//* [10, 20, 30, 40] contains the number 30 and returns true or false.

function checkIfContainsNumber(num, arr) {
  if (arr.includes(num)) {
    return true;
  } else return false;
}
// console.log(checkIfContainsNumber(20, [10, 20, 30, 40]));

//* 5- Question: Given the array numbers = [1, 2, 3, 4, 5],
//* how would you remove the first element from the array and print the updated array?

function removeFirstNumber(num, arr) {
  if (arr.includes(num)) {
    arr.shift();
    return arr;
  } else {
    return `${num} doesn't exist in array`;
  }
}

// console.log(removeFirstNumber(10, [10, 20, 30, 40]));

//* 6- Question: Create an object book with properties title, author, and year.
//* Then, write a code snippet to add a new property called publisher to this object.

const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  year: 2000,
};

//* I - Using dot notation (.)
// book.publisher = "RT publishers";

//* II - Using square brackets notation [ ]
// book.date = {};
// book["date"]["release date"] = "12/2/2001";

//* III - Using Object.defineProperty() method
// Object.defineProperty(book, "Volume", { value: "II", writable: true });

//* IV - Using Object.assign() method
// Object.assign(book, {
//   year: 2001,
//   date: { "release date": "2/2/2001" },
//   ["copies sold"]: 5000,
// });

//* V - Using spread operator syntax
// console.log({
//   ...book,
//   ["genere"]: "Fictional",
//   characters: "Harry Potter, Dolby",
//   year: 2005,
// });

//* 7- Given the array users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }],
//* how would you find the object where the name is "Bob"?

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const user = users.find((user) => {
  if (user.name === "Bob") return user;
});
// console.log(user);

//* 8- How would you use the spread operator to combine
//* two arrays, [1, 2, 3] and [4, 5, 6], into one array?

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = [0, ...arr1, ...arr2];
// console.log(newArray);

//* 9- Use the rest parameter to create a function sum
//* that accepts any number of arguments and returns their sum.

function sumNumbers(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

// console.log(sumNumbers(3, 4, 5, 6, 7, 9, ...arr1));

//* REST & SPREAD OPERATOR

//* REST

function myBio(firstname, lastname, company) {
  return `${firstname} ${lastname} runs ${company}`;
}

const bio_data = ["Anusha", "Syeda", "Jupiter"];
let bio = myBio(...bio_data);
// console.log(bio);

//* Destructuring with rest - array
const [firstname, ...otherInfo] = bio_data;
// console.log(firstname);
// console.log(otherInfo);

//* Destructuring with rest - object
const personal_data = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  companyName: "CodeSweetly",
  profession: "Web Developer",
  gender: "Male",
};

const { companyName, profession, ...otherdata } = personal_data;
// console.log(otherdata);

function printNames(first, last, ...others) {
  console.log(first);
  console.log(last);
  console.log(others);
}

// printNames("Alice", "Bob", "Charlie", "David", "Alizabeth");

//* Spread
//* 1- How Spread Works in an Array Literal
const myName = ["Anusha", "is", "my"];
const aboutMe = ["Syeda", ...myName, "name"]; //* here change in myName will not be reflected in aboutMe
// console.log(aboutMe);

//* 2- How to Use Spread to Convert a String into Individual Array Items
const myStr = "Anusha";
// console.log([...myStr]);

//* 3- How the Spread Operator Works in a Function Call
const numbers = [1, 3, 4, 6, 8];
function addNumbers(a, b, c) {
  return a + b + c;
}
// console.log(addNumbers(...numbers));

const myFirstName = "Anusha Syeda";

function spellName(a, b, c) {
  return a + b + c;
}

// console.log(spellName(...myFirstName));
// console.log(spellName([...myFirstName]));
// console.log(spellName(...myFirstName[3]));
// console.log(spellName({ ...myFirstName }));

//* 4- How Spread Works in an Object Literal
const names = ["Aliza", "Peter", "John"];
const newBio = { ...names, runs: "codesweetly.com" };
// console.log(newBio);
//* 5- The spread operator does not clone identical properties
let newName = { firstname: "peter", lastname: "john" };
let myNewBio = { ...newName, firstname: "alizabeth" };
// console.log(myNewBio);

//* 6- What if myName contains non-primitive items?
newName = [["Aliza", "Peter", "Johnss"]];
let aboutOnlyMe = ["alizabeth", ...newName, "name"];
// console.log(aboutOnlyMe);

//? You do shallow copy when you create references while cloning one object into another.
//? For instance, ...myName produces a shallow copy of the myName object
//? because whatever alteration you make in one will reflect in the other.

const MyName = {
  fullname: { firstname: "Peter", lastName: "John" },
};

const BioData = { ...MyName }; //* Deep Object, Shallow copy

// MyName.fullname.lastName = "Slack";
// console.log(BioData);

//? You do deep copy when you clone objects without creating references.
//? For instance, I could deep copy myName into bio by doing
//? const bio = JSON.parse(JSON.stringify(myName)).
//? By doing so, the computer will clone myName into bio without creating any reference.

const newBioData = JSON.parse(JSON.stringify(MyName));
// MyName.fullname.lastName = "Slack";
// console.log(newBioData);

//? You can break off the reference between the two objects by replacing the fullName object
//? inside myName or bio with a new object. For instance, doing
//? myName.fullName = { firstName: "Tobi", lastName: "Sofela" }
//? would disconnect the pointer between myName and bio.

MyName.fullname = { firstname: "Tobi", lastName: "Sofela" };
// console.log(MyName);
// console.log(BioData);

//* Hard - Final

//* 1- Write a function mergeObjects that accepts any number of objects as arguments and
//* returns a new object that combines all the properties of the input objects.
//* If a property key exists in more than one object, the latest value should
//* overwrite the previous ones.

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const object3 = { a: 5, d: 6 };
function mergeObjects(...objects) {
  let newObject = {};
  for (const element of objects) {
    // newObject = { ...newObject, ...element }; //1-way
    Object.assign(newObject, element); //2nd -way
  }
  console.log(newObject);
}
// mergeObjects(object1, object2, object3);

//* 2- Create a function flattenAndFilter that takes an array of arrays as input,
//* flattens it using the spread operator, and then filters out any
//* values that are null, undefined, or false.

let arrayOfArrays = [
  [1, 2, null],
  [3, false, 4],
  [undefined, 5],
];
function flattenAndFilter(array) {
  let newArray = [];
  for (const ele of array) {
    newArray = [...newArray, ...ele];
  }
  const output = newArray.filter((num) => {
    if (typeof num === "number") return num;
  });
  console.log(output);
}
// flattenAndFilter(arrayOfArrays);

//* 3- Write a function getMaxPropertyValues that takes an array of objects
//* and a property name as arguments, then returns the object that has the
//* highest value for the given property. Use the spread operator to pass
//* the values to Math.max().

let players = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 70 },
];

function getMaxPropertyValues(object, property) {
  let scores = object.map((obj) => obj[property]);
  let maxNum = Math.max(...scores);
  let playerWithHighestScore = object.filter((player) => {
    if (player.score === maxNum) return player;
  });
  console.log(...playerWithHighestScore);
}
// getMaxPropertyValues(players, "score");

//* 4- Using the rest operator, write a function sumProperties that accepts multiple
//* objects and a property name. The function should return the sum of the values
//* for that property across all the objects.

let products = [
  { product: "A", price: 50 },
  { product: "B", price: 30 },
  { product: "C", price: 20 },
];

function sumProperties(property, ...object) {
  let prices = object.map((obj) => obj[property]);
  let sumOFAllPrices = 0;
  prices.forEach((p) => {
    sumOFAllPrices += p;
  });

  console.log(sumOFAllPrices);
}

// sumProperties(
//   "price",
//   { product: "A", price: 50 },
//   { product: "B", price: 30 },
//   { product: "C", price: 20 }
// );

//* 5- Write a function combineArraysAndObjects that takes an arbitrary number
//* of arrays and objects as arguments. The function should return a single object
//* where the keys are the indices of the arrays (flattened into a single array)
//* and the values are the corresponding objects. If no object is provided for a
//* particular index, assign the value as null.

function combineArraysAndObjects(...params) {
  let obj = [].concat(...params);
  console.log({ ...obj });
}

// combineArraysAndObjects([1, 2], [3, 4], { a: 5 }, { b: 6 });
