var init = require("./servidor");
var router = require("./router");
init.server( router.route );

