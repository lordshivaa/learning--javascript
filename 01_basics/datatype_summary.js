// Primitive datatype --- call by value

// 7 types : String, Number, Boolean, Null, Undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

// const bigNumber = 1313131313131313131313226877n


// Reference (Non Primitive) --- call by reference

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myobj = {
    name : "shivam",
    age : 24,
}
console.log(myobj);


const myfunction = function(){
    console.log("Hello world")
}



// *******************************************************


// Stack(primitive type) , Heap(Non - primitive)

// stack means you get the copy value
// heap means you get the reference value means if you change anything it's change the original value



let myname = "shivam"

let anothername = myname

anothername = "tripathi"

console.log(myname);
console.log(anothername);


let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "shivam@google.com"

console.log(userOne.email);
console.log(userTwo.email);