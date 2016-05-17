
if(process.argv.length > 2) {
    var fs = require('fs');


    var fileName = process.argv[2];
    var count = 0;
    
    fs.readFile(fileName, function read(err, contents) {
        if(err) throw err;
        
        count = contents.toString().split('\n').length - 1;
        
        console.log(count);
    });
}