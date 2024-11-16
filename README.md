### Notes

<br>

# Chapter01 : Values, Types & Operators

<br>

1. NaN == NaN is always equals to **false**.
2. null == undefined is equals to **true**.
3. null === undefined is equals to **false**.
4. Type of null is **Object**.
5. Type of undefined is **undefined**.
6. Type of NaN is **Number**.
7. null == 0 , undefined == 0 is ideal When you want to **test** whether **a value has a real value** instead of null or undefined.
8. '||' --> only evaluates Left-Hand Side, when it evaluates to **true**.
9. We can use this functionality **'||'** as a way to **fall back on a default value**.
10. **0, false, NaN, empty string (""), null and undefined** are always evaluate to false
11. '&&' --> only evaluates Left-Hand Side, when it evaluates to **false**.

<br>

# Chapter02 : Program Structure

<br>

1. When `continue` is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.
2. The standard JavaScript functions, and most JavaScript programmers, follow the style where — they capitalize every word except the first. e.g. **fizzBuzz**
3. Ways to initialize **array** or **matrix**

- `let array = [['a','b'], [1,2], ['hello', 'world']]`

* Here, "map" will create a copy of array, and thus changes will only reflect in respective [row][col] **(Recommended)** ✔️

  - `const matrix1 = new Array(4).map(() => Array(4).fill("#"));`

  - `const matrix2 = [...Array(3)].map(() => Array(5).fill(2));`

* Here, it does not create the copy of Array(4), results in changing` matrix2[0][0] = "@"`, will changes all the `matrix2[rows][0]`. **(Not Recommended)** ❌

  - `const matrix3 = new Array(4).fill(new Array(6).fill("#"))`;

<br>

# Chapter03 : Functions

<br>

1. If you pass too many `args`, the extra ones are **ignored**. If you pass too few, the missing parameters get assigned the value **undefined**
2. A function that references bindings from local scopes around it is called a **closure**.

<br>

# Chapter04 : Array and Objects

<br>

1. null.length; --> //TypeError: null has no properties
2. The two main ways to access properties in JavaScript are with a dot and with square brackets.
3. Both **value.x** and **value[x]** access a property on value but not necessarily the same property
4. When using a dot, the word after the dot is the **literal name** of the property
5. When using square brackets, the expression between the brackets is evaluated to get the property name
6. **Properties that contain functions** are generally called **methods** of the value they belong to, as in “toUpperCase is a method of a string”
7. Braces have two meanings in JavaScript.

   - At the start of a statement, they start a block of statements.
   - In any other position, they describe an object.

8. Reading a **property** that doesn’t exist will give you the value **undefined**
9. The `delete` operator is a unary operator that, when applied to an object property, will remove the named property from the object
10. The binary `in` operator, when applied to a string and an object, tells you whether that object has a property with that name.
11. To find out what properties an object has, you can use the `Object.keys` function.
12. There’s an `Object.assign` function that copies all properties from one object into another.
13. Arrays, then, are just a kind of object specialized for storing sequences of things.
14. Objects work differently. You can change their properties, causing a single object value to have different content at different times
15. if a property name in brace notation isn’t followed by a value, its value is taken from the binding with the same name.
16. Arrays have an `includes` method that checks whether a given value exists in the array.
17. `for of` : This works not only for arrays but also for strings and some other data structures.
18. `lastIndexOf` is case-sensitive, searches the string from the end to the beginning, returns -1 if the value is not found.
19. `slice`, which takes **start** and **end indices** and returns an **array** that has only the elements between them. The start index is **inclusive**, the end index is **exclusive**.
20. If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.
21. The code `arr.slice(-2, -7)` prints an empty array because the `slice` method doesn't work when the **starting index** is **greater** than the **ending index**.
22. `slice` method always go from **left** to **right**.
23. `let kim = "Kim";`
    `kim.age = 88;`
    `console.log(kim.age);` // → undefined

    - Values of type string, number, and Boolean are not objects, and though the language doesn’t complain if you try to set new properties on them, it doesn’t actually store those properties. Such values are immutable and cannot be changed

24. One difference is that a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.
25. `indexOf`: is `case-sensitive` either used with **strings** or **Arrays**.
26. The `trim` method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.
27. `padStart` that takes the desired length and padding character as arguments.
28. here is only one Math object, and it is almost never useful as a value. Rather, it provides a namespace so that all these functions and values do not have to be global bindings
29. For random numbers, the machine keeps some hidden value, and whenever you ask for a new random number, it performs complicated computations on this hidden value to create a new value. It stores a new value and returns some number derived from it. That way, it can produce ever new, hard-to-predict numbers in a way that seems random.
30. `Serialize` the data. That means it is converted into a flat description. A popular serialization format is called **JSON (pronounced “Jason”)**, which stands for **JavaScript Object Notation**. It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript.
31. JSON looks similar to JavaScript’s way of writing arrays and objects, with a few restrictions.

    - All property names have to be surrounded by double quotes.
    - Only simple data expressions are allowed, no function calls, bindings, or anything that involves actual computation.
    - Comments are not allowed in JSON

32. JavaScript gives us the functions `JSON.stringify` and `JSON.parse` to convert data to and from this format.

    - `JSON.stringify` takes a JavaScript value and returns a JSON-encoded string.
    - `JSON.parse` The second takes such a string and converts it to the value it encodes.

33. Below are the list of loops that iterates over an Array.
    - `for each`
    - `for of`
    - `for in`
    - `for`
    - `while`
34. There are 5 ways, we can assign new property and value to object.
    - Using dot notation (.)
    - Using square brackets notation [ ]
    - Using Object.defineProperty() method
    - Using Object.assign() method
    - Using spread operator syntax
35. Advantage of **square brackets notation []** over **dot notation (.)**
    - we can name the property variable with identifiers (say all digits, having spaces, special characters).
    - In case of dynamic variables where property names are retrieved from user inputs or API calls
36. In `Object.assign()`, the properties inside the target object will be **overwritten** by the source object’s properties if the **same key name** is found in **both** the objects.
37. In `spread Operator`, it merges two objects to form a new one, **does** overwrite existing properties of the object if **common keys** are found in **both** source and target objects.
38. `spread operator` will not create any reference between the original array and the duplicated one (**primitive case**) or **shallow copy**.
39. We call **myName** a `deep object` `shallow copy` because it contains a non-primitive items.
    - e.g `let newName = [["Aliza", "Peter", "Johnss"]];`
    - which means changing in newName, will also be reflected in other variable (which contains _newName_)
40. We call **myName** a `shallow object` `deep copy` because it contains a primitive items
    - e.g `let newName = ["Aliza", "Peter", "Johnss"];`
    - which means changing in newName, will not be reflected in other variable (which contains _newName_).
41. Below are 2 ways for **Deep Copy**
    - `const bio = JSON.parse(JSON.stringify(myName));`
    - `myName.fullName = { firstName: "Tobi", lastName: "Sofela" }` or
    - `bio.fullName = { firstName: "Tobi", lastName: "Sofela" }`
42. Mutator Methods (Modify the array itself):
    - `push()` : Adds one or more elements to the end of an array and returns the new length.
    - `pop()` : Removes the last element from an array and returns that element.
    - `shift()` : Removes the first element from an array and returns that element.
    - `unshift()`: Adds one or more elements to the beginning of an array and returns the new length.
    - `splice()` : Adds/removes elements from an array at a specific index.
    - `sort()` : Sorts the elements of an array in place and returns the sorted array.
    - `reverse()`: Reverses the elements of an array in place.
    - `fill()` : Fills all the elements in an array with a static value from a start index to an end index.
    - `copyWithin()` : Copies part of an array to another location within the array, without modifying its length.
43. Accessor Methods (Do not modify the array, but return a new array or value):
    - `concat()` - Merges two or more arrays into one and returns the new array.
    - `slice()` - Returns a shallow copy of a portion of an array into a new array.
    - `join()` - Joins all elements of an array into a string.
    - `indexOf()` - Returns the first index at which a given element can be found, or -1 if it is not present.
    - `lastIndexOf()` - Returns the last index of a specified element, or -1 if not found.
    - `includes()` - Determines whether an array contains a certain value and returns true or false.
    - `toString()` - Returns a string representing the elements of the array.
    - `toLocaleString()` - Returns a localized string representing the elements of the array.
    - `entries()` - Returns an array iterator object that contains key/value pairs for each index in the array.
    - `every()` - Tests whether all elements in the array pass a provided test function.
    - `some()` - Tests whether at least one element in the array passes the test function.
    - `find()` - Returns the first element in the array that satisfies the provided testing function.
    - `findIndex()` - Returns the index of the first element that satisfies the testing function.
    - `keys()` - Returns an array iterator object that contains the keys for each index in the array.
    - `values()` - Returns an array iterator object that contains the values for each index in the array.
    - `forEach()` - Executes a provided function once for each array element.
    - `map()` - Creates a new array populated with the results of calling a provided function on every element in the array.
    - `filter()` - Creates a new array with all elements that pass the test implemented by the provided function.
    - `reduce()` - Executes a reducer function on each element of the array and returns a single output value.
    - `reduceRight()` - Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
44. Iteration Methods:
    - `forEach()` - Executes a provided function once for each array element.
    - `map()` - Creates a new array populated with the results of calling a provided function on every element.
    - `filter()` - Creates a new array with all elements that pass the test implemented by the provided function.
    - `reduce()` - Reduces the array to a single value using a reducer function.
    - `reduceRight()` - Similar to reduce(), but starts from the last element and moves towards the first.
    - `find()` - Returns the value of the first element that satisfies a test function.
    - `findIndex()` - Returns the index of the first element that satisfies a test function.
    - `some()` - Checks if at least one element in the array passes a test.
    - `every()` - Checks if all elements in the array pass a test.
45. Array Methods ES2023
    - `toSpliced()` : The difference between the new toSpliced() method and the old splice() method is,
      - the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
46. `with()` method as a safe way to update elements in an array without altering the original array.
47. `of()` static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

<br>

# Chapter05 : Higher Order Functions

<br>

1. Functions that operate on other functions, either by taking them as arguments or by returning them, are called **higher-order functions**.

2. **Higher-order functions** allow us to abstract over actions, not just values. They come in several forms. For example,
   - we can have functions that create new functions.
   - we can have functions that change other functions
   - We can even write functions that provide new types of control flow.
   - There is a built-in array method, forEach, that provides something like a `for/of loop` as a higher-order function
3. `filter function` rather than deleting elements from the
   existing array, builds up a new array with only the elements that pass the test. This function is `pure`. It does not modify the array it is given.
4. `reduce` (sometimes also called fold).
5. JavaScript’s `charCodeAt` method gives you a **code unit**, not a full character code.
6. The `codePointAt` method, added later, does give a **full Unicode character**.
7. If you have a character (which will be a string of one or two code units), you can use codePointAt(0) to get its code. e.g "🌹🐉" or "🐴👟".

<br>

# Chapter06 : The Secret Life Of Objects

<br>

1. Properties that are part of the interface are called **public**.
2. It is also common to put an `underscore (\_) character` at the start of property names to indicate that those properties are **private**.
3. Separating interface from implementation is a great idea. It is usually called `encapsulation`.
4. Methods are nothing more than properties that hold function values.

```js
   let rabbit = {};
   rabbit.speak = function(line) {
   console.log(The rabbit says '${line}');
   };`
   rabbit.speak("I'm alive.");
   // → The rabbit says 'I'm alive.'
```

5. When a function is called as a `method` looked up as a property and immediately called, as in `object.method()`. the binding called `this` in its body automatically points at the object that it was called on.

6. You can think of `this` as an extra parameter that is passed in a different way. If you want to pass it explicitly, you can use a function’s `call method`, which takes the `this` value as its `first argument` and treats further arguments as normal parameters.

<br>

# Chapter07 : The DOM (Document Object Model)

<br>

1. The `preventDefault()` method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
   - Form Submission: Preventing the default form submission behavior allows developers to handle form data using asynchronous techniques (e.g., AJAX) or to perform client-side validation before submitting the form.
   - The `preventDefault()` method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when:
     - Clicking on a **Submit** button, prevent it from submitting a form.
     - Clicking on a **link**, prevent the link from following the URL.
2. Difference between `removeChild()` and `remove()` is:
   - `removeChild()`: holds the child value when removed, so we can use this child later.
   - `remove()`: completely remove the child from the list, we cannot use it later --> give: undefined.
