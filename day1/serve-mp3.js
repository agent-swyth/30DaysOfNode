// Create a server and serve Audio/MP3

const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {

	// Change the MIME type to 'audio/mp3'
	response.writeHead(200, { 'Content-Type': 'audio/mp3' })
	fs.exists('assets/NEFEX-Make_Move.mp3', (exists) => {
		if (exists) {
			const rstream = fs.createReadStream('assets/NEFEX-Make_Move.mp3')
			rstream.pipe(response)
		} else {
			response.end("Its a 404")
		}
	});
}).listen(3000);