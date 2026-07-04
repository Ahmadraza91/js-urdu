let score="33abc"
// => 33abc NaN , => null 0 ,=> undefined NaN , => true/false 1/0 

//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber=Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// bolean conversion

let isLoggedIn=1
 let check=Boolean(isLoggedIn)
 //console.log(check)

 // 1=> true; 0=> false
 // ""=>false; 
 // //"Ahmad"=>true

let sumNum=33
 let stringCon=String(sumNum)
 //console.log(stringCon)
 //console.log(typeof stringCon)

 // ************ Operation*****************
 let value=3
 let negvalue=-value
 //console.log(negvalue)
//  console.log(2-2)
//  console.log(2+2)
//  console.log(2*3)
//  console.log(2**3)
//  console.log(2/3)

let str1="hello"
let str2="Ahmad"
let str3=str1+str2
console.log(str3)

console.log(1+"2")
console.log("1"+2)
console.log("1"+2+2)
console.log(1+2+"2")

console.log(+true)
console.log(+"")

let num1 , num2 , num3
num1=num2=num3=2+2

let gamecounter=100
gamecounter++
console.log(gamecounter)
++gamecounter
console.log(gamecounter)