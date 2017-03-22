// Creazione e gestione funzioni


// creare una funzione raddoppia
var raddoppia = function(value) {
    return value * 2;
}

var quadrato = function(value) {
    return value * value;
}

// Funzione per eseguire più volte una funzione
// con i valori di un array
var map = function(func, list) {
    for(var i = 0; i < list.length; i++) {
        console.log(func(list[i]));
    }    
};

var valori = [ 2, 7, 12, 5, 8];

// utilizzare raddoppia con il valore 5
map(raddoppia, valori);
map(raddoppia, [2,3,4,5,6]);

map(quadrato, [2,3,4,5,6]);
