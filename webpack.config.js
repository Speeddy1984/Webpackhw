const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },
  module: {
      rules: [
        {
          test: /\.css$/,
          use: [
              MiniCSSExtractPlugin.loader,
              "css-loader"
          ]
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "main.html",
      }),
      new MiniCSSExtractPlugin()
    ],
  };