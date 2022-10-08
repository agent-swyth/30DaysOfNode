// Create a server and serve HTML

const http = require('http')
// fs module enables to interact with the filesystem
const fs = require('fs')

http.createServer(function (request, response) {
    // Change MIME type from default 'text/plain to 'text/html
    response.writeHead(200, {'Content-Type' : 'text/html'})

    // Read the content file
    fs.readFile('./assets/index.html', (error, data) => {
        //Check if error
        if (error)
            throw error
        
        console.log("Operation success")
        //Send the response
        response.end(data)
    })
}).listen(3000)