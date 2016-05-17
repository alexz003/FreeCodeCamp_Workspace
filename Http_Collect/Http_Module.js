var getData = function(url) {
    var http = require('http');
    var siteData = [];
    var count = 0;
    
    http.get(url, function(response) {
        response.setEncoding("utf8");
        response.on("error", function(error) {   console.log(error); });
        response.on("data", function(data) { 
            siteData.push(String(data));
            count += String(data).length;
        });
        response.on("end", function() {
            console.log(count);
            console.log(siteData.join(''));
        });
    });
    
};

module.exports.getData = getData;