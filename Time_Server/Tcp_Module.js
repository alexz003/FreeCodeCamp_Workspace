var sendTime = function(port) {
    var net = require('net');
    var date = require("./Time_Module.js");
    
    var server = net.createServer(function(socket) {
        var time = date.getTime();
        socket.end(time);
        server.close();
    });
    server.listen(port);

};

module.exports.sendTime = sendTime;