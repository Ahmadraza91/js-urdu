// functions.......................
function sayName(){
    console.log("Ahmad");
    
}
//sayName()

// add two numbers
// when we decalre variables in function definition these sre called parameters
// when thess variables pass when functions call theses are caled arguments..
// no return
//function sum(num1,num2){
  //  console.log(num1+num2);
//}

function sum(num1,num2){
    return num1+num2;
    
}
const result=sum(3,4)
//console.log(result)
//sum(3,"4")//34
//sum(3,"a")//3a
/*
function loginUser(username="Ahmad RAza"){// default value ahmad raza
    //if(username===undefined){
    if(!username){
        console.log("please enater the userName")
        return
    }
    return `${username} just logged in`
}


console.log(loginUser("ahmad"))// if you write here code overwrite the value...
*/

// +++++++++++++++++++ part2 ++++++++++++++++++++++++++++++++++

// in shooping cart example where you do not who much items are coming and there prices.......
// use rest operator "..." before parameter name=> return an array

function calCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calCartPrice(500,900,900,600))// returns an array....

// object pass in function object handleing....

/*
const user={
    username:"Ahmad",
    price:900
}

function handleObject(anyObject){// take value from object using anyobject...
    console.log(`username is ${anyObject.username} and Price is ${anyObject.price}`)
}


//handleObject(user)//pass here the object .................
// we cn also pass object here as 
handleObject({
    username:"Ahmad",
    price:700
})

*/

// passsing arrays............

const myArray=[500,800,9000]

// function in which array pass....

function arrayhandling(getArray){
    return getArray[1]
}
//console.log(arrayhandling(myArray))
console.log(arrayhandling([400,900,800]))