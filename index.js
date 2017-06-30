const react = require('neutrino-preset-react')
const compileLoader = require('neutrino-middleware-compile-loader')
const merge = require('deepmerge')

module.exports = (neutrino, opts = {}) => {
  const options = merge({
    hot: true,
    babel: {}
  }, opts)

  Object.assign(options, {
    babel: compileLoader.merge({
      plugins: [require.resolve('babel-plugin-react-require')]
    }, options.babel)
  })

  neutrino.use(react, options)

  // fix svg-url-loader error https://github.com/mozilla-neutrino/neutrino-dev/issues/272
  neutrino.use(require.resolve('neutrino-middleware-image-loader'), {
    svg: {
      noquotes: true
    }
  })
}

