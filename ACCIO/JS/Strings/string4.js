// ASCII/unicode code and  toUpperCase, toLowerCase , String Comparison



// Abhishek
// 23 => 2*10^1 + 3*10^0

// A - Z => 65 - 90
// a - z => 97 - 122
// "0" - "9" => 48 - 57
// ( => 40
// ) => 41
// " " => 32


// let a = "Abhishek"
// console.log(Number(a)) 
// console.log(a.charCodeAt(1)) 



// ram shanakr choudary 

// ramShanakrChoudary() => camelCase


// let n = 6500058 

// console.log(String.fromCharCode(n))




// let a = "Paan" // 87
// let b = "Pzoq" // 80

// console.log(a>=b)

// let a = "k" 
// let b = "K"
// console.log(a.charCodeAt(), b.charCodeAt())
// console.log(a>b)


// A - Z => 65 - 90  // +32
// a - z => 97 - 122


// K => 75 +32 = 107 => k

// let take a character(string) and change it case if possible

// let n = "{" 

// let code = n.charCodeAt()

// if(code>=65 && code<=90){
//      code = code + 32
// }
// else if(code>=97 && code<=122){
//     code = code - 32
// }

// console.log(String.fromCharCode(code)) // a


// let str = "AbHisHek123*}}"

// console.log(str.toUpperCase())



let n = "z" 

if(n>="A" && n<="Z"){
     console.log(n.toLowerCase())
}
else if(n>="a" && n<="z"){
    console.log(n.toUpperCase())
}
else{
   console.log(n)
}
