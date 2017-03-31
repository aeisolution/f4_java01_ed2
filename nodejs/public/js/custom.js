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


function caricaDati(alunni) {
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
    caricaDati(alunni);
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
    var value = document.forms.frmProgress.valoreProgress.value;

    var pb = document.querySelector('.progress-bar');
    pb.style.width = value + '%';
}


function filtra(){
    //1. Recupera stringa di filtro cognome
    var filter = document.forms.frmFilter.cognome.value;

    //2. Genera array filtrato per cognome
    var alunniFilter = alunni.filter(function(alunno){
        return filter == alunno.cognome.substr(0,filter.length);
        /*
        for(var i=0; i<filter.length; i++) {
            if(filter[i] != alunno.cognome[i])
                return false;
        }
        return true;
        */
    });

    //3. aggiorna body della tabella
    caricaDati(alunniFilter);
}

function extDatiLoad() {
    var users = JSON.parse(this.response);

    loadTable2(users);
}

function loadTable2(users) {
    //1. intercettare tbody della tabella table2
    var tb = document.getElementById('table2');
    var tbody = tb.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    //2. ciclare array users e aggiungere tr con td
    for(var i=0, len=users.length; i<len; i++) {
        var row = document.createElement('tr');
        row.innerHTML += '<td>' + users[i].id + '</td>';
        row.innerHTML += '<td>' + users[i].name + '</td>';
        row.innerHTML += '<td>' + users[i].email + '</td>';
        row.innerHTML += '<td>' + users[i].username + '</td>';

        tbody.appendChild(row);
    }    
}

function caricaDatiEsterni() {
    var req = new XMLHttpRequest();
    req.onload = extDatiLoad;
    req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    req.send();
}

function caricaDatiJQ() {
  $.get('https://jsonplaceholder.typicode.com/users', loadTable2);
}