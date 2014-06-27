var filtered_ls = require('./filtered_ls_module')

filtered_ls(process.argv[2], process.argv[3], function(err, data) {
    if (err) console.log(err)
        
    data.forEach(function(filename) {
        console.log(filename)
    })
})
