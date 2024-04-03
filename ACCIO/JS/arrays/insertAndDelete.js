

// let arr = [10,20,30,40,50]

// last: 

// push and pop

// console.log(arr, arr.length)
// let x = arr.pop() // last element of array will be removed
// let y = arr.pop()
// console.log(arr, arr.length,x,y)

// push - add element at end 

// let n = arr.push(60,70,80,90) // length of the array

// console.log(arr, n)

// let str = "ramesh"

// let s = str.toUpperCase() // RAMESH



// let arr = [10,20,30,40,50]
// modifying the array at start:

// unshift and shift

// let x = arr.shift() // remove the first element of the array

// console.log(arr,x)

// let z = arr.unshift(1,2,3,4,5) 

// console.log(arr,z)




let arr = [10,20,30,40,50,60,70]


// [10,20,30,40,50,60,70, undefined] 

// [10,20,30,40,50,60,70,70]

// [10,20,30,40,50,60,60,70]

// [10,20,30,40,50,50,60,70]

// [10,20,30,35,40,50,60,70]


for(let i = arr.length-1; i>=3; i--){
    arr[i+1] = arr[i]

    // console.log(arr) 
}

arr[3] = 35 

console.log(arr)



// const input = "A man, a plan, a canal: Panama";
// const result = isPalindrome(input);
// console.log(result);




// let arr = [10,20,30,40,50,60,70], delete index 3














// let newArr = []
// for(let i = arr.length-1;i>=3; i-- ){
//      newArr.unshift(arr.pop()) // [40,50,60,70]
// }


// arr.push(35)
// console.log(arr)
// console.log(newArr)

// console.log([...arr,...newArr])