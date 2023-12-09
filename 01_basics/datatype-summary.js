// primitive (call by value)
// 7 types:string,number,boolean,bigint,null,undefined,symbol

// const score =100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id =Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);
// const bigNumber = 1245997545346346949n


// non-primitive(refernce type)
//Array,objects,Function
//js is dynamically type language

// const heros = ["shaktiman","naagraj","doga"];
// let myObj={
//         name:"hitesh",
//         age:22,
  
// }
// const myFunction = function(){
//     console.log("Holl World");
// }
// console.log(typeof bigNumber);
// console.log(typeof score);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof isLoggedIn);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive),Heap(Non-Primitive) 

// stack
let myYoutubename = "fazalbarhdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "fazal@somthing.com"
console.log(userOne.email);
console.log(userTwo.email);

