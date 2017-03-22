// Gestione Array numerici

var prezzi = [ 1200.00, 865.50, 534.12, 200, 780 ];

var prezzi2 = prezzi;
var prezzi3 = [];
for(var i = 0; i < prezzi.length; i++){
    prezzi3.push(prezzi[i]);
}

var prezzi3 = prezzi.map(function(v, i, arr) { 
    return v; 
});

//ECMAScript 6
//var prezzi3 = prezzi.map((v) => v );


// Filtrare e stampare solo i prezzi superiori a 700
var results = prezzi.filter(function(value, index, arr){
    return value > 700;
});
//ECMAScript 6
//var results = prezzi.filter( (v) => v > 700);

console.log(results);

//Aggiunta elemento di 320 a prezzi
prezzi.push(320);

console.log(prezzi);
console.log(prezzi2);
console.log(prezzi3);

var totale = prezzi.reduce(function(sum, value){
    return sum + value;
}, 0);
console.log("totale: " +  totale);

/*
function reduce(arr, callback, initValue) {
    var newArr = [];
    var preVal = initValue;
    for(var i=0; i < arr.length; i++) {
        newArr.push(arr[i]);
        preVal = callback(preVal, arr[i], i, newArr);
    }
    return preVal;
}
*/
var valore = 0;
prezzi.forEach(function(item){
    var valore = item;
    console.log(item);

    if(valore == item) {

    }
});
