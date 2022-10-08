// Create a server and serve Video/MP4

const http = require('http')
const fs = require('fs')

http.createServer(function (req, response) {

	// Change the MIME type to 'video/mp4'
	response.writeHead(200, { 'Content-Type': 'video/mp4' })
	fs.exists('assets/NEFEX-Make_Move.mp4', (exists) => {
		if (exists) {
			const rstream = fs.createReadStream('assets/NEFEX-Make_Move.mp4')
			rstream.pipe(response)
		} else {
			response.end("Its a 404")
		}
	});
}).listen(3000);