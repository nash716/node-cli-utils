# node-cli-utils

cli-utils provides many useful functions, makes easier to create CLI with Node.

## Install

```
$ npm install nash716/node-cli-utils
```

## Usage

### Before Use

This is a poorly-made library.

### Initialize

```
require('cli-utils')();
```

or with the built-in option parser

```
require('cli-utils')({
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

console.log(argv);

// $ your_cli --file-name "hoge.txt" # OK
// $ your_cli -f "hoge.txt" # OK
// $ your_cli --count 3 # NG

// $ your_cli --help
//   or
// $ your_cli -h
// Options:
//            -c, --count      [Number]  repeat count
// [REQUIRED] -f, --file-name  [String]  path to target file
//            --force          [Boolean] force overwrite

```

The built-in option parser is very very simple. If you want to do something with complex options, consider using other option parsers.

#### Using other option parsers

You can use other option parsers, like [minimist](https://github.com/substack/minimist).

### Colors

```
var str = 'Error Message';

console.log(str.red.bold);
```

This feature is powered by [colors](https://github.com/marak/colors.js/).

### Prompt

```
var i = readInt('Sleep:');
var f = readFloat('Rate:');
var s = readString('Username:');
```

These are simple wrappers of [readline-sync](https://github.com/anseki/readline-sync).

### HTTP Request

```
var response = httpReq('GET', 'http://preflight.cc/?some=data');

var response = httpReq('POST', 'http://preflight.cc', {
	data: {
		some: 'data'
	}
});

// with Custom Headers
var response = httpReq('GET', 'http://preflight.cc', {
	headers: {
		'User-Agent': 'headless'
	}
});
```

This is a simple wrapper of [http-sync](https://github.com/dhruvbird/http-sync).

If you want to do more complex things, see the [docs of http-sync](https://github.com/dhruvbird/http-sync) and use them directly.

### Shell Command

You can run commands like below.

```
var result = run('echo "I Love You!" | cowsay');

console.log(result);
```

```
 _____________
< I Love You! >
 -------------
	   \   ^__^
		\  (oo)\_______
		   (__)\       )\/\
			   ||----w |
			   ||     ||
```

or

```
var files = ls();

console.log(files);
```

`ls()`, `mkdir()`, ... are powered by [shelljs](https://github.com/shelljs/shelljs).

## License

MIT

## Author

nash ([@nash_fs](https://twitter.com/nash_fs), [preflight.cc](http://preflight.cc))
