var http = require('http')
var fs = require('fs')

function pipeFileToStream(filename, stream) {
    read = fs.createReadStream(filename, 'utf8')
    read.pipe(stream)
}

var server = http.createServer(function(req, res) {
    pipeFileToStream(process.argv[3], res)
})

server.listen(process.argv[2])