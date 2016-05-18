var getTime = function() {
    var dateFormatted = "";
    
    var date = new Date();
    dateFormatted += date.getFullYear() + "-" + ((date.getMonth() + 1 < 10) ? "0" : "") + (date.getMonth() + 1) + "-" + date.getDate();
    dateFormatted += " " + ((date.getHours() < 10) ? "0" : "") + date.getHours() + ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes();
    
    return dateFormatted + "\n";
    
};

module.exports.getTime = getTime;