function route( pathname, handle ) {
	if( typeof handle[pathname] === 'function' ) {
		return handle[ pathname ]();  
	}
	
}
exports.route = route;