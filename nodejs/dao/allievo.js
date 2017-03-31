// Data Access Layer per Allievo

var Studente = require('../models/allievo');

var allievi = [];

// Procedura di inizializzazione per simulazione
allievi.push(new Studente("Giovanni", "Pelleriti"));
allievi.push(new Studente("Fausto", "Campisi"));
allievi.push(new Studente("Carlo", "Guidotti"));
allievi.push(new Studente("Emanuele", "Grassadonia"));
allievi.push(new Studente("Danilo", "Arigò"));
allievi.push(new Studente("Cristian", "Siragusa"));


var dao = function() {

    this.getAll = function() {
        return allievi;
    }

    this.get = function(id) {
        var results = allievi.filter(function(v){
            return v.id == id;
        });

        return results.length==0 ? undefined : results[0];
    }

    this.post = function(allievo) {
        allievi.push(new Studente(allievo.nome, allievo.cognome));
        return allievi[allievi.length-1];
    }

    this.delete = function(id) {
        for(var i=0; i<allievi.length; i++) {
            if(allievi[i].id == id) {
                allievi.splice(i, 1);
                return true;
            }
        }
        return false;
    }


}

module.exports = new dao();