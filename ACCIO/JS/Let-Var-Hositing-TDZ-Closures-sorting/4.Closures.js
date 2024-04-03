
// Hof => Higher Order Function

// 1. A function that takes another function as an argument or returns a function as a result is called a higher order function.


// function hello(){

//     return ()=>{
//         console.log('Hello World')
//     }
// }


function hello(){
    let a  = 0 
    return ()=>{
        a++
        console.log(a)
    }
}

let x = hello()
// console.log(x) 
// a = 0
x() // a = 1
x() // a = 2
x() // a = 3



// Hey dear Ai define closure in a simple way
// Closure = 'A closure is a function that has access to the outer function scope even after the outer function has returned'