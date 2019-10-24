const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/react.tsx',
  target: 'electron-renderer',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            ['react-app', { flow: false, typescript: true }],
          ],
        },
      },
    ],
  },

  output: {
    path: __dirname + '/../dist',
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
