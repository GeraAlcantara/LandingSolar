  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    entry: {
      app: './src/components/functions.js',
      lazysizes: './src/components/lazysizes.min.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Output Management',
        template: './src/template.html'
      }),
    ],
     output: {
      filename: 'js/bundle.[contenthash].js',
      filename: 'js/[name].bundle.[contenthash].js',
       path: path.resolve(__dirname, 'dist'),
     },
     optimization: {
      realContentHash: true,
      splitChunks: {
        chunks: 'all',
      },
    },
    };
    
    
   /*  module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
   }, */
