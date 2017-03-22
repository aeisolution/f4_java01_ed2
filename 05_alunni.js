// Alunni -  array di alunni con viualizzazione dati

var alunni = [
    'Giovanni',
    'Francesca',
    'Fausto',
    'Carlo',
    'Emanuele',
    'Danilo',
    'Cristian'
];

// Ciclo for
console.log('Ciclo for');
for (var i = 0; i < alunni.length; i++) {
    console.log(alunni[i]);
}

// Stampa dell'array in ordine crescente
console.log('\nCiclo for - ordinato');
alunni.sort();
for (var i = 0; i < alunni.length; i++) {
    console.log(alunni[i]);
}


// Stampare solo gli elementi che iniziano per "C"
var results = alunni.filter(function(v){
    return v[0].toUpperCase() == 'C';
});
console.log(results);

// Stampare solo elemnti di alunni in posizione pari
results = alunni.filter(function(value, index){
    return index % 2 > 0;
});
console.log(results);