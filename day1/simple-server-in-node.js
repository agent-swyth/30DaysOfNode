// Create a server in nodeJS

// Use http built-in module to perfom HTTP requests
const http = require('http')

const host = '127.0.0.1'
const port = 3000

var server = http.createServer((request, response) => {
    // Built-in method to send the HTTP status code
    response.writeHead(200, {"Content-Type": "text/plain"})
    console.log("Server working")
    // Tell to the server that the request has been fullfilled and also send one response
    response.end("Server Working Success")
})

server.listen(port, host, (error) => {
    if (error) {
        return console.log('Error occured : ', error)
    }

    console.log('Server is listening on ' + host + ':' + port)
})