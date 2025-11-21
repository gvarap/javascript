// BENGALURU BULLS 
let homeScore = 0;

function plusOne() {
    homeScore++;
    document.getElementById("home-score").textContent = homeScore;
}

function plusTwo() {
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore;
}

function plusThree() {
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore;
}

function homeReset() {
    homeScore = 0;
    document.getElementById("home-score").textContent = homeScore;
}



// PATNA PIRATES
let guestScore = 0;

function plus1() {
    guestScore++;
    document.getElementById("guest-score").textContent = guestScore;
}

function plus2() {
    guestScore += 2;
    document.getElementById("guest-score").textContent = guestScore;
}

function plus3() {
    guestScore += 3;
    document.getElementById("guest-score").textContent = guestScore;
}
function guestReset() {
    guestScore = 0;
    document.getElementById("guest-score").textContent = guestScore;
}