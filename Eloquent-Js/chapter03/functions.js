//* 1- sum of any 2 numbers
function Sum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
  else "Number not Found!";
}

// console.log("Sum :", Sum(2.1, 2));

//* 2- Find Max number in an array
function FindMaxNumber(array) {
  if (Array.isArray(array) && typeof array[0] === "number")
    return Math.max(...array);
  else "Array Not Found!";
}

// const array = [2, 5, 7, 10];
// console.log("Max number in array is: ", FindMaxNumber(array));

//* 3- Find Palindrome
function isPalindrome(word) {
  if (typeof word === "string") {
    const reverseWord = word.split("").reverse().join("");
    const result = word.localeCompare(reverseWord);
    if (result === 0) {
      return "Yes";
    } else {
      return "No";
    }
  } else {
    return "Incorrect input string";
  }
}

// console.log(`${isPalindrome("olo")}`);

//* 4- Reverse String
function reverseString(text) {
  if (typeof text === "string") {
    const reverseText = text.split("").reverse().join("");
    console.log(reverseText);
  } else {
    console.log("Incorrect input string");
  }
}

// reverseString("Lazy dog jump on a wall");
// reverseString(1334);

//* 5- JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function findEvenNumbers(array) {
  const evenArray = array.filter((num) => num % 2 === 0);
  console.log(evenArray);
}

// findEvenNumbers([1, 54, 6, 3, 2, 8, 5]);

//* 6- Find Factorial
function FindFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = i * factorial;
  }
  console.log(factorial);
}
// FindFactorial(5);

//* 7- Find largest element in nested array
function largestElementInArray(array) {
  const newArray = array.flat();
  const largestNumber = Math.max(...newArray);
  console.log(largestNumber);
}

// largestElementInArray([1, 4, 6, 24, 68, 32, [444, 66, 778, 999], [444, 10]]);

//* 8- Fibonacci
function Fibonacci(num) {
  let previous = 0;
  let next = 1;
  let series = 0;
  for (let i = 1; i <= num; i++) {
    series = previous + next;
    previous = next;
    next = series;
  }
  console.log(series);
}

Fibonacci(8);
