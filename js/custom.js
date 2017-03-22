// script personalizzati

var id = 0;

// Definzione della classe/oggetto User
function User(nome, cognome, username) {
    var self = this;

    this.id = ++id;
    this.nome = nome;
    this.cognome = cognome;
    this.username = username;
}

User.prototype.nominativo = function() {
   return self.nome + ' ' + self.cognome;
};


// Creazione array alunni, ovvero array di oggetti User
var alunni = [];
alunni.push(new User('Giovanni', 'Pelleriti', 'g.pelleriti'));
alunni.push(new User('Fausto', 'Campisi', 'f.campisi'));
alunni.push(new User('Carlo', 'Guidotti', 'c.guidotti'));
alunni.push(new User('Emanuele', 'Grassadonia', 'e.grassadonia'));
alunni.push(new User('Danilo', 'Arrig&ograve;', 'd.arigo'));
alunni.push(new User('Cristian', 'Siragusa', 'c.siragusa'));


function aggiornaButtons(value) {
    var title = document.getElementById('titleButtons');

    title.innerHTML += ' ' + value;
}


function caricaDati() {
    var table1 = document.getElementById('table1');
    var tbody = table1.getElementsByTagName('tbody')[0];

    var riga = '';
    alunni.forEach(function(value, index, arr){
        riga += '<tr> \
                    <td>' + value.id + '</td>  \
                    <td>' + value.nome + '</td>   \
                    <td>' + value.cognome + '</td>   \
                    <td>' + value.username + '</td>    \
                </tr>'; 
    });

    tbody.innerHTML = riga;       
}


function ordinaDati(field) {
    // ordinare array alunni per nome
    alunni.sort(function(a, b){
        if(a[field] < b[field]) 
            return -1;

        if(a[field] > b[field]) 
            return 1;
        
        return 0;
    });

    // aggiornare DOM tabella
    caricaDati();
}


function nascondiMostra() {
    var title = document.getElementById('titleAlerts');
    var checked = document.frmAlerts.nascondi.checked;

    title.innerHTML = checked ? "Alerts nascosti" : "Alerts";

    var elem = document.getElementsByClassName('alert');
    for(var i=0; i< elem.length; i++) {
        elem[i].style.display = checked ? "none" : "block";
    }

}

function updateProgress() {
    var value = document.frmProgress.progress.value;

    var pb = document.querySelector('.progress-bar');
    pb.style.width = value + '%';
}