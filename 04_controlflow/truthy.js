// assume true value
// falsy values

//false,0,-0,bigint,0n,"",null,undefined,NaN

//truthy values
// "0",'false"," ",[],{},function(){}

const useremail=[]
if (useremail){
    console.log("got user email");
}else{
    console.log("no email");
}

if(useremail.length===0){
    console.log("array is empty");
    
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
    
}

// nullish coalescing operator(??):null undefined

let val1;
//val1=5??10//first value
//val1=null ?? 10//value a gaye hai is liya second value 
//val1=undefined ?? 6// output 6
val1=null ?? 10 ?? 4
console.log(val1)

// terniary operator ?

//condition ? true : false

const price=100
 price>=80 ? console.log("greater than 80"):console.log("less than 80")