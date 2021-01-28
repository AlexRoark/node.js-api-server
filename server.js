var express = reqiare('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello API');
})