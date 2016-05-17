if(process.argv.length > 3) {
    var fs = require("fs");
    
    var directory = process.argv[2];
    var filter = process.argv[3];
    
    fs.readdir(directory, function(err, files) {
        if(err) throw err;
        
        for(var i = 0; i < files.length; i++)
            if(files[i].indexOf("." + filter) > -1)
                console.log(files[i]);
        
    });
}

