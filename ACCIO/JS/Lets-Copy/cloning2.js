let arr = [10,20,30] // refernce => address => location => 1000th

// let brr = arr


// for(let i = 0; i < arr.length; i++){
//     brr[i] = brr[i]*2
// }

// console.log(arr)
// console.log(brr)

let brr = []

for(let i = 0; i < arr.length; i++){
    //   console.log(t, typeof t)
    // brr.push(t)
    brr[i] = arr[i] // a = b
}



for(let i = 0; i < arr.length; i++){
    brr[i] = brr[i]*2
}

console.log("brr",brr)
console.log("arr",arr)



