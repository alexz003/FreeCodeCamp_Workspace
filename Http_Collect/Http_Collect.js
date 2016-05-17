if(process.argv.length > 2) {
    var url = process.argv[2];
    var http = require("./Http_Module.js");
    
    http.getData(url);
    
}