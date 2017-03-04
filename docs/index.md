rdr - get plain text content of web page

[![asciicast](https://asciinema.org/a/8rtrx7hn4jv3ybkpg4wj1xrtz.png)](https://asciinema.org/a/8rtrx7hn4jv3ybkpg4wj1xrtz)

# installation

rdr requires node and npm (yeah well, sorry)

	git clone https://github.com/trx/rdr
	cd rdr
	sudo npm install -g .

# usage

	Usage: rdr URL

	Options:
	  -u, --show-url  output the URL at the top                            [boolean]
	  -p, --pipe      read url from stdin                                  [boolean]
	  -h, --help      Show help                                            [boolean]
	  -V, --version   Show version number                                  [boolean]

	Examples:
	  rdr https://example.org |less
	  rdr -u  https://example.org > toread.txt
	  echo htts://example.org |rdr -p

# acknowledgments

rdr uses the following libraries:

* article-parser
* html-to-text
* yargs
* readline
