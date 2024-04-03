// Call/Pass by value or reference




// function hello(a){ // a = 100
//     a = 50
    
// }


// let a = 100 
// hello(a) // 100 
// console.log(a)

// a = b , value is copied




function hello(brr){ // brr =  address of arr = [10,20,30]
   brr[0] = 100 
}


let arr = [10,20,30]
hello(arr) // address of arr
console.log(arr) 

// arr = brr , address is copied    

