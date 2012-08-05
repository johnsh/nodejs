var vows = require('vows'),
    assert = require('assert'),
    router = require('../../router'),
    handlers = require("../../manejadores");

/* Router. */
var h = {}, e = function() {};
h["/lo-que-si-existe"] = e;
assert.equal(router.route("/lo-que-no-existe", h), false, "Router: Error 404, Manejador no existe.");
assert.equal(router.route("/lo-que-si-existe", h), true, "Router: Manejador de peticion Okay");














/*
vows.describe("Router de peticiones").addBatch({
    "Cuando la peticion es 404" : {
        topic : function(){
            var h = {};
            h["/"] = 0;

            return router.route("/", h);
        },
        "Error 404" : function( topic ) {
            assert.equal( topic, undefined, "Error 404");
        }
    }
    

}).run();*/
/*vows.describe("Sumas").addBatch({
	'Suma entre dos numeros' :  {
		topic : function() {
			return 4;
		},
		'Resultado' : function( topic ) {
			assert.equal(topic, 4, "Resultado Ok");
		}
	}

}).run();   */ 
/*
// Create a Test Suite
vows.describe('Division by Zero').addBatch({
    'when dividing a number by zero': {
        topic: function () { return 42 / 0 },

        'we get Infinity': function (topic) {
            assert.equal (topic, Infinity);
        }
    },
    'but when dividing zero by zero': {
        topic: function () { return 0 / 0 },

        'we get a value which': {
            'is not a number': function (topic) {
                assert.isNaN (topic);
            },
            'is not equal to itself': function (topic) {
                assert.notEqual (topic, topic);
            }
        }
    }
}).run(); // Run it
*/