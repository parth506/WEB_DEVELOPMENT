/* Create a faulty calculator using javascript 
This fauly clculaorot dos follwoing :
1. it takes two numbers as input formn the user 
2. It peorms wong operations as follows :
+--->-
*---->+
- ---> /
/ -----> **

it performs wrong operations 10% of the times

*/

var a = prompt("Enter 1st no.")
var b = prompt("Enter 2nd no.")

const sum = (a, b) => {
    return a + b;
}
const diff = (a, b) => {
    return a - b;
}
const mul = (a, b) => {
    return a * b;
}
const div = (a, b) => {
    return a / b;
}
const exp = (a, b) => {
    return a ** b;
}
let z = Math.random() < 0.1;
if (z) {
    console.log(diff(a, b));
    console.log(sum(a, b));

    console.log(div(a, b));

    console.log(exp(a, b));

} else {
    console.log(sum(a, b));
    console.log(diff(a, b));

    console.log(mul(a, b));

    console.log(div(a, b));
}