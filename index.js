const textBox = document.getElementById ("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const tocelsuis = document.getElementById("tocelsuis");
const result = document.getElementById("result");
let temp;


function  convert(){
 if(toFahrenheit.checked){
temp = Number(textBox.value);
temp = temp * 9/ 5 + 32;
result.textContent = temp.toFixed(1)+ "  F";
 }
 else if(tocelsuis.checked){
    temp = Number(textBox.value);
    temp = (temp - 32 ) * (5/9) ;
    result.textContent = temp.toFixed(1)+ "c";
 }
 else{
    result.textContent = "Select a unit";
 }
}