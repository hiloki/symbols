# Symbol icons

## Requirement

- [Grunt.js 0.4](http://gruntjs.com/)
- [grunt-webfont and depending](https://github.com/sapegin/grunt-webfont)

### OS X

```
brew install fontforge ttfautohint
brew install https://raw.github.com/sapegin/grunt-webfont/master/Formula/sfnt2woff.rb
npm install grunt-webfont --save-dev
```

You may need to use `sudo` for `brew`, depending on your setup.

### Linux

```
sudo apt-get install fontforge eot-utils ttfautohint
wget http://people.mozilla.com/~jkew/woff/woff-code-latest.zip
unzip woff-code-latest.zip -d sfnt2woff && cd sfnt2woff && make && sudo mv sfnt2woff /usr/local/bin/
npm install grunt-webfont --save-dev
```

*Note that if `ttfautohint` is not available in your distribution, your generated font will not be properly hinted.*

## Credit

- [Original 'Symbols.ai'](https://github.com/cognitom/symbols)