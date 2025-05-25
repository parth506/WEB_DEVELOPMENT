let a = "Harry";
console.log(a.length);
console.log(a[0])
console.log(a[1])

console.log(a[2])
console.log(a[3])
console.log(a[4])

let friend = "Parth"
console.log("His anme is " + a + " and his firent nme is " + friend)

//template literals
//using backtic
console.log(`His name is ${a} and his friends name is ${friend}`)

//escape sequence characters 
let c = "Roh\"an"
console.log(c)

//Toggle case
let b = "Shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)

a = " Parth"
//string slices 
console.log(b.slice(1, 4))
console.log(b.slice(1))
console.log(b.replace("Sh", "hS"))
console.log(b.concat(a))
console.log(b.concat(a, "Agrawal", "PAri", "New"
))

let f = "  PArth   "
console.log(f.trim()) //removes whitespaces 

