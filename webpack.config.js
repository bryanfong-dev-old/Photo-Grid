const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/_index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: { extensions: [".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: '/build/',
  },
};