/*

Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.

*/
// isNan = is not a number

var a = isNaN("11");
console.log(a); // false ---- var a consists 11 which is a number so it returned false

var b = isNaN(2 - 10);
console.log(b); // false --- var b consists number and hence it returned false

var c = isNaN("sara");
console.log(c); // true --- var c consists alphabets and as it is not a number it returned true
