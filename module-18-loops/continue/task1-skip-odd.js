/* 
Write a loop to print even numbers from 1 to 40. 
Use continue to skip odd numbers.

*/
for (i = 0; i <= 40; i++) {
  if (i % 2 !== 0) {
    continue; // skip odd numbers
  }
  console.log(i);
}
