var HttpGetData = function(url, callback) {
    
    var client = require("http");
    
    client.get(url, function(response) {
        
        response.setEncoding("utf8");
        response.on("error", function(error) { console.log(error); });
        response.on("data", function(data) { callback(null, data); });
        
    });

};

module.exports.HttpGetData = HttpGetData;