/* Webpack Modules */
const path = require('path'),
      webpack = require('webpack');

/* Bundler */
const bundlePath = path.resolve(__dirname, 'dist');

/* Config Object */
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react']
            }
          }
        ],
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx']},
  output: {
    publicPath: bundlePath,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist',
    hot: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  mode: 'development',
  performance: {
    hints: false
  },
}