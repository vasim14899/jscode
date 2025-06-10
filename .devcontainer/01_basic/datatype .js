"use strict"; //treat all js code as newer version

// alert (3+3)  will only in broweser 


// Primative data type
// String, number, boolean, undefined, null, BigInt, Symbol are primative data type




const score = 100 ;
const scorevalue = 100.3
const isloggedin = false
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bignumber= 16484154561156165151515615615616516515459561561561n


console.log(typeof(score));
console.log(typeof(userEmail));
console.log(typeof(bignumber));

// reference or non primative 
// Array,  Objects, functions

const heros = ["Shakita","fudhf","test2"]

let myObj = {
    name: "vasim",
    age : 25,

}

console.log(myObj.name);







const myfunction = function(myfirstname) {
    const greeting = "Hello " + myfirstname;
    console.log(greeting);
    return greeting;
};

console.log(myfunction("vasim"));  // Now this will log twice: once from inside the function, and once with the return value