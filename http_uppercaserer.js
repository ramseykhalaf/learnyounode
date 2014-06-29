var http = require('http')
var map = require('through2-map')

var upperCaserStream = map(function(chunk) {
    return chunk.toString().toUpperCase()
})

var server = http.createServer(function(req, res) {
    if (req.method != "POST") return

    req.pipe(upperCaserStream).pipe(res)
})

server.listen(process.argv[2])
