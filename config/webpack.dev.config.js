const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig,
  {
    mode: 'development',
    devtool: 'inline-source-map',

    stats: {
      colors: true
    },

    devServer: {
      historyApiFallback: true,
      contentBase: '/',
      progress: true,
      hot: true,
    },
  }
);
