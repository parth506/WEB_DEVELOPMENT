
// console.log("Tutorial for loops ");
// console.log("Tutorial for loops ");


// let a = 4;
// for (let i = 0; i < 10; ++i) {
//     console.log(a + i);
// }

//For- in loop
let obj = {
    name: "Parth",
    role: " Pogrammer ",
    company: "Goldman Sachs"
}


for (const key in obj) {
    const elemeny = obj[key];
    console.log(key, elemeny);
}