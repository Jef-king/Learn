

// final => const

// let a = 10 

// a = 50 

// console.log(a)

// const b = 300 

// b = 300

// console.log(b) // TypeError: Assignment to constant variable.





// let arr = [10,20,30]

// arr[0] = 100

// arr = [1,2,3,4,5,566]

// console.log("arr",arr) // [ 100, 20, 30 ]

// const brr = [10,20,30]
// brr[0] = 100

// brr = [1,2,3,4,5,566]

// console.log("brr",brr) // [ 100, 20, 30 ]



// let t1 = 100
// let t2 = 200
// let t3 = 300

// const arr = [t1,t2,t3]


const obj = {
    a: 10,
    b:20,
}


// obj.a = 100

// obj.c = 300

obj = {x:100}

console.log(obj) // { a: 100, b: 20, c: 300 }
