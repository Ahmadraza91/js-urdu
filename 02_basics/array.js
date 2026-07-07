// Arrays...........
// reciseable => mean can add element or chng size after declare
// have numbers string boolean no requirement ....


const myarr=[0,1,2,3,4]
// const heros=["ang","superman","batman"]

//const myarr2=new Array(2,5,7,8)
//console.log(myarr[0])

// Arrays method..

//1. push
// myarr.push(6)
// myarr.push(5)
// console.log(myarr)

 //2.pop
//  myarr.pop()
//  console.log(myarr)

 //3.unshift=>add element at start of array....
 // bad for large number of data
//  myarr.unshift(9)
//  console.log(myarr)

  //4.shift remove first element
 //myarr.shift()

 // questing is element present in array or not.......

//  console.log(myarr.includes(9))
//  console.log(myarr.indexOf(6))


// join bind the array with other array and also convert it into string
//  const newarr=myarr.join()

//  console.log(myarr)//[0,1,2,3,4]
//  console.log(newarr)//0,1,2,3,4

//slice slice(0,3) gives element from 0 to 2 index but does not chng original array
// splice splice (0,3) gives ele from 0 to 3 and also delete these element from originnal array 
/*
console.log("A" ,myarr)

const myn1=myarr.slice(1,3)
console.log(myn1)
console.log("B",myarr)

const myn2=myarr.splice(0,3)
console.log(myn2)
console.log("C",myarr)
*/

//++++++++++++++++++ Array part 2 +++++++++++++++++++++++++++=====

const heros=["ang","superman","batman"]
const heros2=["spiderman","thor","flash"]

// push array it combines array and second whole array become the index of first array as
/*
heros.push(heros2)
console.log(heros)
console.log(heros[3][1])
*/

// concat merge two arrays and declare new array to print value....
/*
const allheros=heros.concat(heros2)
console.log(allheros)
*/

// spread best method write ... in start of array to concate multiple array you concat by this method
/*
const allheros=[...heros,...heros2]
console.log(allheros);
*/

// multiples array arrays in an array
// use .flat to merge all in one array....

/*
const arr=[1,2,3,[4,5,6],7,[6,7,[1,2]]]
const usearr=arr.flat(Infinity)
console.log(usearr);
*/

// console.log(Array.isArray("Ahmad"))
// console.log(Array.from("Ahmad"))// convrt it into array
// console.log(Array.from({name:"Ahmad"}))

// convert element into ARRAY use array.of
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))


