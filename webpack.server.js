const path = require("path");
const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const shellPlugin = require("webpack-shell-plugin");

module.exports = {
  mode: "development",
  // Inform webpack we're building a bundle for NodeJS, rather than for the broweser, thus webpack can ignore Node built in libraries
  target: "node",
  entry: "./src/server/server.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", // transforms CSS to CommonJS module
          "sass-loader"
        ]
      },

      {
        test: /\.(png|jp(e*)g|png|gif|svg|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: `${__dirname}/build/images`
            }
          }
        ]
      }
    ]
  },

  // creates and externals function that ingores node_modules from bundling
  externals: [webpackNodeExternals()],
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new shellPlugin({
      onBuildEnd: ["nodemon --watch build --exec node build/server.js"]
    })
  ]
};
