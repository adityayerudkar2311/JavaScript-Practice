// Stack(Primative), Heap(Non-Primitive)
// Stack
let myName = "Aditya"
let anotherName = myName
anotherName="Adi"

console.log(myName);
console.log(anotherName);

// Heap
let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Aditya@google.com"

console.log(userOne.email);
console.log(userTwo.email);

