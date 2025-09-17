
let displayVal = document.getElementById("display");
let resultVal = document.getElementById("result");

function numberClick(num) {
    displayVal.value += num;
}
function clearVal() {
    displayVal.value = "0";
}
function allClear() {
    displayVal.value = "";
}
function sum(val){
    let sumVal = displayVal.value += val;
    console.log(sumVal);
}
function sub(val) { 
    let subVal = displayVal.value += val;
    
}
function multi(val) { 
    let multiVal = displayVal.value += val;
}
function divi(val) { 
    let diviVal = displayVal.value += val;
}
function mod(val) { 
    let modVal = displayVal.value += val;
}