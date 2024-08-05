const baseConfig = require("../../../config/rspack.base.config.cjs");
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { defineConfig } = require('@rspack/cli')
module.exports = defineConfig({
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "core.js",
  },
  module: {
    rules: [
      ...(baseConfig.module.rules || []),
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
              transform: {
                react: {
                  pragma: "React.createElement",
                  pragmaFrag: "React.Fragment",
                  throwIfNamespace: true,
                  development: false,
                  useBuiltins: false
                },
              }
            },
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.tsx$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
            },
          },
        },
        type: 'javascript/auto',
      },
    ]
  },
  plugins: [
    ...(baseConfig.plugins || []),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  resolve: {
    ...(baseConfig.resolve || {})
  },
  devServer: {
    open: true,
    port: 8888
  }
});
