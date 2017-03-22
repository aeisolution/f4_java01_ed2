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


// Ciclo While
console.log('\nCiclo while');
var i = 0;
while (i < alunni.length) {
    console.log(alunni[i]);
    i++;    
}


// Ciclo Do While
console.log('\nCiclo do while');
i=0;
do {
    console.log(alunni[i]);
    i++;     
} while (i < alunni.length);