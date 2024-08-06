// Premitive
//  7 types:-String, Number, Boolean, null, Undfined, Symbol, BigInt
 
const score = 200
const scoreValue = 100.3

const isLoggedIn = false
const outsidetTemp = null
let userEmail = undefined 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber= 23243567656n



//  refernce (Non Primitive):- array, Object, Functions

const heros = ["Shaktiman", "naagraj", "dogo"];
let myObj= {
    name:"Aditya",
    age: 24,
}

const myFunction= function(){
    console.log("Hello World");
}

// https://262.ecma-international.org/5.1/#sec-111.4.3

