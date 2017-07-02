const react = require('neutrino-preset-react')
const compileLoader = require('neutrino-middleware-compile-loader')
const merge = require('deepmerge')
const cssMouleLoader = require('./css-module-loader')

module.exports = (neutrino, opts = {}) => {
  const options = merge({
    hot: true,
    babel: {},
    cssModules: false,
    css: {}
  }, opts)

  Object.assign(options, {
    babel: compileLoader.merge({
      plugins: [require.resolve('babel-plugin-react-require')]
    }, options.babel)
  })

  neutrino.use(react, options)

  // support css module
  if (options.cssModules) {
    // use css modules in global
    neutrino.use(require.resolve('neutrino-middleware-style-loader'), merge(
      {
        css: {
          modules: true,
          localIdentName: '[local]___[hash:base64:5]'
        }
      },
      options.css
    ))
  } else {
    // only use css module loader for css file endswith '.module.css'
    neutrino.use(cssMouleLoader, options.css)
  }

  // fix svg-url-loader error https://github.com/mozilla-neutrino/neutrino-dev/issues/272
  neutrino.use(require.resolve('neutrino-middleware-image-loader'), {
    svg: {
      noquotes: true
    }
  })
}

