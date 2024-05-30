# Big O (n)

0(n) is simply the number of work it is going to take place n times
`
function logItems(n){
  for(let i=0;i<n;i++){
    console.log(i);
  }
}
logItems(5);
`
0(n^2) in this the code will runs the square of the n times
`
function logItems(n){
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
     console.log(i,j); 
    }
  }
}
logItems(5);
`
