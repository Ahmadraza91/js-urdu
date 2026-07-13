// for loop............

// basic syntax..........
//for (let index = 0; index < array.length; index++) {
  //  const element = array[index];
//}
/*
for (let i=0;i<10;i++){
    const ele=i;
    if(ele==9){
      console.log("9 is best number")
    }
    console.log(ele);}*/
// basic example....
/*
for(let i=1;i<=10;i++)
{
  console.log(`outer loop value : ${i}`);
  for(let j=1;j<=10;j++){
    //console.log(`inner loop value: ${j} and inner loop ${i}`);
    console.log(i + "*" + j + "=" + i*j);// mul table
    
  }
}
*/

// on array

let myarr=["flash","butcher","hughie"]

for (let index = 0; index < myarr.length; index++) {
  // console.log(myarr.length)
  const element = myarr[index];
  //console.log(element); 
}

// break and continue.......

for (let index = 1; index <=20; index++) {
if(index==5){
  //{console.log("detected 5");
    break
}

 // console.log(`value of i is : ${index}`);
  
  
}

for (let index = 1; index <=20; index++) {
if(index==5)
  {console.log("detected 5");
    continue
}
  
console.log(`value of i is : ${index}`);
  
  
}