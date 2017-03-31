// Struttura dell'oggetto Allievo
var id = 0;

function Allievo(nome, cognome) {
    this.id = ++id;
    this.nome = nome;
    this.cognome = cognome;
    this.username = this.setUsername();
}

Allievo.prototype.nominativo = function() {
    return this.cognome + ' ' + this.nome;
} 

Allievo.prototype.setUsername = function() {
    this.username = (this.nome[0] + '.' + this.cognome).toLowerCase(); 
}

module.exports = Allievo;