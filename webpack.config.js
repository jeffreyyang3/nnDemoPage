const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: "./src/javascript/index.js",
  entry: "./src/index.ts",
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    watchContentBase: true,
    watchOptions: {
      ignored: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "test"),
        /\.swp$/
      ],
    },
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: { implementation: require("sass") },
          },
        ],
      },
    ],
  },
};
