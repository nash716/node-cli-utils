'use strict';

let search = (short, long) => {
	let check = (str, pattern) => str ? str.startsWith(pattern) : false;

	for (let i = 0; i < process.argv.length; i++) {
		let param = process.argv[i];

		if (check(param, short ? '-' + short : undefined) || check(param, '--' + long)) {
			let val;

			val = check(process.argv[i + 1], '-') ? undefined : process.argv[i + 1];

			return {
				found: true,
				value: val
			};
		}
	}

	return {
		found: false
	};
}

let toCamelCase = (str) => {
	return str.replace(/-([a-z])/g, ($0, $1) => {
		return $1.toUpperCase();
	});
};

let toLispCase = (str) => {
	return str.replace(/([A-Z])/g, ($0, $1) => {
		return '-' + $1.toLowerCase();
	});
}

let repeat = (str, times) => {
	let ret = '';

	for (var i = 0; i < times; i++) {
		ret += str;
	}

	return ret;
}

let showHelp = (opts) => {
	let format = (key, opt, length) => {
		let ret = '';

		if (opt.required) {
			ret += '[REQUIRED] ';
		} else {
			ret += '           ';
		}

		let optName = '';

		optName += opt.short ? '-' + opt.short + ', ' : '';
		optName += '--' + key;
		ret += optName + repeat(' ', length + 2 - optName.length);

		ret +=	'[' + opt.type.name + ']	';

		ret += opt.help;

		return ret;
	};

	console.log('Options:');

	let max = -1;

	for (let key in opts) if (opts.hasOwnProperty(key)) {
		let opt = opts[key];
		let length = 0;

		if (opt.short) {
			length += ('-' + opt.short + ', ').length;
		}

		length += ('--' + toLispCase(key)).length;

		if (length > max) {
			max = length;
		}
	}

	for (let key in opts) if (opts.hasOwnProperty(key)) {
		let opt = opts[key];

		console.log(format(toLispCase(key), opt, max));
	}
};

module.exports = (opts) => {
	if (search('h', 'help').found) {
		showHelp(opts);
		process.exit(0);
	}

	let argv = { };
	let valid = true;

	for (let key in opts) if (opts.hasOwnProperty(key)) {
		let opt = opts[key];

		key = toLispCase(key);

		let result = search(opt.short || '', key);

		if ((!result.found && opt.required) || (result.found && opt.type != Boolean && !result.value)) {
			valid = false;
			break;
		}

		if (result.found || opt.type == Boolean) {
			let val;

			switch (opt.type) {
				case Number:
					val = Number(result.value);
					break;
				case String:
					val = result.value;
					break;
				case Boolean:
					val = result.found;
					break;
			}

			argv[toCamelCase(key)] = val;
		}
	}

	if (!valid) {
		showHelp(opts);
		process.exit(-1);
	}

	global.argv = argv;
};
