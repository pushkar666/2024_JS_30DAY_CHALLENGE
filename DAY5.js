// ACTIVITY 1: FUNCTION DECLARATION

// TASK 1: WRITE A FUNCTION TO CHECK IF A NUMBER IS EVEN OR ODD AND LOG THE RESULT TO THE CONSOLE.
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is an even number.");
  } else {
    console.log(number + " is an odd number.");
  }
}

// TASK 2: WRITE A FUNCTION TO CALCULATE SQUARE OF NUMBER AND RETURN THE RESULT.
function calculateSquare(number) {
  return number * number;
}

// ACTIVITY 2: FUNCTION EXPRESSION

// TASK 3: WRITE A FUNCTION EXPRESSION TO FIND THE MAXIMUM OF TWO NUMBERS
// AND LOG THE RESULT TO THE CONSOLE
function findMAX2num(number1, number2) {
  if (number1 > number2) {
    console.log(number1 + " is greater than " + number2);
  } else {
    console.log(number2 + " is greater than " + number1);
  }
}

// TASK 4: WRITE A FUNCTION EXPRESSION TO CONCATENATE TWO STRINGS
// AND RETURN THE RESULT
function concatenateStrings(string1, string2) {
  return string1 + string2;
}

// ACTIVITY 3: ARROW FUNCTIONS

// TASK 5: WRITE AN ARROW FUNCTION TO CALCULATE SUM OF TWO NUMBERS AND RETURN THE RESULT
const sum = (a, b) => {
  return a + b;
};

// TASK 6: WRITE AN ARROW FUNCTION TO CHECK IF A STRING CONTAINS A SPECIFIC CHARACTER
// AND RETURN A BOOLEAN VALUE
const containsCharacter = (string, character) => {
  return string.includes(character);
};

// ACTIVITY 4: FUNCTION PARAMETERS AND DEFAULT VALUES

// TASK 7: WRITE A FUNCTION THAT TAKES TWO PARAMETERS AND DEFAULT VALUES
// RETURNS THEIR PRODUCT. PROVIDE A DEFAULT VALUE FOR SECOND PARAMETER
function multiply(a, b = 1) {
  return a * b;
}

// TASK 8: WRITE A FUNCTION THAT TAKES A PERSON'S NAME AND AGE AND
// RETURNS A GREETING MESSAGE. PROVIDE A DEFAULT VALUE FOR AGE.
function greet(name, age = 0) {
  if (age >= 18) {
    return "Hello " + name + ", you are an adult.";
  } else {
    return "Hello " + name + ", you are a minor.";
  }
}

// ACTIVITY 5: HIGHER ORDER FUNCTIONS

// TASK 9: WRITE A HIGHER ORDER FUNCTION THAT TAKES A FUNCTION AND A NUMBER AND CALLS THE FUNCTION
// THAT MANY TIMES
function repeatFunction(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

// TASK 10: WRITE A HIGHER ORDER FUNCTION THAT TAKES TWO FUNCTIONS AND A VALUE, APPLIES THE FIRST FUNCTION TO
// THE VALUE AND THEN APPLIES THE SECOND FUNCTION TO THE RESULT
function applyFunctions(func1, func2, value) {
  return func2(func1(value));
}

checkEvenOdd(10);
console.log("Square of 10 is: " + calculateSquare(10));
findMAX2num(10, 20);
console.log("Concatenated strings: " + concatenateStrings("Hello, ", "World!"));
console.log("Sum of 5 and 3 is: " + sum(5, 3));
console.log(containsCharacter("hello", "e"));
console.log("Product of 5 and 2 is: " + multiply(5, 2));
console.log(greet("RAM", 20));
repeatFunction(() => console.log("Hello!"), 3);

// Defining func1 and func2
function increment(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

// Using applyFunctions with the defined functions
console.log("Applying functions: " + applyFunctions(increment, square, 5)); // Output: 36
