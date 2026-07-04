let score="33abc"
// => 33abc NaN , => null 0 ,=> undefined NaN , => true/false 1/0 

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// bolean conversion

let isLoggedIn=1
 let check=Boolean(isLoggedIn)
 console.log(check)

 // 1=> true; 0=> false
 // ""=>false; 
 // //"Ahmad"=>true

let sumNum=33
 let stringCon=String(sumNum)
 console.log(stringCon)
 console.log(typeof stringCon)