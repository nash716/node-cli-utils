'use strict';

let u = require('url');
let qs = require('querystring');
let httpSync = require('http-sync');

module.exports = (method, url, opts) => {
	let parsed = u.parse(url);

	opts = opts || { };

	let req = httpSync.request({
		method: method,
		body: method == 'POST' ? qs.stringify(opts.data) : undefined,
		headers: opts.headers,

		protocol: parsed.protocol,
		host: parsed.hostname,
		port: parsed.port,
		path: parsed.path
	});

	return req.end();
};
