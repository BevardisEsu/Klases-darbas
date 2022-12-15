
function add(a,b){
        return a+b;
    }
function sub(a, b){
   return a-b;
}
function div(a,b){
   return a/b;

}
function multiply(a,b){
    return a*b;

}
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];

let ats = document.getElementById('ats')
for (let i = 0; i<array1.length; i++){
    for (let j=0; j<array2.length; j++){
        ats.innerHTML += 'Skaiciu' + array1[i] + ' ir ' +array2[j] + 'sudėtis yra' +add(array1[i],array2[j]);
        ats.innerHTML += 'Skaiciu' + array1[i] + ' ir ' +array2[j] + 'atimtis yra' +sub(array1[i],array2[j]);
        ats.innerHTML += 'Skaiciu' + array1[i] + ' ir ' +array2[j] + 'dalyba yra' +div(array1[i],array2[j]);
        ats.innerHTML += 'Skaiciu' + array1[i] + ' ir ' +array2[j] + 'daugyba yra' +multiply(array1[i],array2[j]);
    }
}