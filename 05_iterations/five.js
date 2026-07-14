const coding=["js","c++","java","rubi"]


coding.forEach(function(item){
   // console.log(item);
    
})

coding.forEach((item)=>{
   // console.log(item);
    
})

// pass in function...

function printme(item){
  //  console.log(item);
    
}

coding.forEach(printme)

coding.forEach((item,index,arr)=>{
  //  console.log(item,index,arr);
    
})

const mycoding=[
    {
        language:"js",
        fullname:"javascript"
    },
    {
        language:"cpp",
        fullname:"c++"
    },
    {
        language:"py",
        fullname:"python"
    }

]
mycoding.forEach((item)=>{
    console.log(item.language);
    
})