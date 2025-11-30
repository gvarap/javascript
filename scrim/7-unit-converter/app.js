/*
1 Meter = 3.281 feet
1 liter = 0.264 gallon
1 kg = 2.202 Pound
*/
let input = document.querySelector("input");
let button = document.querySelector("button");
let lengthEl = document.querySelector("#length-el");
let volumeEl=document.querySelector("#volume-el");
let massEl=document.querySelector("#mass-el");
button.addEventListener("click", inputValue);

function inputValue() {
    let inputValue = input.value;
    length(inputValue);
    volume(inputValue);
    mass(inputValue);
}

function length(length) {
    let lengthOutput=`${length} Meters =${length * 3.281} feet | ${length} feet =${( length/ 3.281).toFixed(5)} Meters`;
   lengthEl.innerHTML=lengthOutput ;
}

function volume(length) {
    let volumeOutput=`${length} Liters =${length * 0.264} Gallons | ${length} Gallons =${( length/ 0.264).toFixed(5)} Liters`;
   volumeEl.innerHTML=volumeOutput ;
}

function mass(length) {
    let massOutput=`${length} Kilos =${length * 2.202} Pounds | ${length} Pounds =${( length/ 2.202).toFixed(5)} Kilos`;
   massEl.innerHTML=massOutput ;
}

