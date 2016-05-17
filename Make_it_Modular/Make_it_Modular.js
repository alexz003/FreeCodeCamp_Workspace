
if(process.argv.length > 3) {
    
    var mod = require("./File_Dir.js");
    var dir = process.argv[2];
    var filter = process.argv[3];
    
    mod(dir, filter, function(err, contents) {
        if(err) console.log(err);
        
        for(var i = 0; i < contents.length; i++)
            console.log(contents[i]);
        
        
    });

}