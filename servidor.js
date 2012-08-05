// Se incluyen las librerias necesarias
var http = require("http");
var url = require("url");

// Se crea la funciona que iniciara el servidor
function server( route, handle ) {
http.createServer( function( req, res ) {
	// Recibimos el pathname de la peticion
	var pathname = url.parse( req.url ).pathname;
	route( pathname, handle );
	res.writeHead( 200,  {'Conten-Type' : 'text/html'} );
	res.write("<p>Hola</p>")
	res.end();


} ).listen( 3000, "127.0.0.1" );
console.log( "Servidor Iniciando en: http://127.0.0.1:3000"   );

}
exports.server = server;


