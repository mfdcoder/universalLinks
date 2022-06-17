var express = require('express');
var server = express();

// This will be call by APPLE TO VERIFY THE APP-SITE-ASSOCIATION 
// Make the 'apple-app-site-association' accessable to apple to verify the association
server.get('/', function(request, response) {
  response.sendFile(__dirname +  '/index.html');
});

// HOME PAGE
server.get('/home', function(request, response) {
  response.sendFile(__dirname +  '/index.html');
});

// ABOUT PAGE
server.get('/about', function(request, response) {
  response.sendFile(__dirname +  '/about.html');
});

server.get('/.well-known/apple-app-site-association', function(request, response) {
  response.sendFile(__dirname +  '/apple-app-site-association');
});


server.listen(80);
