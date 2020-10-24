const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devtool:'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      "process.env.WEATHER_KEY": JSON.stringify("02c8bac25839400b9bf8d4123ed95e4a")
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
