// Create a server in nodeJS and serve a string
const http = require('http')

const host = '127.0.0.1'
const port = 3000

var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write("Hello world!")
    response.end()
})

server.listen(port, host, (error) => {
    if (error) {
        return console.log('Error occured : ', error)
    }

    console.log('Server is listening on ' + host + ':' + port)
})