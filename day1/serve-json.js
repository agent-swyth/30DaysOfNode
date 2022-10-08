// Create a server and serve JSON

const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {

	// Change MIME type to 'application/json' 
	response.writeHead(200, { 'Content-Type': 'application/json' });

	// Create a JSON for example
	let json_response = {
		status: 200,
		message: 'successful',
		result: ['sunday', 'monday', 'tuesday', 'wednesday'],
		code: 2000
	}

	//transform JSON objet to a string
	response.end(JSON.stringify(json_response));

}).listen(3000)