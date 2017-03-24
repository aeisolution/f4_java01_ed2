// Codice per vlidazione dati form

function validate(){
    var result = true;
    $('#msgValidate ul').html('');
    $('input').parent().removeClass('has-error');                   
    

    //controllo password
    var pwd = document.forms.frmDati.password.value;
    if(pwd.length<5) {
        result = false;
        $('#msgValidate ul').append('<li>Password</li>'); 
        $('input[name="password"]').parent().addClass('has-error');                   
    }

    //controllo email
    var email = document.forms.frmDati.email.value;
    var c = email.indexOf('@');
    var d = email.lastIndexOf('.');

    if(!(c > 0 &&  d - c > 1)){
        result = false;
        $('#msgValidate ul').append('<li>Email</li>');
        $('input[name="email"]').parent().addClass('has-error');                   
    }
    
    if(!result) {
        $('#msgValidate').removeClass('hidden');
    }

    return result;
}