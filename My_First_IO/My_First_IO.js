if(process.argv.length > 2) {
    var fileName = process.argv[2];
    var fileSystem = require('fs');
    
    var buf = fileSystem.readFileSync(fileName);
    var contents = buf.toString().split('\n');
    console.log(contents.length - 1);
    
    
}