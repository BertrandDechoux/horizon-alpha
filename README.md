[![Build Status](https://travis-ci.org/BertrandDechoux/horizon-alpha.svg?branch=master)](https://travis-ci.org/BertrandDechoux/horizon-alpha)

See [deployed version](http://bertranddechoux.github.io/horizon-alpha/resources/horizon-alpha.html)

In order to develop, you need :
* [leiningen](http://leiningen.org/)
* [phantomjs](http://phantomjs.org/)

**Remove previous generated files**
```
lein clean
```

**Run the tests**
```
lein doo phantom test
```

**Check for outdated stuff**
```
lein ancient
```

**See and test last version**

Start a simple http server eg
```
python -m SimpleHTTPServer
```


And open [the application](http://localhost:8000/resources/horizon-alpha.html) with any browser.

**Publish new version**

Copy resources and out/dev from master and override gh-pages

