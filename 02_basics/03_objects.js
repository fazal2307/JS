// singleton
// object.create

// object literals


const mySym = Symbol("key1")
// if you want use Symbol data type
//  u have to initailize in Object with []
const JsUSer = {
    name:"fazal ",
    [mySym]:"key1",
    age:22,
    location:"Jaipur",
    email:"fazalsomething@gmail.com",
    isLoggedIn:false,
    lastLoginDaays:["Monday","Saturdaay"]
}
// console.log(JsUSer.email);
// console.log(JsUSer[mySym]);

//if you don't want  to change from ur object 
//u can use freeze 
JsUSer.email = "fazalgoogle@gmail.com"
// Object.freeze(JsUSer); 
JsUSer.email= "fazalsdfs@gmail.com"
console.log(typeof JsUSer);

//you can treat function as variable
JsUSer.greeting = function(){
    console.log("Hello JS User");
}
JsUSer.greetingTwo = function(){
    console.log(`Hello JS User,${this.name,this.age,this.email}`);
}
console.log(JsUSer.greeting());
console.log(JsUSer.greetingTwo());
