// stack=> permitive datatypes, copy of the variables
// //,heap=> non permitive (object,functions,array) ,reference 

let name="Ahmad"
let anotherName=name
anotherName="raza"
console.log(name)
console.log(anotherName)

let user1={
    email:"abc@gmail.com",
    uid:44
}

let user2=user1

user2.email="bcd@gmail.com"

console.log(user1.email)
console.log(user2.email)
