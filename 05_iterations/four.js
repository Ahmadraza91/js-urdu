//for in for object

const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by app"
}

for(const key in myobj){
   // console.log(`${key} is shortcut for ${myobj[key]}`)
}

// for array

const myarr=["js","c++","java","phty"]

for(const key in myarr){
   // console.log(key)// gives key start from 0 bcz it is an array object..
    console.log(myarr[key]);// as we use it in for loops for array printing... 
}
// not iteraion of for in on map....

