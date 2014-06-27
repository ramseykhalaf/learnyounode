var fs = require('fs')
var path = require('path')

function hasExtension(extension, filename) {
    return (path.extname(filename) === "."+extension)
}

function filteredLs(directory, extension, callback) {
    fs.readdir(directory, function(err, list) {
        if (err) return callback(err)
        callback(null, list.filter(hasExtension.bind(undefined, extension)))
    })
}

module.exports = filteredLs
