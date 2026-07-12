// Arrow functions................


const user={
    username:"Ahmad",
    price:900,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)
       // console.log(this)//gives the current context
    }
}

//user.welcomeMessage()
//user.username="Raza"
//user.welcomeMessage()
//console.log(this)// give a empty object
// but when we run it into browser it gives us a window and its methods ..dom

// arrow............
/*
function This(){
    let username="Ahmad"
    console.log(this.username);
    
    //console.log(this)// give whole object and properties 
}
This()
*/

// declaration..................
/*
const chai=function(){
     let username="Ahmad"
    console.log(this.username);
}
chai()*/

const chai=()=>{
    let username="ahmad"
    console.log(this.username)
}
//chai()
/*
const addtwo=(num1,num2)=>{
    return num1+num2

}
console.log(addtwo(5,8)) */

 //another method to declare arrow function.implecit return

 //const addtwo=(num1,num2)=> num1+num2
 //const addtwo=(num1,num2)=>( num1+num2)

 // object return...............
const addtwo=(num1,num2)=> ({username:"Ahmad"})

console.log(addtwo(5,8))