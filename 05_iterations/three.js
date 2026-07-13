// for of loop..........
// Array specific loop....

// ["","",""]
//{{},{},{}}

const arr=[1,2,3,4,5]

for (const element of arr) {
   // console.log(element)
    
}
const heros=["falsh","butcher"]
for(const val of heros){
  //  console.log(val);
    
}

// on strings.......

const greetings="heelo Ahmad"

for(const greet of greetings){
    if(greet==" "){
        continue
    }
    //console.log(`each cahr is ${greet}`);
    
}

// maps....object

// unique values always in same oredr... if double entries only one entry is print

const map=new Map()
map.set("pk","pakistan")
map.set("uk","united kingdom")
map.set("fr","france")

//console.log(map);

for(const [key,value] of map){
  //  console.log(key,"-:" ,value);
    
}

// on object.....
// not execute for of loop sa .......
const myobj={
    name:"ahmad",
    id:3
}

for(const [key,value] of myobj){
    console.log(key,"-:",value);
    
}// through an error....
