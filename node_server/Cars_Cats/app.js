// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    // if(request.url === '/cars') {
    //     fs.readFile('views/car.html', 'utf8', function (errors, contents){
    //         response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
    //         response.write(contents);  //  send response body
    //         response.end(); // finished!
    //     });
    // }
     if(request.url === '/cars'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pexels-photo-210019.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

    else if(request.url === '/cats') {
        fs.readFile('./images/images.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

   else if(request.url === '/cars/new') {
        fs.readFile('views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
