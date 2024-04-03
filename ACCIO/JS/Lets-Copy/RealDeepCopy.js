
let arr = [10,20,[30,40],50,[60,[70,80],90],100]


let arr1 = structuredClone(arr) // >=17.2

arr1[2][0]  = 1000

console.log(arr)
console.log(arr1)

