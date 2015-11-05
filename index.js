'use strict';

let parser = require('./lib/parser');
let run = require('./lib/run');
let read = require('./lib/read');
let httpReq = require('./lib/request');

require('colors');
require('shelljs/global');

module.exports = (opts) => {
	parser(opts);

	global.run = run;
	global.readInt = read.readInt;
	global.readFloat = read.readFloat;
	global.readString = read.readString;
	global.httpReq = httpReq;
};
