const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const options = require("./public/manifest.json");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
    publicPath: "/",
  },
  devtool:
    "source-map" /* Source map is a way to set up a source map, the compiled code will be mapped back to the original source code. If there is an error in the src/index.js file, the source map will tell you the exact location of the error. Add this option to webpack.config.js  */,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "singletonStyleTag" },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["svg-loader"],
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@contact": path.resolve(__dirname, ""),
    },
    extensions: ["", ".tsx", ".ts", ".js", ".json", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
    }),
    new WebpackManifestPlugin(options),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    static: "./build",
    compress: true,
    port: 2013,
  },
  performance: { hints: false },
};
