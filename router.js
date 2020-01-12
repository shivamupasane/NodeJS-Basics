function route(pathName, handle, response, reviewData) {
console.log("path name is", pathName);
if (typeof handle[pathName] === "function") {
    handle[pathName](response, reviewData);
} else {
    console.log("error no handler");
    response.writeHead(404, {"Content-type" : "text/plain"})
    response.write("error page not found");
    response.end();
}
}
exports.route = route;