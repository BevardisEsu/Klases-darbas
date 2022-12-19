/* Pirma užduotis */

document.getElementById("mygtukas").addEventListener("click", function() {
    document.getElementById("ShowText").value = "Sveikas Pasauli!";
});

/* Antra užduotis */

document.getElementById("email").addEventListener("click", function Hide(){
document.getElementById( "Hide").style="display: block;"
});

document.getElementById("InputText").addEventListener("click", function Hide(){
    document.getElementById( "Hide1").style="display: block;"
});
document.getElementById("medis").addEventListener("click", function Hide(){
    document.getElementById( "Hide2").style="display: block;"
});
document.getElementById("namas").addEventListener("click", function Hide(){
    document.getElementById( "Hide3").style="display: block;"
});

/* Trečia užduotis */

document.getElementById("pridet").onclick = function(){

    let pirmas = document.getElementById("pirmas").value;
    let antras = document.getElementById("antras").value;
    let trecias = document.getElementById("trecias").value;
    let ketvirtas = document.getElementById("ketvirtas").value;

    let table = document.getElementById("lentele");
    let eilute = document.createElement("tr");
    let stulpelis1=document.createElement("td");
    let stulpelis2=document.createElement("td");
    let stulpelis3=document.createElement("td");
    let stulpelis4=document.createElement("td");

    stulpelis1.innerHTML = pirmas;
    stulpelis2.innerHTML = antras;
    stulpelis3.innerHTML = trecias;
    stulpelis4.innerHTML = ketvirtas;

    eilute.appendChild(stulpelis1);
    eilute.appendChild(stulpelis2);
    eilute.appendChild(stulpelis3);
    eilute.appendChild(stulpelis4);
    table.appendChild(eilute);
}