let arr = [10,20,30] 

let brr = []

// for(let i = 0; i < arr.length; i++){
//     brr[i] = arr[i] 
// }

brr = [...arr] 

brr[0] = 1000

console.log("arr",arr)
console.log("brr",brr)


// deep copy and shallow copy