// immutable  ( diff methods)
// type converstion 


// let str = "abhishek" // immutable

// // str[0] = "K"

// // str = "pankaj"
// // console.log(str)

// let str2 = str.replace("a", "K")

// console.log(str) 


// let str = "papa"

// console.log(str.replace("p", "k")) // kapa

// console.log(str.replaceAll("p", "k")) // kapa



// let str = "rapapahw"

// let newStr=""


// for(let t of str){

//     if(t == "p"){
//         newStr = newStr + "k" // rak
//     }
//     else if( t!= "p"){
//         newStr = newStr + t //ra
//     }

// }


// Find sum of all digits of n using string concept
let n = 57834747 
n = String(n) // n.toString()

let sum = 0
for(t of n){
    // console.log(t)
    sum = sum+ +(t)
}
console.log(sum) // 47