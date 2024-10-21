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
    - `reduce`
    - `map`
    - `filter`
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
