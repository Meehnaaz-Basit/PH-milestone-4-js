/*

4. Checking if it's an Array
Instructions:
Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not.

*/

//
const variable1 = [1, 2, 3];
const variable2 = "This is a string";
const variable3 = {
  name: "sara",
  gender: "female",
};
const variable4 = 42;
const variable5 = ["apple", "orange", "banana"];

console.log("variable 1 is an array?", Array.isArray(variable1));
console.log("variable 2 is an array?", Array.isArray(variable2));
console.log("variable 3 is an array?", Array.isArray(variable3));
console.log("variable 4 is an array?", Array.isArray(variable4));
console.log("variable 5 is an array?", Array.isArray(variable5));
