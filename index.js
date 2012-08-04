var init = require("./servidor");
var router = require("./router");
var reqHandles = require("./manejadores");

var handle =  {};
handle["/"] = reqHandles.iniciar;
handle["/subir"] = reqHandles.subir;
handle["/test"] = reqHandles.test;

init.server( router.route, handle );

