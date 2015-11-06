"use strict";

var http = require('http');
var fs = require('fs');
var url = require('url');


//静态资源目录
global.STATIC_PATH = "./public/";

var router = require('easy-router');
router.setMap({
    "/public/**/*": STATIC_PATH + "**/*"        //静态资源
});

require('./upload');

var server = http.createServer(function (req, res) {
    router.route(req, res);
}).listen(3000, '127.0.0.1');

console.log("I'm working at http://127.0.0.1:3000/");