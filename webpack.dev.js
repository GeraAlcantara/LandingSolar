const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  watch: true,
  devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
      
  },
  output: {
    filename: "js/bundle.js",
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
});
