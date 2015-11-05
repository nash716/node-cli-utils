#!/usr/bin/env node

'use strict';

require('./')({
	count: {
		short: 'c',
		type: Number,
		help: 'repeat count'
	},
	fileName: {
		short: 'f',
		type: String,
		help: 'path to target file',
		required: true
	},
	force: {
		type: Boolean,
		help: 'force overwrite'
	}
});

process.on('uncaughtException', (err) => {
	console.log(err);
	console.log('An Error has Occurred. Abort.'.red.bold);

	process.exit(-1);
});

// Option parser
console.log('Parsed Arguments:', argv);

// HTTP Request
console.log(httpReq('GET', 'http://example.com/?some=data'));

// Shell Command
console.log(run('echo "I Love You!" | cowsay'))

// Prompt
let num = readInt('Input Integer:');
console.log('Your input: ' + num);

// Shell Command with shelljs
console.log('ls():', ls());

hoge.fuga(); // throws ReferenceError (hoge is not defined)
