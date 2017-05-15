var http = require('http');
var route =require('./routes');

http.createServer(route.handleRequest).listen(3000);
console.log("Listening to port 3000");
