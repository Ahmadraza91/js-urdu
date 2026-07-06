//============ Numbers=================================


const score=400
//console.log(score)

const balance=new Number(300)
//console.log(balance)

//console.log(balance.toString().length)

// tofixed give zero at end of numbers like tofixed(2)=>100.00
// use in ecommerce websites.....

//console.log(balance.toFixed(2))

// to precision=> datatype become string and give precise value that user want when value increae it give in exponent....

const num=23.8966
//console.log(num.toPrecision(1))
//console.log(num.toPrecision(3))
 
//tolocalstring => give zeros to comas like 1,000,000 us standard
const num2=1000000
//console.log(num2.toLocaleString())

//others number methods number.minvalue max value safemaxinteger... 

//+++++++++++++++++++++++ maths +++++++++++++++++++++++++++++++++++++++++++++++++++++

//console.log(Math)

// negative to positive value math.abs
//console.log(Math.abs(-5))
//console.log(Math.round(4.6))

// want top  number like bara num is value sa use math.ceil
//console.log(Math.ceil(4.2))//5

// want low value use math.floor
//console.log(Math.floor(4.9))//4

//console.log(Math.pow(5,7))
//console.log(Math.sqrt(45).toPrecision(2))
//console.log(Math.min(3,6,8,1))
//console.log(Math.max(3,6,8,1))

// most uses of math is random as
//Math.random gives values between 0 AND 1
// whne we want randon num from 0-10,0-6 we mul it that num as

//console.log(Math.random())
//console.log(Math.floor(Math.random()*10)+1)

// want value between 10 and 20
const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))+min)


