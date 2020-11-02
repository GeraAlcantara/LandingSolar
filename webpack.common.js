const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "mi titulo de nuevo",
      template: './src/template.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images'
          }
        }
      },
    ],
  },
};
