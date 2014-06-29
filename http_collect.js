var http = require('http')
var concatStream = require('concat-stream')

http.get(process.argv[2], function(response) {
    response.pipe(concatStream(function(data) {
        resString = data.toString()
        console.log(resString.length)
        console.log(resString)
    }))
})

