if(process.argv.length > 2) {
    var port = process.argv[2];
    var server = require("./Express_Server.js");
    
    server.startServer(port);
}