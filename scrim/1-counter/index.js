let count = 0;

function increment() {
    count++;
    document.getElementById("count").innerText = count;
}
let counter;

function save() {
    let previous = (document.getElementById("previous-el").innerHTML +=
        " " + count);
    document.getElementById("count").innerText = 0;
    count = 0;
}
