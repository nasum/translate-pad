const webpack = require("webpack");

const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

rules.push({
  test: /\.ca?ss$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "sass-loader" },
  ],
});

module.exports = {
  target: "electron-renderer",
  module: {
    rules,
  },
  plugins: [...plugins, new webpack.ExternalsPlugin("commonjs", ["electron"])],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
