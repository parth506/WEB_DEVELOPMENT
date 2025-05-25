alert("Helllo World");

// var a=prompt("Enrter your name");
// alert("Hello " + a);
// var b=prompt("Enter your age");
// if (b < 18) {
//     alert("You are under 18");
// }
// else {
//     alert("You are above 18");
// }
var c=prompt("Enter your email","example@gmail.com");
var d=prompt("Enter your password");

var a=confirm("Do you want to login?");
if(a){
    if(d=="1234"){
        alert("Login successful");
    }
    else{
        alert("Login failed");
    }
} 

document.title="Hey This is parth"
document.body.style.backgroundColor="red"