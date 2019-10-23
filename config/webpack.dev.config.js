const exec = require('child_process').exec;
const HtmlWebpackPlugin = require('html-webpack-plugin');

class StartElectronPlugin {
  apply(compiler) {
    let didStart = false;

    compiler.hooks.done.tap('Start Electron Plugin', () => {
      if (!didStart) {
        exec('yarn start-electron-dev');
        didStart = true;
      }
    });
  }
}

module.exports = [
  {
    mode: 'development',
    entry: './src/react.tsx',
    target: 'electron-renderer',
    devtool: 'inline-source-map',

    devServer: {
      historyApiFallback: true,
      contentBase: '/',
      hot: true,
    },

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
      new StartElectronPlugin(),
    ],
  },
];
