// date => type object.....

let mydate=new Date()

// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)

// month start from 0 in javascript...........

// let newdate=new Date(2026,6,7)
// console.log(newdate)
// console.log(newdate.toDateString())

// aslo we can define time and here we use to localestring....

// let newdate=new Date(2026,6,7,5,3)
// console.log(newdate)
// console.log(newdate.toLocaleString())

// in dd/mm/yy month start from 1

 //let newdate=new Date("2026-1-7")
// console.log(newdate)
// console.log(newdate.toDateString())

// ++++++++++++++++++++ Time++++++++++++++++++++

// let mytime=Date.now()
// console.log(mytime)
// console.log(newdate.getTime())
// console.log(Math.floor(Date.now()/1000))


let newdate=new Date()

console.log(newdate)
console.log(newdate.getDay())
console.log(newdate.getMonth()+1)
console.log(newdate.getFullYear())

// to locastring is object so 
// ctrl+space all properties are shown.....



newdate.toLocaleString('default',{
weekday:"long"

})