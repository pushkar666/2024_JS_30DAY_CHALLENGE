//ACTIVITY 1: ARRAY CREATION AND ACCESS
//TASK 1: CREATE AN ARRAY OF NUMBERS FROM 1 TO 5 AND LOG THE ARRAY TO THE CONSOLE.
let num = [1, 2, 3, 4, 5];
console.log(num);
console.log("<-------------------------------------------->");

//TASK 2: ACCESS THE FIRST AND THE LAST ELEMENTS OF THE ARRAY AND LOG THEM TO THE CONSOLE.
console.log(num[0]); // First element: 1
console.log(num[num.length - 1]); // Last element: 5
console.log("<-------------------------------------------->");

//ACTIVITY 2: ARRAY METHODS
//TASK 3: USE THE PUSH METHOD TO ADD A NEW NUMBER TO THE END OF THE ARRAY AND LOG THE UPDATED ARRAY.
num.push(6);
console.log(num); // [1, 2, 3, 4, 5, 6]
console.log("<-------------------------------------------->");

//TASK 4: USE THE POP METHOD TO REMOVE THE LAST ELEMENT FROM THE ARRAY AND LOG THE UPDATED ARRAY.
num.pop(num.length - 1);
console.log(num); // [1, 2, 3, 4, 5]
console.log("<-------------------------------------------->");

//TASK 5: USE THE SHIFT METHOD TO REMOVE THE FIRST ELEMENT FROM THE ARRAY AND LOG THE UPDATED ARRAY.
let number = num.shift();
console.log(num); // [ 2, 3, 4, 5 ]
console.log("<-------------------------------------------->");

//TASK 6: USE THE UNSHIFT METHOD TO ADD NEW NUMBER TO THE BEGINNING OF THE ARRAY AND LOG THE UPDATED ARRAY.
num.unshift(number);
console.log(num); // [ 1, 2, 3, 4, 5 ]
console.log("<-------------------------------------------->");

//ACTIVITY 3: ARRAY METHODS (INTERMEDIATE)
//TASK 7: USE THE MAP METHOD TO CREATE A NEW ARRAY WHERE EACH NUMBER IS DOUBLED
//AND LOG THE NEW ARRAY
let doubleNum = num.map((number) => 2 * number);
console.log(doubleNum); // [ 2, 4, 6, 8, 10 ]
console.log("<-------------------------------------------->");

//TASK 8: USE THE FILTER METHOD TO CREATE A NEW ARRAY AND LOG EACH ELEMENT TO THE CONSOLE.
let evenNumbers = num.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [ 2, 4 ]
console.log("<-------------------------------------------->");

//TASK 9: USE THE REDUCE METHOD TO CALCULATE THE SUM OF ALL NUMBERS IN THE ARRAY AND LOG THE RESULT.
let sum = num.reduce((accumulator, currentNum) => accumulator + currentNum, 0);
console.log(sum); //OUTPUT: 15
console.log("<-------------------------------------------->");

//ACTIVITY 4: ARRAY ITERATION
//TASK 10: USE FOR LOOP TO ITERATE OVER THE ARRAY AND LOG EACH
//EACH ELEMENT TO THE CONSOLE
for (let index = 0; index < num.length; index++) {
  var element = num[index];
  console.log(element);
}
console.log("<-------------------------------------------->");

//TASK 11: USE FOR EACH METHOD TO ITERATE
//OVER THE ARRAY AND LOG EACH ELEMENT TO THE CONSOLE

num.forEach((element) => {
  console.log(element);
});
console.log("<-------------------------------------------->");

//ACTIVITY 5: MULTIDIMENSIONAL ARRAY
// TASK 12: CREATE A TWO DIMENSIONAL ARRAY (MATRIX) AND LOG THE ENTIRE ARRAY TO THE CONSOLE
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);
console.log("<-------------------------------------------->");

//TAKS 13: ACCESS AND LOG SPECIFIC ELEMENT FORM THE TWO DIMENSIONAL ARRAY.
console.log(matrix[0][2]); // Output: 3
console.log("<-------------------------------------------->");
