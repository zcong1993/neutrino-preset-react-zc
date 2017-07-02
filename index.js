const react = require('neutrino-preset-react')
const merge = require('deepmerge')
const cssLoaders = require('neutrino-middleware-styles-loader')

module.exports = (neutrino, opts = {}) => {
  const options = merge({
    hot: true,
    babel: {},
    cssModules: false,
    css: {}
  }, opts)

  options.css.cssModules = options.cssModules

  neutrino.use(react, options)

  neutrino.use(cssLoaders, options.css)

  // fix svg-url-loader error https://github.com/mozilla-neutrino/neutrino-dev/issues/272
  neutrino.use(require.resolve('neutrino-middleware-image-loader'), {
    svg: {
      noquotes: true
    }
  })
}

