var net = require('net')
var moment = require('moment')

function getTime() {
    return moment().format("YYYY-MM-DD HH:mm")
}

var server = net.createServer(function(socket) {
    socket.end(getTime())
})

server.listen(process.argv[2])