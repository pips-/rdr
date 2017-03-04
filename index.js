#!/usr/bin/env node
var readline = require('readline');
var html2txt = require('html-to-text')
var articleParser = require('article-parser')
var yargs = require('yargs')
	.usage('Usage: $0 URL')

	.example('$0 https://example.org')
	.example('$0 -u  https://example.org > toread.txt')
	.example('$0 https://github.com/trqx/rdr |less')
	.example('echo htts://example.org |rdr -p')

	.help()
	.alias('h', 'help')

	.boolean('show-url')
	.alias('u', 'show-url')
	.describe('u', 'output the URL at the top')

	.boolean('pipe')
	.alias('p', 'pipe')
	.describe('p', 'read url from stdin')
	.version()
	.alias('V', 'version')

var argv = yargs.argv

var url = ''

if (argv.p) {
	// stdin input
	rl = readline.createInterface({
		input: process.stdin
	})
	rl.on('line', (line) => {
		fetch(line, argv.u)
	})
} else {
	// url as option
	if (argv._.length != 1) {
		yargs.showHelp()
		process.exit(1)
	}
	fetch(argv._[0], argv.u)

}

function fetch(url, showurl) {
	// fetch the content
	articleParser.extract(url).then((article) => {
		if (showurl) {
			console.log(url + '\n')
		}
		console.log(article.title + '\n')
		console.log(html2txt.fromString(article.content))
	}).catch(function(error) {
		console.error(error.message)
		process.exit(1)
	})
}
