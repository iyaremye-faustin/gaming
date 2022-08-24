const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    https: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
}