//const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   publicPath: 'dist'
  // },
  devtool:'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      "process.env.WEATHER_KEY": JSON.stringify("02c8bac25839400b9bf8d4123ed95e4a"),
      "process.env.UNSPLASH_KEY":JSON.stringify("WTbmmGUnHFIQiUFmUdpgt6ts226lO9mnOHGLydGkUDA"),
      "process.env.OPENCAGE_KEY":JSON.stringify("ede0a0629fd442bd9c959b7bd1959ff6")
    }),
    new HtmlWebPackPlugin({
      template: "./src/views/index.html",
      filename: "./index.html",
  }),
  new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
  }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
