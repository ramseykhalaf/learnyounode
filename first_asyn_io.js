var fs = require('fs')

var numNewLines = fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) return;
    var numNewLines = data.split('\n').length - 1
    console.log(numNewLines);
});
