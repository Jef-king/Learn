// JSON => JavaScript Object Notation

// let obj = {
//     a: 10,
//     b:20
// }

// JSON is  a smiple key based language

// Number, String, Boolean, Array, Object

// let name = 'Ramesh'  //Javascript 

// string: " " , ' ' , ` ` => json => ""


let obj = {
    name: 'Ramesh',
    age: 25,
    city: 'Bangalore',
    isMarried: false,
    hobbies: ['Reading', 'Coding', 'Travelling'],
    address: {
        city: 'Bangalore',
        state: 'Karnataka'
    }
}


// let a = 100
// cobvert js data type to JSON: 

let jsonData = JSON.stringify(obj)




// console.log(obj, typeof obj)
// console.log(jsonData , typeof jsonData)


// convert json to js data type: 

let jsData = JSON.parse(jsonData)

console.log(jsData, typeof jsData)