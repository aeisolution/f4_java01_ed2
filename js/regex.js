// codice per validazione dati form

function validate(){
    console.log('validate');
    var valid = true;
    $('input').parent().removeClass('has-error');

    var frm = document.forms.anagForm;

    var cognome = frm.cognome.value;
    console.log('cognome.length: ' + cognome.length);
    if(cognome.length==0) {
        valid = false;
        $('input[name="cognome"]')
            .parent()
            .addClass('has-error');
    }

    var nome = frm.nome.value;
    console.log('nome.length: ' + nome.length);
    if(nome.length==0) {
        valid = false;
        $('input[name="nome"]')
            .parent()
            .addClass('has-error');
    }

    var pIva = frm.partitaIva.value;
    var regPIva = /^[0-9]{11}$/;

    console.log('pIva.length: ' + pIva.length);
    if(pIva.length!=11 || !regPIva.test(pIva)  ) {
        valid = false;
        $('input[name="partitaIva"]')
            .parent()
            .addClass('has-error');
    }

    var codFisc = frm.codiceFiscale.value;
    var regCodFisc = /^[A-z]{6}\d{2}[A-z]\d\d[A-z]\d{3}[A-z]$/;

    console.log('codFisc.length: ' + codFisc.length);
    if(codFisc.length!=16 || !regCodFisc.test(codFisc) ) {
        valid = false;
        $('input[name="codiceFiscale"]')
            .parent()
            .addClass('has-error');
    }


}