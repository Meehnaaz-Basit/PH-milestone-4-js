/*

3. Checking Array Membership with ‘includes’
Instructions:
Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether 
the element is present in the array or not.

*/
const books = [
  "hamlet",
  "a tale of two cities",
  "othello",
  "the fault in our stars",
  "the notebook",
];
// test
// let checkTrue = books.includes("hamlet");
// let checkFalse = books.includes("romeo and juliet");
// console.log(checkTrue, checkFalse);

let isBookPresent = books.includes("romeo and juliet");
if (isBookPresent) {
  console.log("the book is present in the array");
} else {
  console.log("the book is not present in the array");
}
