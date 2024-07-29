const baseConfig = require("../../config/rspack.base.config.cjs");
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { defineConfig } = require('@rspack/cli')
module.exports = defineConfig({
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "core.js",
  },
  module: {
    ...(baseConfig.module || {}),
  },
  plugins: [
    ...(baseConfig.plugins || []),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  resolve: {
    ...(baseConfig.resolve || {})
  },
  devServer: {
    open: true,
    port: 9999
  }
});
