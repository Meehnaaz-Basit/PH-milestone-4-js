/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let oddNum = 81;
let sum = 0;
while (oddNum <= 131) {
  if (oddNum % 2 !== 0) {
    sum = sum + oddNum;
    // console.log(oddNum);
  }
  oddNum++;
}
console.log(sum);

/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
 */
let evenNum = 206;
let sum2 = 0;
while (evenNum <= 311) {
  if (evenNum % 2 === 0) {
    sum2 = sum2 + evenNum;
    // console.log(evenNum);
  }
  evenNum++;
}
console.log(sum2);
