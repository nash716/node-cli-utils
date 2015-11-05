'use strict';

let readlineSync = require('readline-sync');

let run = require('./run');

module.exports = {
	readInt: (prompt) => {
		if (prompt) {
			process.stdout.write(prompt + ' ');
		}

		let ret = readlineSync.question();

		return parseInt(ret);
	},
	readFloat: (prompt) => {
		if (prompt) {
			process.stdout.write(prompt + ' ');
		}

		let ret = readlineSync.question();

		return parseFloat(ret);
	},
	readString: (prompt) => {
		if (prompt) {
			process.stdout.write(prompt + ' ');
		}

		let ret = readlineSync.question();

		return ret;
	}
};
