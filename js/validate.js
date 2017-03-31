// Codice per vlidazione dati form

function validate(){
    var result = true;
    $('#msgValidate ul').html('');
    $('input').parent().removeClass('has-error');                   
    

    //controllo password
    var pwd = document.forms.frmDati.password.value;
    console.log('pwd.length: ' + pwd.length);
    if(pwd.length<5) {
        result = false;
        $('#msgValidate ul').append('<li>Password</li>'); 
        $('input[name="password"]').parent().addClass('has-error');                   
    }

    //controllo email
    var email = document.forms.frmDati.email.value;
    var c = email.indexOf('@');
    var c_last = email.lastIndexOf('@');
    var d = email.lastIndexOf('.');
    console.log('email: ' + email);
    console.log('@: ' + c + ' - @: ' + c_last + ' - .: ' +d );

    if(!(c > 0 &&  d - c > 1  && c == c_last)){
        console.log('email non valida');
        result = false;
        $('#msgValidate ul').append('<li>Email</li>');
        $('input[name="email"]').parent().addClass('has-error');                   
    }

    console.log('result: ' + result);    
    if(!result) {
        $('#msgValidate').removeClass('hidden');
    }

    return result;
}