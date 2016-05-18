if(process.argv.length > 2) {
    var tcp = require("./Tcp_Module.js");
    
    tcp.sendTime(process.argv[2]);
    
}