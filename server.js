// //var nodeStatic = require('../lib/node-static');
// var nodeStatic = require('node-static');
// var http = require('http'),
// 	sys  = require('sys');
// 	//nodeStatic = require('node-static'); //serving static files

// var server = http.createServer(function(request , response){
// 	var file = new nodeStatic.Server('./public' ,{
// 		cache: false
// 	});

// 	request.addListener('end' , function(){
// 	file.serve(request , response);
// 	});
// });
// server.listen(8000);

var static = require('node-static');

//
// Create a node-static server to serve the current directory
//
var file = new static.Server('./public', { cache: false, headers: {'X-Hello':'World!'} });

require('http').createServer(function (request, response) {
    file.serve(request, response, function (err, res) {
        if (err) { // An error as occured
            console.error("> Error serving " + request.url + " - " + err.message);
            response.writeHead(err.status, err.headers);
            response.end();
        } else { // The file was served successfully
            console.log("> " + request.url + " - " + res.message);
        }
    });
}).listen(8080);

console.log("> node-static is listening on http://127.0.0.1:8080");
