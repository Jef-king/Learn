

let a = 10 // global scope
let b = 200


for(let  i = 1; i<=1; i++){
    
    console.log("inner1",a)
    console.log("inner1",b)

    
     let a = 20  // local scope

    console.log("inner2",a)
}

console.log("outer",a) // 20



// if two varables of same name are declared in diff scope, they will work like diff varibales