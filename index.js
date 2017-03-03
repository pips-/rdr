#!/usr/bin/env node
var html2txt = require('html-to-text')
var articleParser = require('article-parser')
var argv = require('yargs')
	.demandCommand(1, 1, 'URL required', 'only 1 URL allowed')
	.usage('Usage: $0 URL')
	.string('url')
	.example('$0 https://example.org')
	.example('$0 https://example.org |less')
	.alias('h', 'help')
	.help()
	.argv

var url = argv._[0]

articleParser.extract(url).then((article) => {
	content = html2txt.fromString(article.content)
	console.log(article.title + '\n')
	console.log(content)
}).catch(function(error) {
	console.error(error.message)
	process.exit(1)
})
