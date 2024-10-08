//* Exercise 1: Looping a Triangle
// let n = 7;

// for (let i = 0; i <= n; i++) {
//   let str = "#";
//   console.log(str.repeat(i));
// }

//* Exercise 2: FIZZ BUZZ
// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0) {
//     console.log("FIZZ ", i);
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FIZZ-BUZZ ", i);
//     }
//   } else if (i % 5 === 0) {
//     console.log("BUZZ ", i);
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FIZZ-BUZZ ", i);
//     }
//   }
// }

//* Exercise 3: Chess Board
// function chessBoard(rows, cols) {
//   let array = [];
//   for (let i = 0; i < rows; i++) {
//     array.push([i]);
//     if (i % 2 === 0) {
//       for (let j = 0; j < cols; j++) {
//         if (j % 2 === 0) {
//           array[i][j] = "#";
//         } else {
//           array[i][j] = "";
//         }
//       }
//     }

//     if (i % 2 !== 0) {
//       for (let j = 0; j < cols; j++) {
//         if (j % 2 !== 0) {
//           array[i][j] = "#";
//         } else {
//           array[i][j] = "";
//         }
//       }
//     }
//   }
//   console.table(array);
// }
// chessBoard(5, 5);

//* To define 2D-Array

//* Method: 01
// let array = [
//   ["#", "", "#", ""],
//   ["", "#", "", "#"],
//   ["#", "", "#", ""],
//   ["", "#", "", "#"],
// ];

//* Method: 02
// Here, "map" will create a copy of array, and thus changes will only reflect in respective [row][col] ✔️
// const matrix1 = new Array(8).fill("#").map(() => new Array(8).fill("#"));
// matrix1[0][0] = "@";
// console.log(matrix1);

// It does not create the copy of Array(4), results in changing matrix2[0][0] = "@",
// will changes all the matrix2[rows][0]. Not Recommended ❌

// const matrix2 = new Array(4).fill(new Array(6).fill("#"));
// matrix2[0][0] = "@";
// console.log(matrix2);

// const matrix3 = [...Array(3)].map(() => Array(5).fill(2));
// matrix3[0][0] = "@";
// console.log(matrix3);
