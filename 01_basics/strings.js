let name="Ahmad"
let repocount=50

//console.log(name + repocount+ "value")

// in modern programming we use 
// //haptics `` in which we write strings and concatenate it

//console.log(`hello my name is ${name} and my repo count is ${repocount}`);

// another method to write string............

let gameName=new String("Ahmadgames")

//console.log(gameName[0])
//console.log(gameName.__proto__)

//console.log(gameName.length)
//console.log(gameName.toUpperCase())

//++ charAt=> give index in () and it gives you character at this index.....

//console.log(gameName.charAt(5))

// indexof() find position of char

//console.log(gameName.indexOf('g'))

// substring wants some part of string...........

const newgame=gameName.substring(0,4)
//console.log(newgame)

// slice also gives negative value and its start from reverse and gives value till second index like(-8,8) it start from -8 reverse and then give values till 8 index.....

//console.log(gameName.slice(-8,8))

const newstr="    Ahmad  "
//console.log(newstr)
//console.log(newstr.trim())

// replace..........

const url="https://ahmad.com/ahmad%20raza"

console.log(url.replace('%20',"-"))

// includes....
console.log(url.includes("ahmad"))

// split => based on keyword(seprator)...... convert into arrays..
let str2="Ahmad-raza-com"
console.log(str2.split('-'))