var convertUpper = function(port) {
  var http = require('http');
  
  var server = http.createServer(function(request, response) {
    var Readable = require('stream').Readable;
    var stream = new Readable();
    var pushData = [];
    
    if(request.method == "POST") {
         
         request.on("error", function(error) {
             
            console.log(error); 
            server.close();
         });
         
         request.on("data", function(data) {
            var upperData = String(data).toUpperCase();
            pushData.push(upperData);
         });
         
         request.on("end", function() {
             for(var i = 0; i < pushData.length; i++) 
                 stream.push(pushData[i]);
                 
             stream.push(null);
             stream.pipe(response);
             server.close();
         });
     }
  });
  server.listen(port);
};

module.exports.convertUpper = convertUpper;