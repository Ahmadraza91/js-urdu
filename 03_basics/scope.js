// let const var

// let a=10
// const b=20
// var c=30

let a=300

if(true){

let a=10
const b=20
var c=30
//console.log("inner a= ",a);


}


//console.log(a);
//console.log(b);
//console.log(c);

// =========================== part 2 ===========================

// closure interview question dom ............

/*
function one(){
    const userName="Ahmad"

    function two(){
        const youtube="nomercy"
        console.log(userName);// it is access by the function two parent child like child acces the values of parent.........
        // scope end here of any variable any thing in this function........
        // andr ka function bahir ka functuon ko access kr skta hain...

    }
    //console.log(youtube);// not access parent not access 

    two()
    
}
one()
*/

// if else scope...........

if (true){
   let name="ahmad"
    if(name==="ahmad"){
     const website=" youtube"
     //console.log(name+website);
     
    }
    //console.log(website);// error out of scope
    //console.log(name);
    
    
}
//console.log(name);error out of scope

// ++++++++++++++++++++++++ Intersting ++++++++++++++++++++++++++++++
// pure function...

console.log(addone(8))// noerror pure function 
function addone(num){
    return num+1
}
//addone(6)

// expression type function.........................

//console.log(addtwo(7))  // through an error becaue it store in variable // function hoisting
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5))