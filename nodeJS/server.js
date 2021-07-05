var http = require('http');
http.createServer(function( request, response){
    // send the HTTP header
    //Http status:200 :ok
    //content Type:text/plain
    response.writeHead(200,{'content-Type': 'text/plain'});

    //send the reasponse body as "hello world"
    response.end('hello world/n');
}).listen(8081);

//console will print the message
console.log('server running at http://127.0.0.1:8081/');