
var querystring = require("querystring");
exports.handler = {
    home : function (response) {
        console.log("home handler");
        var htmlData = "<html><head><meta http-equiv='Content-Type' content='text/html' charset='UTF-8'/></head><body><h1>hello from home router</h1><form type='submit' action='/review' method='post'><textarea name='text' rows='40' cols='60'></textarea><input type='submit'>Submit</input></form></body></html>";
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write(htmlData);
        response.end();
    },
    review : function (response, reviewData) {
        console.log("review handler", reviewData);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("your review is "+ querystring.parse(reviewData).text);
        response.end();

    }
}