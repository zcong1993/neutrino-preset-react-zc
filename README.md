# neutrino-preset-react-zc

[![NPM version](https://img.shields.io/npm/v/neutrino-preset-react-zc.svg?style=flat)](https://npmjs.com/package/neutrino-preset-react-zc) [![NPM downloads](https://img.shields.io/npm/dm/neutrino-preset-react-zc.svg?style=flat)](https://npmjs.com/package/neutrino-preset-react-zc) [![CircleCI](https://circleci.com/gh/zcong1993/neutrino-preset-react-zc/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/neutrino-preset-react-zc/tree/master)

> neutrino-preset-react-zc is a Neutrino preset that supports building React web applications, based on [neutrino-preset-react](https://github.com/mozilla-neutrino/neutrino-dev/tree/master/packages/neutrino-preset-react)

## Features

- Support [CSS modules](https://github.com/css-modules/css-modules)
- Extends from [neutrino-preset-react](https://github.com/mozilla-neutrino/neutrino-dev/tree/master/packages/neutrino-preset-react)
- Fix `svg-url-loader` config [error](https://github.com/mozilla-neutrino/neutrino-dev/issues/272)

## CSS modules

> inspired by [poi](https://poi.js.org)

Files ending with `.module.css` support CSS modules by default.

To enable CSS modules for all CSS files, set `cssModules: true` in config file.

```js
module.exports = {
  use: [
    ['neutrino-preset-react-zc', {
      cssModules: true
    }]
  ]
}
```

## Install

```bash
# yarn
$ yarn add neutrino-preset-react-zc --dev
# npm
$ npm install --save-dev neutrino-preset-react-zc
```

## Usage

Same as [neutrino-preset-react](https://github.com/mozilla-neutrino/neutrino-dev/tree/master/packages/neutrino-preset-react).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**neutrino-preset-react-zc** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/neutrino-preset-react-zc/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
