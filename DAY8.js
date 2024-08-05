// DAY8: ES6+ FEATURES

// ACTIVITY 1: TEMPLATE LITERALS
// TASK 1: USE TEMPLATE LITERALS TO CREATE A STRING THAT INCLUDES
// VARIABLES FOR A PERSON'S NAME AND AGE AND LOG THE STRING TO THE CONSOLE
const name1 = "PUSHKAR D";
const age = 22;
console.log(`Hello, my name is ${name1} and I am ${age} years old.`);
console.log("<----------------------------------------------------------->");

// TASK 2: CREATE A MULTI-LINE STRING USING TEMPLATE LITERALS
// AND LOG IT TO THE CONSOLE
const multilineString = `
This is a multi-line string
using template literals.
It allows for easy formatting and embedding of variables.`;
console.log(multilineString);
console.log("<----------------------------------------------------------->");

// ACTIVITY 2: DESTRUCTURING
// TASK 3: USE ARRAY DESTRUCTURING TO EXTRACT THE FIRST AND SECOND ELEMENTS
// FROM AN ARRAY OF NUMBERS AND LOG THEM TO THE CONSOLE
const numbers = [1, 2, 3, 4, 5];
const [firstElement, secondElement] = numbers;
console.log(`First element: ${firstElement}, Second element: ${secondElement}`);
console.log("<----------------------------------------------------------->");

// TASK 4: USE OBJECT DESTRUCTURING TO EXTRACT THE TITLE AND AUTHOR
// FROM A BOOK OBJECT AND LOG THEM TO THE CONSOLE.
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
};
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);
console.log("<----------------------------------------------------------->");

// ACTIVITY 3: SPREAD AND REST OPERATORS
// TASK 5: USE SPREAD OPERATORS TO CREATE A NEW ARRAY THAT INCLUDES
// ALL ELEMENTS OF AN EXISTING ARRAY PLUS
// ADDITIONAL ELEMENTS AND LOG THEM TO CONSOLE. "..." IS SPREAD OPERATOR
const additionalElements = [6, 7, 8, 9, 10];
const newArray = [...numbers, ...additionalElements]; // COPYING OF DATA FROM 2 ARRAYS numbers AND additionalElements
console.log(newArray);
console.log("<----------------------------------------------------------->");

// TASK 6: USE REST OPERATOR IN A FUNCTION TO ACCEPT AN ARBITRARY NUMBER
// OF ARGUMENTS, SUM THEM, AND RETURN THE RESULT
// "..." IS ALSO REST OPERATOR
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log("<----------------------------------------------------------->");

// ACTIVITY 4: DEFAULT PARAMETERS
// TASK 7: WRITE A FUNCTION THAT TAKES TWO PARAMETERS AND RETURNS THEIR PRODUCT
// WITH SECOND PARAMETER HAVING DEFAULT VALUE OF 1.
// LOG THE RESULT OF CALLING THIS FUNCTION WITH AND WITHOUT SECOND PARAMETER
console.log("<----------------------------------------------------------->");

function multiply(num1, num2 = 1) {
  return num1 * num2;
}
console.log(multiply(10));
console.log("<----------------------------------------------------------->");

// ACTIVITY 5: ENHANCED OBJECT LITERALS
// TASK 8: USE ENHANCED OBJECT LITERALS TO CREATE AN OBJECT WITH METHODS
// AND PROPERTIES AND LOG OBJECT TO THE CONSOLE
const person = {
  name: "PUSHKAR",
  age: 22,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
person.greet(); // Output: Hello, my name is PUSHKAR and I am 22 years old.
console.log("<----------------------------------------------------------->");

// TASK 9: CREATE AN OBJECT WITH COMPUTED PROPERTY NAMES BASED ON VARIABLES
// AND LOG OBJECT TO THE CONSOLE
const variableName = "greeting";
const greetingObject = {
  [variableName]: "Hello, World!",
};
console.log(greetingObject);
console.log("<----------------------------------------------------------->");