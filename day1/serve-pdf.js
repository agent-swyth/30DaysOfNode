// Create a server and serve PDF

const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {

	// Change MIME type to 'application/pdf' 
    response.writeHead(200, {'Content-Type': 'application/pdf'});

    // Read the content file
    fs.readFile('./assets/2020-Scrum-Guide-French.pdf', (error, data) => {
        //Check if error
        if (error) {
            response.json({'status': 'error', msg:error})
        } else {
            response.write(data)
            response.end()
        }
    })
}).listen(3000)