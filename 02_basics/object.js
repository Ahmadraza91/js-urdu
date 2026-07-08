// singleton constructor sa bnta object.create

// symbol=> interview qs aik symbol lo aur isa object ki keys ma add kr ka dikhao..
const mySym=Symbol("key1")
// use square bracket in object to declare it....

// object literals....
 const jsUser={
    name:"ahmad",
    "full_name":"Ahmad Raza",
    [mySym]:"mykey1",// use in object as a symbol
    age:21,
    location:"wazirabad",
    gmail:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"] 
 }
 //object access
 
// console.log(jsUser.gmail)
// console.log(jsUser["gmail"])
// console.log(jsUser["full_name"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])

// chnage in object value chnage ...
//jsUser.gmail="bdc@gmail.com"
//if you want to not chnge object or it value freeze it..
//Object.freeze(jsUser)
//jsUser.gmail="def@gmail.com"
//console.log(jsUser)

// functions.........
jsUser.greetings=function(){
    console.log("heloo js user")

}
// refrence object name in greeting function as
jsUser.greeting=function(){
    console.log(`my name is ${this.name}`);// aslo use this because it shows what things are in this object
    
}
//console.log(jsUser.greeting())
//console.log(jsUser.greetings);// no value is shown
//console.log(jsUser.greetings())

//+++++++++++++++++++++++++++ part2 +==========================

//const tinder=new Object()=>singleton object
// const tinder={}=>non singleton object

const tinder={}
tinder.name="ahmad"
tinder.id=123
tinder.loogedIn=false

//console.log(tinder)
// objects in objects
const regularUse={
    email:"ahmad@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Ahmad",
            lastName:"Raza"
        }
    }
}
//access objects in object
//console.log(regularUse.fullname.userFullName.lastName)

// merge objects....
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}//retuens aslo their names and donot combine
//use object.assign it returns the combine of objects...
//const obj3=Object.assign({},obj1,obj2)//{} these are not mandatory but its better method..

// use spread method as
const obj3={...obj1,...obj2}
//console.log(obj3)

// when data comes from database it comes in array object as

const user=[
    {
        id:1,
        email:"efg@gmail.com"
    }
]
// acees of these object
console.log(user[0].email)

console.log(tinder);
// access keys or values singley
console.log(Object.keys(tinder));// data types become array..
console.log(Object.values(tinder));// data types become array..
console.log(Object.entries(tinder));// give each key value into single array 

// check whether the value present in object or not
// use hasownproperty

console.log(tinder.hasOwnProperty('loogedIn'))



