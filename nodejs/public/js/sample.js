// File personalizzato di script

var alunni = [
    "Giovanni Pelleriti",
    "Francesca Parasporo",
    "Fausto Campisi",
    "Carlo Guidotti",
    "Emanuele Grassadonia",
    "Danilo Arig&ograve;",
    "Cristian Siragusa"
];

function aggiornaSubtitle() {
    var sub = document.getElementById('subtitle');
    sub.innerHTML = "sottotitolo di prova";
}

function caricaAlunni() {
    var list = document.getElementById('listaAlunni');
    var str = '';
    for(var i=0; i<alunni.length; i++) {
        // scrivo il singolo li per alunno
        str += '<li>' + alunni[i] + '</li>';
    }
    // aggiungo tutti i li concatenati
    list.innerHTML = str;
}


function ordinaAlunni() {
    alunni.sort();
    caricaAlunni();
}
