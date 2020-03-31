const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("4711")
    })
  ]
};
