//* Mutator Methods

let array = [1, 2, 3, 4];
let newArr = [50, 40, 30, 20, 10];

//* 1- push(): Task: Add the numbers 5 and 6 to the end of the array
array.push(5, 6);
// console.log(array);

//* 2- pop(): Remove the last element from the array.
array.pop();
// console.log(array);

//* 3- shift():  Remove the first element from the array.
array.shift();
// console.log(array);

//* 4- unshift(): Add the elements 'kiwi' and 'orange' to the beginning of the array
array.unshift("kiwi", "orange");
// console.log(array);

//* 5- splice(): Remove 2 elements starting from index 1 and insert 'a' and 'b'.
array.splice(1, 2, "a", "b");
// console.log(array);

//* 6- sort(): Sort the array in ascending order.
newArr.sort(); //* by default, It prints value in ascending order
// console.log(newArr);
array.sort((a, b) => b - a);
// console.log(array);

//* 7- reverse(): Reverse the elements of the array
// console.log(newArr.reverse());

//* 8- fill(): Fill the array with the value 0 from index 1 to 3
array.fill(0, 1, 2); //* end is exclusive
// console.log(array);

//* 9- copyWithin(): Copy part of the array starting at index 3 to index 0.
newArr.sort();
newArr.copyWithin(3, 0, 2); //* here, end is exclusive
// console.log(newArr);

//* Accessor Methods

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let arr = [1234567.89];
let lettersArr = ["a", "b", "c", "d", "e"];

//* 1- concat(): Concatenate two arrays: [1, 2] and [3, 4]
let concatedArray = odd.concat(even);
// console.log(concatedArray);

//* 2- slice(): Extract elements from index 1 to 3 from the array.
const extractElements = concatedArray.slice(1, 3);
// console.log(extractElements);

//* 3- join(): Join the array elements with a hyphen (-) as a separator.
let elementsWithHyphen = concatedArray.join("-");
// console.log(elementsWithHyphen);

//* 4- indexOf(): Find the index of the element 7
// console.log(concatedArray.indexOf(7));

//* 5- lastIndexOf(): Find the last index of the element 5 in the array.
// console.log(odd.lastIndexOf(5));

//* 6- includes(): Check if the array contains the element 20.
// console.log(odd.includes(20));

//* 7- toString(): Convert the array to a string.
// console.log(even.toString());

//* 8- toLocaleString(): Convert the array to a localized string.
// console.log(arr.toLocaleString());

//* 9- entries(): List all key/value pairs of the array
// console.log([...lettersArr.entries()]);

//* 10- every(): Check if all elements in the array are greater than 10.
let isAboveTen = even.every((n) => n > 10);
// console.log(isAboveTen);

//* 11- some(): Check if some elements in the array are less than 10
isAboveTen = even.some((n) => n < 10);
// console.log(isAboveTen);

//* 12- find(): Find the first element greater than 7.
let num = odd.find((n) => n > 7);
// console.log(num);

//* 13- findIndex(): Find the index of the first element that is less than 5
let findNum = odd.findIndex((n) => n > 5);
// console.log(findNum);

//* 14- keys(): Get all the keys of the array.
let keys = [...lettersArr.keys()];
// console.log([...lettersArr.keys()]);

//* 15- values(): Get all the values of the array
// console.log([...lettersArr.values()]);

//* 16- foreach(): Log each element multiplied by 2.
// odd.forEach((ele) => console.log(ele * 2));

//* 17- map(): Create a new array where each element is multiplied by 3
let newArray = even.map((num) => num * 3);
// console.log(newArray);

//* 18- filter(): Create a new array with elements greater than 12.
let filteredArray = newArray.filter((n) => n > 12);
// console.log(filteredArray);

//* 19- reduce(): Find the sum of all elements in the array
let sum = filteredArray.reduce((p, c) => p + c, 0);
// console.log(sum);

//* 20- reduceRight(): Subtract elements from right to left.
let dummyArray = [1, 2, 3, 4]; //* 4-3-2-1
let reducedRight = dummyArray.reduceRight((p, c) => c - p, 0);
// console.log(reducedRight);

//* More Array Methods in JavaScript
//* toSpliced()
const months = ["Jan", "Feb", "Mar", "Apr"];
// console.log(months.toSpliced(0, 1));

//* flatMap()
const myArray = [1, 2, 3, 4, 5];
// console.log(myArray.flatMap((x) => [x, x * 10]));

//* with()
const moreMonths = ["Januar", "Februar", "Mar", "April"];
// console.log(moreMonths.with(2, "March"));

//* of()
// console.log(
//   Array.of("Hello", 1, 2, 3, "kabooommm", { name: "peter", age: 2 }, [
//     "bye",
//     "bye",
//   ])
// );

// console.log(Array.of(7));
// console.log(Array(7));

//* at()
// console.log(moreMonths.at(3));

//* indexOf with bitwise NOT (~) operator

//* if found, it returns minus(-) with index number,
//* e.g. -1,-2,-3 and so on, and, returns 0 if not found.

let furniture = ["chair", "sofa", "bed", "almira"];
// console.log(~furniture.indexOf("sofa"));

//* filter out falsy values from an array.
const arrayWithFalsyValues = [
  1,
  3,
  5,
  6,
  "hello",
  "a",
  undefined,
  null,
  "",
  false,
];
// console.log(arrayWithFalsyValues.filter(Boolean));

//* HARDEST

//* 1- Given an array of strings, return the string that appears most
//* frequently. If multiple strings have the same frequency, return the
//* one that comes first lexicographically.

let favFruits = ["Apple", "apple", "Banana", "banana", "Apple", "banana"];
function getHighestFrequency(obj) {
  let maxNum = Math.max(...Object.values(obj));
  for (const key in obj) {
    if (obj[key] === maxNum) {
      return key;
    }
  }
}

function getWordWithHighestFrequency(array) {
  let list = {};
  let regex =
    /@|#|\$|!|%|&|\^|\*|-|\+|_|=|{|}|\[|\]|\(|\)|~|`|\.|\?|\<|\>|,|\/|:|;|"|'|\\/;
  array.forEach((element) => {
    if (Object.keys(list).includes(element)) {
      if (regex.test(element)) {
        list[element]--;
      } else {
        list[element]++;
      }
    } else {
      list[element] = 1;
    }
  });
  return getHighestFrequency(Object.fromEntries(Object.entries(list).sort()));
}
console.log(getWordWithHighestFrequency(favFruits));
