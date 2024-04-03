function dancing(a,b){ // assuming danincg is inbuilt
    // a = 10
    // b = ()=>{return sum(10,20)}
  console.log(a)
  console.log(b())
}

// b = ()=>{return sum(10,20)}

// function b(){
//     return sum(10,20) // return 30
// }


let n = 10 

let sum = (x,y)=>{
   return x+y
}


dancing(n, sum) // 10, NaN 
dancing(n, sum(10,20)) // 10, error

dancing(n, ()=>{return sum(10,20)})



// function (){
//     sum(10,20)
// }