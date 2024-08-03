const { defineConfig } = require('@rspack/cli')
module.exports = defineConfig({
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "builtin:swc-loader",
      //     options: {
      //       jsc: {
      //         parser: {
      //           syntax: "typescript",
      //           // tsx: false,
      //         },
      //       },
      //     },
      //   },
      //   type: "javascript/auto",
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
          },
        ],
        type: 'css',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  }
});
