console.log("postman.js loaded")


function send() {
    var obj = {};

    var frm = document.forms.anagForm;
    obj.nome = frm.nome.value;
    obj.cognome = frm.cognome.value;

    $.post('/api/allievi',
        obj,
        function(data) {
            console.log("response to post");
            //console.log(data);

            addRiga(data);
            toastr.success("Allievo aggiunto");
        });
}

function addRiga(elem) {
    var strRiga = '<tr>';
        strRiga += '<td>' + elem.id + '</td>';
        strRiga += '<td>' + elem.nome + '</td>';
        strRiga += '<td>' + elem.cognome + '</td>';
        strRiga += '<td>' + elem.username + '</td>';
        strRiga += '<td> \
                        <button class="btn btn-danger" onclick="delRecord(' + elem.id + ')"> \
                            <i class="fa fa-times" aria-hidden="true"></i> \
                        </button> \
                    </td>';
        strRiga += '</tr>';


    $('#table1 > tbody').append(strRiga);
}

function loadAll() {
    $.get('/api/allievi', function(data){
        console.log("allievi");
        console.log(data);

        $('#table1 > tbody').html('');

        for(var i=0;i< data.length; i++) {
            addRiga(data[i]);
        }
    });
}

function delRecord(id) {
    $.ajax({
        url: '/api/allievi/' + id,
        type: 'DELETE',
        success: function(data){
                    toastr.error("Record eliminato");
                    loadAll();
                }
    });
}