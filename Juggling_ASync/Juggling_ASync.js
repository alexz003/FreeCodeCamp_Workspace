if(process.argv.length > 2) {
    var http = require("./Http_Module.js");
    
    var totalRequests = process.argv.length - 2;
    var responses = new Array(totalRequests);
    
    for(var i = 0; i < totalRequests; i++) {
        http.getData(process.argv[i + 2], i, function(err, data) {
            if(err) console.log(err);
            
            responses[Number(String(data).charAt(0))] = String(data).substring(1, data.length);
            
            
            if(checkResponses(totalRequests, responses)) 
                printResponses(totalRequests, responses);
        });
        
    }

    
}

function checkResponses(totalRequests, responses) {
    for(var i = 0; i < totalRequests; i++) 
        if(responses[i] == undefined)
            return false;
        
    return true;
}
    
function printResponses(totalRequests, responses) {
    for(var i = 0; i < totalRequests; i++)
        console.log(responses[i]);
}