const merge = require('deepmerge')

module.exports = ({ config }, options = {}) => {
  config.module
    .rule('css-module')
      .test(/\.module\.css$/)
        .use('style')
          .loader(require.resolve('style-loader'))
          .when(options.style, use => use.options(options.style))
          .end()
        .use('css')
          .loader(require.resolve('css-loader'))
          .options(merge({
            modules: true,
            localIdentName: '[local]___[hash:base64:5]'
          }, options.css || {}))
  config.module
    .rule('style')
      .test(/\.css$/)
        .include
          .add(filepath => {
            return !/\.module\.css$/.test(filepath)
          })
          .end()
        .use('style')
          .loader(require.resolve('style-loader'))
          .when(options.style, use => use.options(options.style))
          .end()
        .use('css')
          .loader(require.resolve('css-loader'))
          .when(options.css, use => use.options(options.css))
}
