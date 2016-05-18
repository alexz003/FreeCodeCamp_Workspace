var sendFile = function(path, port) {
    var http = require('http');
    
    var server = http.createServer(function(request, response) {
        var fs = require('fs');
        var readStream = fs.createReadStream(path);
        
        readStream.pipe(response);
        
        server.close();
        
    });
    server.listen(port);
};

module.exports.sendFile = sendFile;