// Ambito di definizione delle variabili

function showNome(value) {
    var nome = value;
    console.log("showNome=" +  value);
}

var nome = 'Andrea';
console.log("1. nome=" + nome);

showNome('Filippo');
console.log("2. nome=" + nome);

if(5 < 10) {
    // inizio libreria
    (function(libreriaA) {
        var nome = 'Cristian';
        libreriaA.log("if nome=" + nome);
    })($);
    //fine libreria
}

console.log("3. nome=" + nome);

