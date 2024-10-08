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
