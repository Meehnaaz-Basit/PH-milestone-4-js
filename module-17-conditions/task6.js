/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk

*/

let price = 800;

let age = 9;
let student = false;

if (age < 10) {
  price = 0;
  console.log(`The ticket is Free for children aged less than 10`);
} else if (student) {
  discount = (price * 50) / 100;
  price = price - discount;
  console.log(`The ticket price is ${price} for students`);
} else if (age >= 60) {
  discount = (price * 15) / 100;
  price = price - discount;
  console.log(`The ticket price is ${price} for Senior citizens`);
} else {
  price = price;
  console.log(`The ticket price is ${price}`);
}
