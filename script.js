const nabidka = ["CPU", "GPU", "RAM"];
const kosik = [];
 
function vypis(array, output) {
    let outputHTML = "";
    for (let i = 0; i < array.length; i++) {
        outputHTML += i + 1 + ". " + array[i] + "<br>";
    }
    document.getElementById(output).innerHTML = outputHTML;
}
 
function Add() {
    const input = parseInt(document.getElementById("add-component").value);
 
    if (input > 0 && input <= nabidka.length) {
        kosik.push(nabidka[input - 1]);
        nabidka.splice(input - 1, 1);
    } else {
        alert("Chyba");
    }
 
    vypis(kosik, "user-cart");
    vypis(nabidka, "content");
    updateKosikOptions();
}
 
function updateKosikOptions() {
    const select = document.getElementById("kosik-nabidka");
    select.innerHTML = "";
    kosik.forEach((item, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.text = item;
        select.appendChild(option);
    });
}
 
function Odeber() {
    const select = document.getElementById("kosik-nabidka");
    const index = select.selectedIndex;
 
    if (index >= 0) {
        nabidka.push(kosik[index]);
        kosik.splice(index, 1);
        updateKosikOptions();
    } else {
        alert("Chyba");
    }
 
    vypis(kosik, "user-cart");
    vypis(nabidka, "content");
}
 
vypis(nabidka, "content");
