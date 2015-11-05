'use strict';

let cp = require('child_process');

module.exports = (cmd, options) => {
	let ret;

	try {
		ret = cp.execSync(cmd, options).toString();
	} catch (e) {
		ret = e;
	}

	return ret;
};
