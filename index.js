"use strict";
//* PROMISE & PROMISE CHAINING
// const CART = ["Tshirts", "Pants", "Kurties", "Dupatas", "Shoes"];

// createOrder(CART)
//   .then(function (ORDER_ID) {
//     console.log("Your Tracking ID:", ORDER_ID);
//     return ORDER_ID;
//   })
//   .then(function (ORDER_ID) {
//     proccedToPayment(ORDER_ID);
//     return ORDER_ID;
//   })
//   .then(function (paymentId) {
//     showOrderSummary(paymentId);
//     return paymentId;
//   })
//   .then(function (orderId) {
//     updateWallet(orderId);
//     return orderId;
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .then(function () {
//     console.log("Happy Shopping!!");
//   });

// function createOrder(cart) {
//   //* promise
//   return new Promise(function (resolve, reject) {
//     const ORDER_ID = "12AB63BKDL34";
//     const error = new Error("Unable to Proceed!");
//     if (!validateCard(cart)) {
//       reject(error);
//     } else {
//       setTimeout(function () {
//         resolve(ORDER_ID);
//       }, 3000);
//     }
//   });
// }

// function validateCard(cart) {
//   if (cart.length !== 0) return false;
// }

// function validateId(id) {
//   if (id.length !== 0) return true;
// }

// function proccedToPayment(id) {
//   return new Promise(function (resolve, reject) {
//     if (!validateId(id)) {
//       reject("Unable to Proceed!");
//     } else {
//       setTimeout(function () {
//         resolve(ORDER_ID);
//       }, 2000);
//     }
//   });
// }

// function getItemsSummary(cart) {
//   console.log("=====================================");
//   console.log("\t\tYour Order Summary!\t\t\t\t\t");
//   console.log("=====================================");
//   let summary = "";
//   for (let i = 0; i < cart.length; i++) {
//     summary =
//       summary +
//       i +
//       " " +
//       cart[i] +
//       `\n` +
//       "-------------------------------------" +
//       `\n`;
//   }
//   return summary;
// }

// function showOrderSummary(orderId) {
//   return new Promise(function (resolve, reject) {
//     // const error = new Error("Issue in summary order!");
//     if (validateId(orderId)) {
//       let summary = getItemsSummary(CART);
//       console.log(summary);
//       resolve(orderId);
//     } else {
//       reject("Unable to Proceed!");
//     }
//   });
// }

// function updateWallet(orderId) {
//   return new Promise(function (resolve, reject) {
//     // const error = new Error("Unable to checkout!");
//     if (validateId(orderId)) {
//       console.log("Wallet Updated!");
//       console.log("Your account balance is: $100");
//       resolve(orderId);
//     } else {
//       reject("Unable to Proceed!");
//     }
//   });
// }

//* TYPES OF PROMISES.
// const promise1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // resolve("Promise1 Successful");
//     reject("Promise1 Failed");
//   }, 5000);
// });

// const promise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("Promise2 Failed");
//     // resolve("Promise2 Successful");
//   }, 3000);
// });

// const promise3 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // resolve("Promise3 Successful");
//     reject("Promise3 Failed");
//   }, 3000);
// });

// let result = Promise.any([promise1, promise2, promise3])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
//   });
// // console.log(result);

//* KEYWORD "THIS"
// console.log(this);

// function x() {
//   console.log(this);
// }
// x();
// window.x();

// const objt = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
// };
// objt.x();

// const student = {
//   name: "Anusha",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// const student2 = {
//   name: "Asad",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// student.printName.call(student2);

// const obj2 = {
//   a: 20,
//   x: function () {
//     const y = () => {
//       const z = () => {
//         console.log(this);
//       };
//       z();
//     };
//     y();
//   },
// };

// obj2.x();

//* ASYNC & AWAIT
// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("P1 Successfully resolved!");
//   }, 5000);
// });

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("P2 Successfully resolved!");
//   }, 20000);
// });

// async function handlePromiseCall() {
//   console.log("Start..!!");

//   const val1 = await p1;
//   console.log("I am for P1");
//   console.log(val1);

//   const val2 = await p2;
//   console.log("I am for P2");
//   console.log(val2);
// }

// handlePromiseCall();

// function Fetch(api) {
//   return new Promise(function (resolve, reject) {
//     if (api.length > 0) {
//       resolve(api);
//     } else {
//       reject(new Error("Some Error Occured!"));
//     }
//   });
// }

// const API = "https://api.github.com/users/syedaAnusha";
// async function handleUser() {
//   const data = await fetch(API);
//   const jsonObject = await data.json();
//   console.log(jsonObject);
// }

// console.log(handleUser());
// handleUser().catch((err) => console.log(err));

//* CALL, APPLY & BIND

// const student = {
//   firstname: "Anusha",
//   lastname: "Syeda",
//   getName: function () {
//     console.log(this.firstname + " " + this.lastname);
//   },
// };

// student.getName();

// const student2 = {
//   firstname: "Syed",
//   lastname: "Asad Ali Shah",
// };

// student.getName.call(student2);

//* Here we can't do that like above!

//* CALL

// const student1 = {
//   firstname: "Anusha",
//   lastname: "Syeda",
// };

// let getName = function (hometown) {
//   console.log(
//     this.firstname + " " + this.lastname + " " + "from" + " " + hometown
//   );
// };

// const student2 = {
//   firstname: "Syed",
//   lastname: "Asad Ali Shah",
// };

// getName.call(student1, "Sukkur");
// getName.call(student2, "Karachi");

//* APPLY
// const student1 = {
//   firstname: "Anusha",
//   lastname: "Syeda",
// };

// let getName = function (hometown, province, country) {
//   console.log(
//     `${this.firstname} ${this.lastname} from ${hometown}, ${province}, ${country}.`
//   );
// };

// const student2 = {
//   firstname: "Asad",
//   lastname: "Shah",
// };

// getName.apply(student1, ["Sukkur", "Sindh", "Pakistan"]);
// getName.call(student2, "Karachi", "Sindh", "Pakistan");

//* BIND

// const student1 = {
//   firstname: "Anusha",
//   lastname: "Syeda",
// };

// let getName = function (hometown, province, country) {
//   console.log(
//     `${this.firstname} ${this.lastname} from ${hometown}, ${province}, ${country}.`
//   );
// };

// const student2 = {
//   firstname: "Asad",
//   lastname: "Shah",
// };

// getName.apply(student1, ["Sukkur", "Sindh", "Pakistan"]);
// getName.call(student2, "Karachi", "Sindh", "Pakistan");
// let printMyName = getName.bind(student1, "Karachi", "Sindh", "Pakistan");
// printMyName();

// let printMyName2 = getName.bind(student2, ["Karachi", "Sindh", "Pakistan"]);
// printMyName2();

//* using CALL inside CLASSES
//* WAY -1
// function Car(type, fuelType) {
//   this.type = type;
//   this.fuelType = fuelType;
// }

// function Brand(brand) {
//   this.brand = brand;
//   Car.apply(this, ["convertible", "petrol"]);
//   console.log("Car details :", this);
// }

// function getBrandName() {
//   return this.brand;
// }
// function setSpareParts(array, name) {
//   let brandName = getBrandName.bind(name);
//   this.SpareParts = array;
//   console.log(brandName() + " " + "have spare parts :", this);
// }
// function definePrice(price) {
//   this.price = price;
//   Car.apply(this, ["non-convertible", "diesel"]);
//   console.log("Car details: ", this);
// }

// let mercedes = new Brand("Mercedes");
// let spareParts = new setSpareParts("[Brakes, Holes]", mercedes);
// let highPrice = new definePrice(1000000);

//* WAY - 2

// function Car(type, fuelType) {
//   this.type = type;
//   this.fuelType = fuelType;
// }

// function Brand(brand) {
//   this.brand = brand;
//   //* 1- methods defined internally!
//   // this.name = function getBrandName() {
//   //   return this.brand;
//   // };
//   Car.apply(this, ["convertible", "petrol"]);
//   console.log("Car details :", this);
// }

//* Drawback- polluted global namespace e.g. multiple functions with same name!
//* Two methods
//** 1- Methods defined internally 2- Methods added to prototype*/

// Brand.prototype.getBrandName = function () {
//   return this.brand;
// };
// function setSpareParts(array) {
//   this.SpareParts = array;
//   console.log("spare parts :", this);
// }
// function definePrice(price) {
//   this.price = price;
//   Car.apply(this, ["non-convertible", "diesel"]);
//   console.log("Car details: ", this);
// }

// let mercedes = new Brand("Mercedes");
// console.log(mercedes.getBrandName());
// let spareParts = new setSpareParts("[Brakes, Holes]");
// let highPrice = new definePrice(1000000);

//* USING OBJECT LITERALS
// const MERCEDES_CAR = {
//   brand: "Mercedes",
//   type: "convertible",
//   fuelType: "Petrol",
//   price: 12000000,
//   // getBrandName: function () {
//   //   return ` Brand: ${this.brand}\n Type: ${this.type}\n FuelType: ${this.fuelType}\n Price: ${this.price}`;
//   // },
// };

// Object.prototype.getBrandName = function () {
//   return ` Brand: ${this.brand}\n Type: ${this.type}\n FuelType: ${this.fuelType}\n Price: ${this.price}`;
// };

// const BMW_CAR = {
//   brand: "BMW",
//   type: "convertible",
//   fuelType: "Diesel",
//   price: 25000000000,
// };

// console.log(BMW_CAR.getBrandName());

//* SINGLETON USING A FUNCTION

// const CAR = new (function () {
//   (this.brand = "Mercedes"),
//     (this.type = "convertible"),
//     (this.fuelType = "Petrol"),
//     (this.price = 12000000);
// })();
// Object.prototype.getBrandName = function () {
//   return ` Brand: ${this.brand}\n Type: ${this.type}\n FuelType: ${this.fuelType}\n Price: ${this.price}`;
// };
// console.log(CAR.getBrandName());

//* CURRYING..!!

//* 1- using CLOSURES
// function multiplier(n) {
//   return function multipleBy(m) {
//     return n * m;
//   };
// }

// let multipleTo = multiplier(2);
// console.log(multipleTo(3));

//* 2- using Bind
// function multiplier(x, y) {
//   return x * y;
// }

// let multipleTo = multiplier.bind(this);
// console.log(multipleTo(2, 5));

//* Why need of Apply()?

// let max = Math.max(12, 46, 99);
// console.log(max);

//* using apply

// let array = [4, 7, 9, 100];
// let appMax = Math.max.apply(null, array);
// console.log(appMax);

//* here now we can use spread operator instead of apply!
// let array = [4, 7, 9, 100];
// let appMax = Math.max(...array);

// let obj = {
//   name: "Anusha",
// };

// function getName(name) {
//   console.log("Hey I am..!", name);
// }

// let obj2 = {
//   name: "Alizay",
// };

// let result = getName.bind(this);
// result(obj.name);
// result(obj2.name);

// Object.prototype.getMyName = function () {
//   console.log("Hey I am..!", this.name);
// };

// obj2.getMyName();
// obj.getMyName();

//* Event Bubbling & Capturing!

// document.getElementById("grandParent").addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     alert("Hey I am grandParent!");
//   },
//   true
// );

// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     alert("Hey I am Parent!");
//   },
//   false
// );

// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     alert("Hey I am Child!");
//   },
//   true
// );

//* Event Delegation with Event Bubbling
// document.querySelector("#categories").addEventListener("click", (e) => {
//   alert(e.target.tagName);
//   if (e.target.tagName === "LI") window.location.href = "./" + e.target.id;
// });

//* Behaviour Pattern Using Event Delegation!
// document.querySelector("#form").addEventListener("keyup", (e) => {
//   if (e.target.dataset.uppercase !== undefined) {
//     e.target.value = e.target.value.toUpperCase();
//   }
// });

//***************** Understanding the concepts of DOM ********************** */

// console.log(this.document.documentElement);
// console.log(this.document.documentElement.children);
// console.log(this.document.body);
// console.log(this.document.body.childNodes);

// let div = document.createElement("div");

// div.setAttribute("class", "my-class");

// //** This is what sideEffect mean!

// let span = document.createElement("span");
// span.textContent = "Hey! I am newly created Span!";

// div.appendChild(span);

// document.body.appendChild(div);

//* Using Array methods on nodeList

// let nodeList = document.querySelectorAll("div");
// let nodeArray = Array.from(nodeList);
// let mappedArray1 = nodeArray.map((node) => node.textContent);
// let mappedArray2 = nodeArray.map((node) => node.innerText);

// console.log("textContent");
// console.log(mappedArray1);

// console.log("innerText");
// console.log(mappedArray2);

//* Moving through the tree
// let divNodes = document.querySelectorAll("h1");
// let arrayNode = Array.from(divNodes);
// let res = arrayNode.map((node) => node.parentNode);
// console.log(res);\

//* Below code will get the only firt "book" text from an html tree!

//* Finding the Elements
// function talksAbout(node, value) {
//   if (node.nodeType == Node.ELEMENT_NODE) {
//     for (let childNodes of node.childNodes) {
//       if (talksAbout(childNodes, value)) {
//         return true;
//       }
//     }
//     return false;
//   } else if (node.nodeType == Node.TEXT_NODE) {
//     return node.nodeValue.indexOf(value) > -1;
//   }
// }

// console.log(document.body.childNodes);
// console.log(talksAbout(document.body, "books"));

// const linkAttr = document.getElementsByName("spans");
// console.log(linkAttr);

//* Changing the document

// let p = document.createElement("p");
// p.textContent = "I am Fourth!";

// let getLastP = document.body.children[0].appendChild(p);
// console.log(document.body.children[0]);

//* to use the insertBefore or replaceChild, we must have to refer to parent!
// let paragraphs = document.body.children[0].children;
// console.log(document.body.children[0]);
// document.body.children[0].insertBefore(paragraphs[1], paragraphs[0]);
// console.log(paragraphs);

// let paragraphs = document.body.children[0].children;
// document.body.children[0].replaceChildren(
//   paragraphs[1],
//   paragraphs[0],
//   paragraphs[2]
// );
// console.log(paragraphs);

//* replace images to alt text by create createTextNode!
// let images = document.getElementsByTagName("img");
// console.log(typeof images);
// console.log(images);
// document.getElementById("replace").addEventListener("click", () => {
//   for (let i = images.length - 1; i >= 0; i--) {
//     let image = images[i];
//     if (image.alt) {
//       let textNode = document.createTextNode(image.alt);
//       image.parentNode.replaceChild(textNode, image);
//     }
//   }
// });

//* To convert to Array
// let arrayish = { 0: "one", 1: "Two", length: 2 };
// let array = Array.from(arrayish);
// console.log(array.map((arr) => arr.toUpperCase()));

//* Creating Node
// function elt(type, ...children) {
//   let element = document.createElement(type);
//   for (let child of children) {
//     if (typeof child !== "string") element.appendChild(child);
//     else element.appendChild(document.createTextNode(child));
//   }
//   return element;
// }

// document
//   .getElementById("quote")
//   .appendChild(
//     elt(
//       "footer",
//       "___",
//       elt("strong", "Karl Popper"),
//       ", preface to the second eddition of ",
//       elt("em", "The Open Societies and its Enemies!"),
//       ", 1950"
//     )
//   );

//* Attributes
// let p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   if (p[i].getAttribute("data-classified") == "") p[i].remove();
// }
// console.log(p);

//* Layout
// let para = document.getElementsByTagName("p")[0];
// console.log("ClientHeight", para.clientHeight);
// console.log("OffsetHeight", para.offsetHeight);
// console.log(
//   "Precise Position",
//   para.getBoundingClientRect() + para.scrollWidth + para.scrollHeight
// );
// console.log("scroll position - x", para.scrollWidth);
// console.log("scroll position - y", para.scrollHeight);

//* Styles
// function time(name, action) {
//   let start = Date.now(); // Current time in milliseconds
//   action();
//   console.log(name, "took", Date.now() - start, "ms");
// }

// time("naive", () => {
//   let target = document.getElementById("one");
//   while (target.offsetWidth < 2000) {
//     target.appendChild(document.createTextNode("X"));
//   }
// });

// time("clever", function () {
//   let target = document.getElementById("two");
//   target.appendChild(document.createTextNode("XXXXX"));
//   let total = Math.ceil(2000 / (target.offsetWidth / 5));
//   target.firstChild.nodeValue = "X".repeat(total);
// });

//* Query Selectors
// function count(selector) {
//   return document.querySelectorAll(selector).length;
// }

// console.log(count("p"));
// console.log(count(".animal"));
// console.log(count("p .animal"));
// console.log(count("p >.animal"));

//* Positioning and animating
// let cat = document.querySelector("img");
// let angle = Math.PI / 2;
// function animate(time, lastTime) {
//   if (lastTime != null) {
//     angle += (time - lastTime) * 0.001;
//   }
//   cat.style.top = Math.sin(angle) * 20 + "px";
//   cat.style.left = Math.cos(angle) * 200 + "px";
//   requestAnimationFrame((newTime) => animate(newTime, time));
// }
// requestAnimationFrame(animate);

//* Exercise
// function getElementsByTagName(node, tagname) {
//   let Element_Array = [];
//   if (node.nodeType == Node.ELEMENT_NODE) {
//     for (let i = 0; i < node.children.length; i++) {
//       let node_name = node.children[i].nodeName.toLowerCase();
//       if (node_name == tagname) {
//         if (node.children[i].hasChildNodes()) {
//           getElementsByTagName(node.children[i], tagname);
//           if (node.children[i].children.length <= 0)
//             Element_Array.push(node.children[i]);
//           else Element_Array.push(node.children[i].children);
//         } else {
//           // getElementsByTagName(node.children[i], tagname);
//           Element_Array.push(node.children[i]);
//         }
//       }
//     }
//     if (Element_Array.length <= 0) {
//       return "not find tagname!";
//     }
//     return Element_Array;
//   } else {
//     return "node is not an element!";
//   }
// }

// console.log(getElementsByTagName(document.body, "img"));

//TODO - Recursion

//* JS Quiz Questions
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");

// console.log(lydia);

// console.log(0 == null);
// console.log(null === undefined);
// console.log();

//* Reverse Engineering of useState Hook!
/* eslint-disable no-unused-vars */
// const ReactX = (() => {
//   let hooks = [];
//   let index = 0;
//   const useState = (initialValue) => {
//     let initialIndex = index;
//     index++;
//     if (hooks[initialIndex] === undefined) hooks[initialIndex] = initialValue;
//     const setState = (newValue) => {
//       hooks[initialIndex] = newValue;
//     };
//     return [hooks[initialIndex], setState];
//   };

//   const useEffect = (func, dependencyArray) => {
//     let hasChanged = true;
//     const oldDependencies = hooks[index];
//     if (oldDependencies) {
//       hasChanged = false;
//       dependencyArray.forEach((dependency, index) => {
//         const oldDependency = oldDependencies[index];
//         const areTheSame = Object.is(dependency, oldDependency);
//         if (!areTheSame) hasChanged = true;
//       });
//     }
//     if (hasChanged) {
//       func();
//     }
//     hooks[index] = dependencyArray;
//     index++;
//   };
//   const resetIndex = () => {
//     index = 0;
//   };
//   return { useState, resetIndex, useEffect };
// })();

// const { useState, resetIndex, useEffect } = ReactX;

// const Component = () => {
//   let [counter, setCounter] = useState(1);
//   let [name, setName] = useState("Thomas");
//   console.log(counter);
//   console.log(name);

//   if (counter >= 1) {
//     setCounter(2);
//   }

//   if (name !== "jack" && counter === 2) {
//     setName("Albert!");
//   }

//   useEffect(() => {
//     console.log("Effect");
//   }, [counter]);
// };
// Component();
// resetIndex();
// Component();
// resetIndex();
// Component();

//* Reverse Engineering of useEffect Hook!

//* Slow down CPU for some second
// function delay(second = 0.5) {
//   const start = new Date().getTime();
//   while (new Date().getTime() - start < second + 3000) {
//     // console.log(new Date().getTime());
//   }
// }
// delay();
