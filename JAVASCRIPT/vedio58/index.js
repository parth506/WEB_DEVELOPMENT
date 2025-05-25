//JavaScript Functions
function nice(name) {
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are too handsome");
    console.log("Hey " + name + " you are extraordinary");


}

nice("Parth")
nice("PAru")

function sum(a, b) {
    console.log(a + b);
    return a + b;
}

console.log("The sum of the numbers is", sum(3, 5))


function sum(a, b, c = 2) {
    console.log(a + b + c);
    return a + b + c;
}

console.log(sum(2, 3, 6));


//ARROW FUNCTION 
const funct = (x) => {
    console.log("Im arrow func", x)
}

funct(20)
funct(506)