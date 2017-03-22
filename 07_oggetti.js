//07 - generazione e gestione oggetti

var alunno = {
    nome: 'Andrea',
    cognome: 'Maddalena'
};
alunno.nominativo = function() {
    return this.nome + ' ' + this.cognome;
};



// lettura dei dati di alunno
console.log('1. ');
console.dir(alunno);

// creo alunno 2 come clone di alunno
var alunno2 = {};
for(var prop in alunno) {
    alunno2[prop] = alunno[prop];
}
console.dir(alunno2);







// stampa del nome di alunno
// Dot notation
console.log('1.1 nome:' + alunno.nome);

// Brackets notation
console.log('1.2 nome:' + alunno['nome']);

// Modifica nome alunno in Filippo
alunno.nome = 'Filippo';

// stampa alunno e alunno2
console.log('2.');
console.dir(alunno);
console.dir(alunno2);

//Stampa nominativo
console.log(alunno.nominativo());
console.log(alunno2.nominativo());

