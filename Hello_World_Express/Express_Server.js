var startServer = function(port) {
    var exp = require('express');
    var app = exp();
    app.get('/home', function(request, response) {
       response.end("Hello World!"); 
    });
    app.listen(port);
    
};

module.exports.startServer = startServer;