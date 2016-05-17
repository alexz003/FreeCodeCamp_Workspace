if(process.argv.length > 2) {
    
    var http = require("./Http_Get.js");
    var url = process.argv[2];
    
    http.HttpGetData(url, function(err, contents) {
        if(err) console.log(err);
        
        console.log(contents);
    });
}