let input_box = document.querySelector('input');
let btn = document.querySelector('button');
let output = document.querySelector('.output');


// once button is clicked 
// get the value of input box 
// and find 2% as tip 
// and show the output


// events => click
// addEventListener



btn.addEventListener("click", calculateTip);

function calculateTip() {
    // console.log(input_box.value)
    let value = input_box.value
    let tip = value * 0.02;
    // console.log(tip);
    output.innerHTML = `You should tip ${tip}`
}