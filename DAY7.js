// ACTIVITY 1: OBJECT CREATION AND ACCESS
// TASK 1: CREATE AN OBJECT REPRESENTING A BOOK WITH PROPERTIES LIKE
// TITLE, AUTHOR, YEAR, AND LOG THE OBJECT TO THE CONSOLE.
var book = {
  title: "AFTER THE FUNERAL",
  author: "AGATHA CHRISIE",
  year: 1953,
};
console.log(book);
console.log("<-------------------------------------------->");

//TASK 2: ACCESS AND LOG THE TITLE AND AUTHOR PROPERTIES OF THE BOOK OBJECT
console.log(`Title: ${book.title}`);
console.log("Author: " + book.author);
console.log("<-------------------------------------------->");

// ACTIVITY 2: OBJECT METHODS
//TASK 3: ADD A METHOD TO THE BOOK OBJECT THAT RETURNS A STRING WITH THE BOOK'S TITLE
//AND AUTHOR , LOG THE RESULT OF CALLING THIS METHOD.
const function1 = () => {
  return `${book.title} by ${book.author}`;
};
console.log(function1());
console.log("<-------------------------------------------->");

//TASK 4: ADD A METHOD TO THE BOOK OBJECT THAT TAKES A PARAMETER (YEAR) AND UPDATES
//THE THE BOOK'S YEAR PROPERTY, THEN LOG THE UPDATED OBJECT.

const function2 = (newYear) => {
  book.year = newYear;
  return book;
};
console.log(function2(1954));
console.log("<-------------------------------------------->");

// ACTIVITY 3: NESTED OBJECTS
// TASK 5: CREATE A NESTED OBJECT REPRESENTING LIBRARY WITH PROPERTIES LIKE NAME AND BOOKS
// (AN ARRAY OF BOOK OBJECTS), AND LOG THE LIBRARY OBJECT TO THE CONSOLE.

const library = {
  name: "Harvard University Library",
  books: [
    {
      title: "AFTER THE FUNERAL",
      author: "AGATHA CHRISTIE", // Corrected spelling
      year: 1953,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
  ],
};
console.log(library);

// TASK 6: ACCESS AND LOG THE NAME OF THE LIBRARY AND THE TITLES
// OF ALL BOOKS IN THE LIBRARY

const function3 = () => {
  return `Library Name: ${library.name}\nBooks: ${library.books
    .map((book) => book.title)
    .join(", ")}`;
};
console.log(function3());
console.log("<-------------------------------------------->");

// ACTIVITY 4: THIS KEYWORD
// TASK 7: ADD A METHOD TO THE BOOK OBJECT THAT USES THIS KEYWORD TO RETURN
// A STRING WITH THE BOOK'S TITLE AND YEAR AND LOG THE RESULT OF CALLING THIS METHOD

book.getBookInfo = function () {
  console.log(this.title + " was released in " + this.year + " ");
};
book.getBookInfo();
console.log("<-------------------------------------------->");

// ACTIVITY 5: OBJECT ITERATION
// TASK 8: USE for...in LOOP TO ITERATE OVER THE PROPERTIES OF THIS BOOK
// OBJECT AND LOG EACH PROPERTY AND IT'S VALUE.

for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}
console.log(
  "<-------------------------------------------->\nOR\n<-------------------------------------------->"
);

for (const key in book) {
  if (Object.hasOwnProperty.call(book, key)) {
    const element = book[key];
    console.log(element);
  }
}
console.log("<-------------------------------------------->");

// TASK 9: USE THE OBJECT.KEYS AND OBJECT.VALUES METHODS TO LOG ALL THE KEYS AND
// VALUES OF THE BOOK OBJECT

// Using Object.keys() to get all keys of the book object
const keys = Object.keys(book);
console.log("Keys:");
keys.forEach((key) => {
  console.log(key);
});

// Using Object.values() to get all values of the book object
const values = Object.values(book);
console.log("Values:");
values.forEach((value) => {
  console.log(value);
});

console.log("<-------------------------------------------->");

// If you want to log both keys and their corresponding values:
console.log("Keys and Values:");
keys.forEach((key) => {
  console.log(`${key}: ${book[key]}`);
});
