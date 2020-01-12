var server = require("./server");
var router = require("./router");
var handler = require("./handler");
var handle = {};
handle["/"]  = handler.handler.home;
handle["/home"]  = handler.handler.home;
handle["/review"]  = handler.handler.review;
server.startServer(7070, router.route, handle);