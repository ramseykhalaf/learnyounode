var http = require('http')
var url = require('url')
var moment = require('moment')

function getTimeObj(momentTime, units) {
    return {
        hour:   momentTime.hour(),
        minute: momentTime.minute(),
        second: momentTime.second()
    }
}

function getUnixTime(momentTime) {
    return { 
        unixtime: momentTime.valueOf()
    }
}

function sendJson(res, resData) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(resData))
}

var server = http.createServer(function(req, res) {
    var reqObj = url.parse(req.url, true)
    var momentTime = moment(reqObj.query.iso)
    var resData = {}

    if (reqObj.pathname === "/api/parsetime") resData = getTimeObj(momentTime)
    if (reqObj.pathname === "/api/unixtime") resData = getUnixTime(momentTime)

    sendJson(res, resData)
})

server.listen(process.argv[2])
