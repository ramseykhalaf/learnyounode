var http = require('http')
var concatStream = require('concat-stream')

urls = process.argv.slice(2)

responses = [null, null, null]

var printIfDone = function(data, index) {
    responses[index] = data

    if (responses.every(function(response) {return !!response})) {
        responses.forEach(function(res) {
            console.log(res)
        })
    }
}

urls.forEach(function(url, index) {
    http.get(url, function(res) {
        res.pipe(concatStream(function(data) {
            printIfDone(data.toString(), index)
        }))
    })
})