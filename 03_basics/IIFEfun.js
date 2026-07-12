//iife imediately invoked function expression..

// in database connection
// global scope polution problem ko remove krna ka lia
// imediately invoked

//
//  add parenthesis()and in between write the function after this add one more paranthesis to execute this function

(function chai(){
// name IFFE..........
    console.log(`DB connected`)
})();// add semicolon also to remove errooe endind

(()=>{
    // with no name
    console.log("DB connected two")
})();

// add value parameters...

((name)=>{
    // with parameters............
    console.log(`my name is ${name}`)
})("Ahmad");// work same as function as chai("ahmad")but it is iife so