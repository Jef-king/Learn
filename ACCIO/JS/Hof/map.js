// 90%

// map vs for Each


let arr = [10,20,30,40,50]


// for(let t of arr){

// }


// let x = arr.map((value, index)=>{console.log(value*value)})

// let x = arr.map(
//     function(value, index)
// { return value*value }
// )

console.log(x)



arr.forEach((value, index)=> console.log(value*value))

// value 10 => 100 
// value 20 => 400
// value 30 => 900
// value 40 => 1600
// value 50 => 2500 


// arr.map(square)

// function square(value, index){
//     console.log(value, index)
// }




// for(let i = 1; i<=10; i++){
//     return i 
// }