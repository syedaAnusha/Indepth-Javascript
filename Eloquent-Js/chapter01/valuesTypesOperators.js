//* Special Cases In Javascript
console.log("NaN == NaN :", NaN == NaN);
console.log("NaN === NaN :", NaN === NaN);
console.log("null == undefined :", null == undefined);
console.log("null === undefined :", null === undefined);
console.log("Type of null is: ", typeof null);
console.log("Type of undefined is: ", typeof undefined);
console.log("Type of NaN is :", typeof NaN);

//* Uniary Operators
console.log("-(10-2) :", -(10 - 2));
console.log("!true :", !true);

//* Logical operators
console.log("true && false :", true && false);
console.log("true && true :", true && true);
console.log("true || false :", true || false);
console.log("1+1 == 2 && 10*10 >50 :", 1 + 1 == 2 && 10 * 10 > 50);

//* Ternary Operators
console.log("true ? 1 : 2 -->", true ? 1 : 2);
console.log("!true ? 1 : 2 -->", !true ? 1 : 2);
console.log("false ? 1 : 2 -->", false ? 1 : 2);

//* Automatic Type Conversion
console.log("8*null :", 8 * null);
console.log("`5` - 1:", "5" - 1);
console.log(`5 + 1 :`, 5 + "1");
console.log(`5 + 1 :`, 5 + +"1");
console.log(`Five * 2 :`, "Five" * 2);
console.log("false == 0 :", false == 0);

//* Ideal, When you want to test whether a value has a real value instead of null or undefined
console.log("null == 0 :", null == 0);
console.log("null == 1 :", null == 1);
console.log("undefined == 0 :", undefined == 0);
console.log("undefined == 1 :", undefined == 1);

//* Short-circuiting of logical operators

//* 1- || Operator

//* We can use this functionality as a way to fall back on a default value

//* '||' --> only evaluates Left-Hand Side, when it evaluates to "true"

console.log(`null || "user" :`, null || "user");
console.log(`true || "user" :`, true || "user");
console.log(`"Agnes" || "user" :`, "Agnes" || "user");
console.log(`[] || "user" :`, [] || "user");

//* 0, false and NaN are always evaluate to false

console.log(`0 || "user" :`, 0 || "user");
console.log(`false || "user" :`, false || "user");
console.log(`NaN || "user" :`, NaN || "user");
console.log(`null || "user" :`, null || "user");
console.log(`undefined || "user" :`, undefined || "user");
console.log(`"" || "user" :`, "" || "user");

//* 2- && Operator

//* '&&' --> only evaluates Left-Hand Side, when it evaluates to "false"

console.log(`0 && "user" : `, 0 && "user");
console.log(`false && "user" : `, false && "user");
console.log(`NaN && "user" : `, NaN && "user");
console.log(`null && "user" :`, null && "user");
console.log(`undefined && "user" :`, undefined && "user");
console.log(`"" && "user" :`, "" && "user");
console.log(`[] && "user" :`, [] && "user");

console.log(`user || null :`, "user" || null); // "user"
console.log(`null || user :`, null || "user"); // "user"
console.log(`user && null :`, "user" && null); // null
console.log(`null && user :`, null && "user"); // null

console.log(`user || undefined :`, "user" || undefined); // "user"
console.log(`undefined || user :`, undefined || "user"); // "user"
console.log(`user && undefined :`, "user" && undefined); // null
console.log(`undefined && user :`, undefined && "user"); // null
