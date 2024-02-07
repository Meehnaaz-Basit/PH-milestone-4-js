/* 

Write a loop 1 to 200. 
Use break to exit the loop once you find 100.

*/

/*
for (i = 1; i <= 200; i++) {
  if (i <= 100) {
    console.log(i);
  }
}
*/

/*
for (i = 1; i <= 200; i++) {
  if (i === 100) {
    break;
  }
  console.log(i); 
}
*/ // this shows from 1-99

for (i = 1; i <= 200; i++) {
  console.log(i);
  // need to write console here[before the condition]
  // in order to get 1-100
  // ... as it will print first and then check the condition
  if (i === 100) {
    break;
  }
}
