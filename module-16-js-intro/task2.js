/*

Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

*/
let math = 9;
let bio = 8;
let chem = 7;
let phy = 6;
let bangla = 10;

let totalMarks = math + bio + chem + phy + bangla;

let averageMarks = totalMarks / 5;

console.log(averageMarks); // 8
console.log(averageMarks.toFixed(2)); //8.00 - decimal place but in string not in number

let resultInTwoDecimal = averageMarks.toFixed(2); // can be stored in variable rather than declaring in console
console.log(resultInTwoDecimal); // 8.00 - decimal place but in string not in number
