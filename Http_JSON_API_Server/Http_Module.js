var startServer = function(port) {
    var http = require('http');
  
    var server = http.createServer(function(request, response) {
    
    if(request.method == "GET") {
        var URL = require('url');
        var url = URL.parse(request.url, true);
        
        response.writeHead(200, {'Content-Type': 'application/json'});
        
        if(url.pathname == "/api/parsetime") {
         var date = new Date(url.query["iso"]);
         
         var timeObj = { 
             "hour": date.getHours(),
             "minute": date.getMinutes(),
             "second": date.getSeconds()
         };
         
         response.write(JSON.stringify(timeObj));
        }
        
        if(url.pathname == "/api/unixtime") {
            var date = new Date(url.query["iso"]);
            var obj = { "unixtime": date.getTime() };
            
            response.write(JSON.stringify(obj));
        }
        
        request.socket.destroy();
        
     }
  });
  server.listen(port);
};

module.exports.startServer = startServer;