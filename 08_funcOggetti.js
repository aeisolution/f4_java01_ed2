//08 - Oggetti creati con funzione

function Alunno(nome, cognome, secr) {
    var self = this;

    var secret = secr;

    this.nome = nome;
    this.cognome = cognome;

    this.getSecret = function() {
        return secret;
    }

    this.setSecret = function(value) {
        secret = value;
    }

    this.nominativo = function() {
        return self.nome + ' ' + self.cognome;
    }
}

// Definizione oggetto alunno
var alunno = new Alunno('Andrea', 'Maddalena', 'init');
alunno.secret = 'si';
console.log(alunno.secret);
console.log(alunno.getSecret());
alunno.setSecret("nuova");
console.log(alunno.getSecret());

console.log('nominativo: ' + alunno.nominativo());

console.log('1.');
console.dir(alunno);

// Creare array alunni contente gli alunni presenti
var alunni = [];
alunni.push(new Alunno('Giovani', 'Pelleriti'));
alunni.push(new Alunno('Fausto', 'Campisi'));
alunni.push(new Alunno('Carlo', 'Guidotti'));
alunni.push(new Alunno('Emanuele', 'Grassadonia'));
alunni.push(new Alunno('Danilo', 'Arigò'));
alunni.push(new Alunno('Cristian', 'Siragusa'));

// clonare alunni in alunni2
var alunni2 = [];
for(var i=0; i < alunni.length; i++){
    alunni2.push(new Alunno(alunni[i].nome, alunni[i].cognome));
}


// Stampare elenco alunni
alunni.forEach(function(value,index,arr){
    console.log(index + 1 + '. ');
    console.dir(value);
});

function compareFn(elemA, elemB) {
    if(elemA.cognome < elemB.cognome ) 
        return -1;
    
    if(elemA.cognome == elemB.cognome) 
        return 0;

    return 1;
}


//Ordinare alunni in ordine alfabetico crescente di cognome
alunni.sort(compareFn);

// Stampare elenco alunni
alunni.forEach(function(value,index,arr){
    console.log(index + 1 + '. ');
    console.dir(value);
});


