# generator-browser-module [![Build Status](https://travis-ci.org/lukeed/generator-browser-module.svg?branch=master)](https://travis-ci.org/lukeed/generator-browser-module)

> Scaffold out a [browser module](http://browserify.org/) with [dev tools](https://github.com/lukeed/browser-module-env) and an example page.


## Install

```
$ npm install --global yo generator-browser-module
```


## Usage

With [yo](https://github.com/yeoman/yo):

```
$ yo browser-module
$ npm run setup
```

There are multiple command-line options available:

```
$ yo browser-module --help

  Usage:
    yo nm [options]

  Options:
    --help          # Print the generator's options and usage
    --skip-cache    # Do not remember prompt answers                      Default: false
    --skip-install  # Do not automatically install dependencies           Default: false
    --org           # Publish to a GitHub organization account
```

> The `--org` option takes a string value (i.e. `--org=flyjs`).


## License

MIT © [Luke Edwards](https://lukeed.com)
