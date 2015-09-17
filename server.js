//Fortune cookie assignment in express
//require express

var express = require('express');
var app = express();

//This is the landing route for the server

app.get('/', function(req, res){
    res.send("<h1>Welcome to your fortune teller!</h1>");
});

// this is the static file server used in order to show the other files
app.use(express.static(__dirname + '/client'));


//Cloud9 requires process.env.PORT to work
app.listen(process.env.PORT, function(){
    console.log("server running");
});
