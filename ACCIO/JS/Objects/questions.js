

let obj1 = {
    a: 10,
    b: 20,
    c: 30,
}

let obj2 = {
    d: 40,
    e: 50,
}

// spread operator: (...)

// let obj3 = {
//   x: 100,
//   ...obj1,
//   y:200

// }

let obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3)




// let obj3 = {}
// for(let t1 in obj1){ // a,b
//     // console.log(t1, obj1[t1])
//     obj3[t1] = obj1[t1] // obj3.a = 10, obj3.b = 20, obj3.c = 30
// }
// for(let t2 in obj2){
//     obj3[t2] = obj2[t2] // obj3.d = 40, obj3.e = 50
// }
// console.log(obj3)




















