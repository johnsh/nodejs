function iniciar() {
  	console.log("Manipulador de petición 'iniciar' ha sido llamado.");
  	return 1;
}

function subir() {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
}
function test(){
  require("./test");
}
exports.iniciar = iniciar;
exports.subir = subir;
exports.test = test;