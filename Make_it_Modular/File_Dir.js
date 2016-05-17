module.exports = function(dir, extension, callback) {
    var fs = require('fs');
    var list = [];
    
    
    fs.readdir(dir, function(err, contents) {
        if(err) return callback(err);
       
        for(var i = 0; i < contents.length; i++)
            if(contents[i].indexOf("." + extension) > -1)
                list.push(contents[i]);
        
        
        callback(null, list);
    });
    
};
