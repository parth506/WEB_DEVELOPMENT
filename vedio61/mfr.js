let arr = [1, 3, 5, 7, 11]
let newArr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element ** 2)

}
console.log(newArr)

//map() ka use aise hota hai 


let newarr = arr.map((e) => {
    return e ** 2;
})

console.log(newarr)
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    else {
        return false
    }
}
console.log(newArr.filter(greaterThanSeven))

//reduce method

let arr2 = [1, 2, 3, 4, 5, 6];
//factorial ke jaisa hai 
const red = (a, b) => {
    return a * b;
}
console.log(arr2.reduce(red));

//array banana
Array.from("PArth Agrawal")
