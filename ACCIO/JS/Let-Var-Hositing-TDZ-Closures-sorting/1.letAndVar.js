// var 

// 2015 => let and const

// scope => let



// global variable and local variable



// let a = 10 
// var b = 20 


// for(let i = 1; i <= 1; i++){
//     a = 50 
//     b = 300

//     let x = 100 
//     var y = 200
// }

// console.log(a) // 50
// console.log(b) // 300

// // console.log(x) // x is a local variable
// y = 600
// console.log(y)


// if(true){
//     let x = 100
//     var y = 200
// }


// console.log(y) // x is a local variable




// function hello(){
//     let a = 100 
//     var b = 200
// }


// hello()

// console.log(a)
// console.log(b)


// let variables are of block scope 

// var variables are of  functional scope




// let a = 10 
// // let a = 20 

// var b = 30 
// var b = 40



// c = 30 

// undeclared variables in js are truly global variables

function hello(){
    let a = 100 
    var b = 200
    c = 300
}


hello()

// console.log(a)
// console.log(b)
console.log(c)