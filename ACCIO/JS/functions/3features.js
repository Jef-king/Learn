
// less or extra parameter
// function hello(a,b){
//      console.log(a,b)
// }


// hello(10,20,30)


// default parameter

// function hello(name="Anonymous"){
//     console.log(name)
// }

// hello("Abhishek")

// 


// multiple arguments 

// ...

function sum(a,...b){ // rest operator
    console.log(b, typeof b)
}

sum(10,20) 

sum(10,20,30)

sum(10,20,30,40,506,7)