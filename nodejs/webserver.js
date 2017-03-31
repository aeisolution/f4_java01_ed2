// WebServer con Express.js

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());


// DAO
var allieviDAO = require('./dao/allievo');

// Static files
app.use(express.static(__dirname + '/public'));


app.get('/',function(req, res){
    res.send("Benvenuto in Home Page");
});


// Servizio webapi REST per allievi
app.get('/allievi',function(req, res){
    var results = allieviDAO.getAll();
    res.json(results);
});

app.get('/allievi/:id',function(req, res){
    var id = req.params.id || 0;

    var result = allieviDAO.get(id);
    if(result === undefined) {
        res.status(404).send("Record non trovato");
    } else {
        res.json(result);
    }
});

app.post('/allievi', function(req, res){
    console.log("ricevuta richiesta di post");
    console.log("req.body");
    console.dir(req.body);

    var newAllievo = allieviDAO.post(req.body);
    res.status(201).json(newAllievo);
});


app.listen(8080, function(){
    console.log("webserver avviato");
});