// // VARIABLES
// // let, var, const

// // console.log(name); // Print to the console

// const name = "pizza";
// const topping = "pineapple";

// //* adding two strings;
// //concatenation
// console.log(name, "pineapple"); // How you make a concatenation

// //Template literals // use back tick located under esc bar
// console.log(`${name} ${topping}`);

// // integer justa number

// // Booleans anything that has data in it
// // if it has value in it, it is true
// //if it has false, undefined, null or 0 then it is false
// let num = undefined;

// console.log(Boolean(num));

// // let promt1 = prompt("What is your name");
// // let whereDidHeGo = prompt("Where did he go");
// // console.log(`${promt1} went to the ${whereDidHeGo}`);

// // alert(`${promt1} went to the ${whereDidHeGo}`);

// let prompt1 = prompt("what is your name?");
// let prompt2 = prompt("What is your age?");
// let prompt3 = prompt("what is your hobby?");
// alert(
//   `Hi My Name is ${prompt1} I am ${prompt2}, My favorite Hobby Is ${prompt3}`
// );

// CONDITIONALS////////////////////////////////////////////////
//**This IS WHERE CONDITIONAL STARTS */

//Truthy Values

// FALSY VALES
//UNDEFINED, NULL, NAN, 0

//CONDITIONAL OPERATORS
// ===; 1 === 1 is true
// ==; loose equals;
// loose equals; checks if value is the same regardless of data type

// <, >, // !=(Not Equals)
// More than or equal to
// 1 <=1

// =; is to assign operator
// ==; loose equals
// ===; strict equals (has to be the same exactly)

//Logical Operator//
// || && ?? //
//|| or
// && AND
// ? NULLISH

// ELSE; if the statement is false

// let v = 10;
// let u = 8;

// if (v === 9) {
//   console.log("Hola Mundo");
// } else {
//   console.log("goodbye world");
// }

// if (login===true) [
// // redirect page
// // ] else

//     alert("user doesn't exist")

/* else if; will run if condition 
before it are false and specifies a 
new condition*/

// let q = 0
// if (q === 1){
// console.log("helo world")
// // }

// let userName = prompt("Enter your username");

// if (userName === "collin123") {
//   alert("logged in!");
// } else if (userName === "lucy321") {
//   alert("logged in!");
// } else {
//   alert("no account found");
// }

// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);

// let arr = ["liv", "kamar", "derrick", "jimmy"];

// console.log(arr[randomNumber]);

// if (arr[randomNumber] === "liv") {
//   console.log("Hello world");
// } else if (arr[randomNumber] === "kamar") {
//   console.log("whats poppin");
// } else {
//   console.log("tech your wrong");
// }

let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);
let chosenNumber = prompt("Let's play a game.. Guess a numer 1-10");
if (chosenNumber == randomNumber) {
  alert(`congrats`);
} else {
  alert("you are incorrect");
}
