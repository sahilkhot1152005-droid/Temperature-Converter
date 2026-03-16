function convertTemp(){

let temp = document.getElementById("temp").value;
let from = document.getElementById("fromUnit").value;
let to = document.getElementById("toUnit").value;
let result = document.getElementById("result");

if(temp === "" || isNaN(temp)){
result.innerHTML="⚠ Please enter a valid number";
return;
}

temp = Number(temp);

let celsius;

if(from === "C")
celsius = temp;

else if(from === "F")
celsius = (temp - 32) * 5/9;

else if(from === "K")
celsius = temp - 273.15;

let output;

if(to === "C")
output = celsius;

else if(to === "F")
output = (celsius * 9/5) + 32;

else if(to === "K")
output = celsius + 273.15;

result.innerHTML = "Result: " + output.toFixed(2) + " °" + to;

}

function clearAll(){
document.getElementById("temp").value="";
document.getElementById("result").innerHTML="";
}