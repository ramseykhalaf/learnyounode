var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = process.argv[3]

fs.readdir(process.argv[2], function(err, list) {
    if (err) return

    var listOfExtFiles = list.forEach(function(filename) {
        if (path.extname(filename) === "."+ext) console.log(filename)
    })
})



