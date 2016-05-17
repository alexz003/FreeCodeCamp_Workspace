var getData = function(url, index, callback) {
    var http = require('http');
    var siteData = [];
    
    siteData[0] = index;
    
    http.get(url, function(response) {
        response.setEncoding("utf8");
        response.on("error", function(error) {   console.log(error); });
        response.on("data", function(data) { 
            siteData.push(String(data));
        });
        response.on("end", function() {
            callback(null, siteData.join(''))
        });
    });
    
};

module.exports.getData = getData;