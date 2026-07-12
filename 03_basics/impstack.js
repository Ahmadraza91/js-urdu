// interview important .................

// execution context
// single threaded....
// global execution context +> this{}
// function execution context 
// eval execution context =>property of global exe

// how code run...
// 1. memory creation phase=>jo bhi variables delare kia hain inki jagah allocate hoti hai
//2. execution phase =>

    let val1=60
    let val2=90

    function add(num1,num2){
        let total =num1+num2
        return total
    }

    let result1=add(val1,val2)
    console.log(result1)
    let result2=add(7,8)
    console.log(result2)

// exeution.....
// 1.global execution thi { }
// 2. memoey phase => gather all variables and store them...
// val1=undefined 
// val2=undefined 
// add =definition// fun definition..
// result1=undefined
// result2=undefined

//3. execution phase..
//val1=60
// val2=90
// add =nothing=>
      //            for function add
// add=add another executional box
// new executional context for function
// execution thread
// dobara memoery pahse and execution phase...
//           =>memeory phase
//val1=undefined
//val2=undefined
//total=undefined
//           =>execution phase
//num1=60
//num2=90
//total=150// =>it return in global execution context

// after doing work function kaliya executional context delete bhi ho gaa


// result1=150

// again function execute... whole process repeat......
// result2=15




// // call stack..........

// 1. global execution
// add function..


