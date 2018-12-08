/* Webpack Modules */
const path = require('path');

      
const webpack = require('webpack');

/* Bundler */
const bundlePath = path.resolve(__dirname, 'dist');

/* Config Object */
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react'],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  /* CONFIGURATION FOR UBUNTU AND MAC */
  // devServer: {
  //   contentBase: path.join(__dirname, 'public'),
  //   port: 3000,
  //   publicPath: 'http://localhost:3000/dist',
  //   hot: true,
  //   historyApiFallback: true,
  // },
  /* CONFIGURATION FOR C9 */
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    host: process.env.IP,
    //https: true,
    port: process.env.PORT,
    publicPath: 'http://localhost:8080/dist',
    "public": "volta-stormamnc.c9users.io" //no trailing slash
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    mode: 'development',
    performance: {
      hints: false,
  },

};
