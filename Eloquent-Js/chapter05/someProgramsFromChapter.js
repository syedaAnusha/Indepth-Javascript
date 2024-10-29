let horseShoe = "🐴👟";
console.log(horseShoe.length);
console.log(horseShoe[0]);
console.log(horseShoe.charCodeAt(0));
console.log("Actual code for horse emoji:", horseShoe.codePointAt(0));

//* When you use it to loop over a string, it gives you real characters, not
//* code units.

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
console.log("Actual code for roseDragon emoji:", roseDragon.codePointAt(0));
