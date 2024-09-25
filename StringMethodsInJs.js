"use strict";

//? This file is only to learn & practise JS String Methods

//* EASY LEVEL

const str = "Hello World";
const programmingLanguage = "JavaScript";

//* Question 1: How do you find the length of a string in JavaScript?

//? Improved Question 01

function findLengthOfString(text) {
  typeof text === "string"
    ? console.log(`Length of '${text}' --> ${text.length}`)
    : console.log(`Please Provide Valid Input String!`);
}
findLengthOfString(str);
findLengthOfString(1);

//* Question 2: Write a function to convert the string "hello world" to uppercase using a JavaScript string method?
const Str_In_UpperCase = str.toUpperCase();
console.log(`'${str}' in UpperCase --> ${Str_In_UpperCase}`);

//* Question 3: How can you check if the string "JavaScript" contains the substring "Script"?
const Is_Contain_Word_Script = programmingLanguage.includes("Script");
console.log(
  `Does ${programmingLanguage} contain substring 'Script'? --> ${Is_Contain_Word_Script}`
);

//* MEDIUM LEVEL

const randomString = "JavaScript is awesome!";
const randomSentence = "The quick brown fox jumps over the lazy dog";
const randomText = "JavaScript is fun";

//* Question 4: Write a function to reverse the string "JavaScript is awesome!" using JavaScript string methods.
const Reverse_Random_String = randomString.split("").reverse().join("");
console.log(`Original String --> ${randomString}
Reversed String --> ${Reverse_Random_String}`);

//* Question 5: Given the string "The quick brown fox jumps over the lazy dog",
//* replace the word "lazy" with "active" using a string method.

const Replaced_Word = randomSentence.replace("lazy", "active");
console.log(`Original Sentence --> ${randomSentence}
New Sentence      --> ${Replaced_Word}`);

//* Question 6: Extract the first 5 characters from the string "JavaScript is fun"
//* and return them as a substring.

const Sub_String = randomText.substring(0, 5);
console.log(`SubString from '${randomText}' --> ${Sub_String}`);

//* HARD LEVEL

const simpleText = "javascript string manipulation";
const sampleText = "JavaScript is amazing";
const text = "JavaScript,HTML,CSS";

//* Question 7: Write a function to capitalize the first letter of
//* every word in the string "javascript string manipulation" using string methods.

const String_Array = simpleText.split(" ");
let Capitalize_First_Letter_Of_Each_Word = "";
String_Array.forEach((str) => {
  const Capitalized_Text = str.replace(
    str.split("")[0],
    str.split("")[0].toUpperCase()
  );

  Capitalize_First_Letter_Of_Each_Word =
    Capitalize_First_Letter_Of_Each_Word.concat(Capitalized_Text + " ");
});

console.log(`Original Text --> ${simpleText}
Capitalized Text --> ${Capitalize_First_Letter_Of_Each_Word}`);

//* Question 8: How can you remove all occurrences of the character "a"
//* from the string "JavaScript is amazing" without using loops?

const Remove_All_Occurences_Of_As = sampleText.replace(/\a/g, "");
console.log(Remove_All_Occurences_Of_As);

//* Question 9: Write a function that takes a string as input and removes any whitespace at the start
//* and end of the string, but also replaces all the spaces in the middle with a single space.

const TrimString = (str) => {
  const Trimmed_Text = str.trim().replace(/\s+/g, " ");
  return Trimmed_Text;
};

console.log(`Trimmed Text --> ${TrimString("Hello World    is  ")}`);

//* Question 10: Given the string "JavaScript,HTML,CSS", split the string into an array of words.
const array = [];
const Split_Into_Array = text.split(",").map((element) => array.push(element));
console.log(`Original Text -->  ${text}`);
console.log(array);
