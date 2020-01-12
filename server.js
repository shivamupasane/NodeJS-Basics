var http = require("http");
var url = require("url");
function startServer(port, route, handle) {
    http.createServer(function(request, response) {
var pathName = url.parse(request.url).pathname;
var reviewData = "";
request.setEncoding("utf8");
request.addListener("data", function (chunk) {
    console.log('chunk', chunk);
reviewData += chunk;
});
request.addListener("end", function() {
    route(pathName, handle, response, reviewData);
})

        //response.writeHead(200, {"Content-type" : "text/plain"});
        //response.write("hello from  node server");
        //response.end();
        }).listen(port);
        console.log("server running at " + port);
}
exports.startServer = startServer;
