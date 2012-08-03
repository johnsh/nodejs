// Se incluyen las librerias necesarias
var http = require("http");
var url = require("url");

// Se crea la funciona que iniciara el servidor
function server( route ) {
http.createServer( function( req, res ) {
	// Recibimos el pathname de la peticion
	var pathname = url.parse( req.url ).pathname;
	route( pathname );
	res.writeHead( 200,  {'Conten-Type' : 'text/plain'} );
	res.end('Curso de node.js');


} ).listen( 3000, "127.0.0.1" );
console.log( "Servidor Iniciando en: http://127.0.0.1:3000"   );

}
exports.server = server;


