/*jslint devel: true, node: true */
'use strict';
function route(pathname, handle) {
	if (typeof handle[pathname] === 'function' && handle[pathname]) {
		handle[pathname]();
		return true;
	}
	return false;

}
exports.route = route;