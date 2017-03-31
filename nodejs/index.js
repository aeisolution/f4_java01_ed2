// Web Server con nodejs

var http = require('http');

var server = http.createServer(function(req, res){
    var msg;
    console.log('Request ricevuta');
    console.log('req.url: ' + req.url);
    console.log('req.method: ' + req.method);

    if(req.url == '/') {
        msg = 'benvenuto nel webserver nodejs'
    } else if(req.url == '/clienti') {
        msg = 'elenco Clienti'
    } else {
        msg = 'pagina non trovata';
        res.statusCode = 404;
    }

    res.end(msg);
});

server.listen(8080,function(){
    console.log('WebServer attivo su porta: 8080');
});