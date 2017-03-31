console.log("postman.js loaded")


function send() {
    var obj = {};

    var frm = document.forms.anagForm;
    obj.nome = frm.nome.value;
    obj.cognome = frm.cognome.value;

    $.post('http://localhost:8080/allievi',
        obj,
        function(data) {
            console.log("response to post");
            console.log(data);
        });
}