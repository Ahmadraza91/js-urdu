// control flow 
// if statement............

// operators >,<,<=,>=,==(check),!=,===(also chk type)
/*
const temp=41
if(temp<50){
    console.log("less than 50");
    
}else{
console.log("greater than 50");
}*/

// scope related...
/*
const score=300
if(score>100){
    const power="fly"
    console.log(`user power: ${power}`);
    
}
    console.log(`user power: ${power})// through an error out of scope boundry or power not declare
    */

// shorthand notation

//implicit scope

//const balance=1000
//if(balance>500) console.log("test"),console.log("test2")//wite more console add ,

// nested if

/*

if (balance<500){
    console.log("less than 500");
    
}else if(balance<750){
    console.log("less than 750")
}else if (balance<900){
    console.log("less than 900")
}else{
    console.log("less than 1200");
    
}*/

// real life example 

const loggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(loggedIn && debitCard){
    console.log("allow to buy courses");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("allow to buy courses user logged in")
}