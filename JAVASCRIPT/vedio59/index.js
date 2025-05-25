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
let z = Math.random();
var a = prompt("Enter 1st no.")
var b = prompt("Enter 2nd no.")
var c = prompt("Enter Operation");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if (z > 0.1) {
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

} else {
    c = obj[c];
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}