function route( pathname, handle ) {
	if( typeof handle[pathname] === 'function' && handle[ pathname ] ) {
		handle[ pathname ]();  
		return true;
	} else {
		return false;
	}
	
}
exports.route = route;