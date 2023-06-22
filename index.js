// VARIABLES
// let, var, const

// console.log(name); // Print to the console

const name = "pizza";
const topping = "pineapple";

//* adding two strings;
//concatenation
console.log(name, "pineapple"); // How you make a concatenation

//Template literals // use back tick located under esc bar
console.log(`${name} ${topping}`);

// integer justa number

// Booleans anything that has data in it
// if it has value in it, it is true
//if it has false, undefined, null or 0 then it is false
let num = undefined;

console.log(Boolean(num));

// let promt1 = prompt("What is your name");
// let whereDidHeGo = prompt("Where did he go");
// console.log(`${promt1} went to the ${whereDidHeGo}`);

// alert(`${promt1} went to the ${whereDidHeGo}`);

let prompt1 = prompt("what is your name?");
let prompt2 = prompt("What is your age?");
let prompt3 = prompt("what is your hobby?");
alert(
  `Hi My Name is ${prompt1} I am ${prompt2}, My favorite Hobby Is ${prompt3}`
);
