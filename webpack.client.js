const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const ManifestPlugin = require("webpack-manifest-plugin");
const shellPlugin = require("webpack-shell-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].[hash].js",
    publicPath: "/",
    chunkFilename: "[name].[hash].js"
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
              name: `${__dirname}/public/images`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["public"]),
    new ReactLoadablePlugin({
      filename: "./public/react-loadable.json"
    }),
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new ManifestPlugin(),
    new shellPlugin({
      onBuildEnd: ["webpack --config webpack.server.js --watch"]
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
