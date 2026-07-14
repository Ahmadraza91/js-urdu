const coding=["java","c++","python","ruby"]

const values=coding.forEach((item)=>{// it does not return any values..
//console.log(item);
    return item
})
//console.log(values);

// filter values from array and also return it...
// gives a condition on which we want to filter..
//mynumm.filter


const mynum=[1,2,3,4,5,6,7,8,9]

const value=mynum.filter((num)=> num>4)
//console.log(value)

// when use curly braces use return keyword..

const newnum=mynum.filter((num)=>{
    return num>4
})
//console.log(newnum)

// using foreachloop to filter the values

const newnumber=[]
mynum.forEach((item)=>{
    if(item>4){
        newnumber.push(item)
    }
    
    
})
//console.log(newnumber)

// filter again.....

const books=[
    {
        title:"book one",genre:"science",publish:1987,edition:2000
    },
    {
        title:"book two",genre:"history",publish:1988,edition:2007
    },
    {
        title:"book three",genre:"history",publish:2000,edition:2009
    },
    {
        title:"book four",genre:"fiction",publish:2002,edition:2010
    }
]

//const userbooks=books.filter((bk)=>bk.genre==="history")

const userbooks=books.filter((bk)=>{
    return bk.publish>=2000 && bk.genre==="history"
})
console.log(userbooks);

