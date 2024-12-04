import path from "path";
import Dotenv from "dotenv-webpack";

export default {
  mode: "development",
  entry: "./src/main.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new Dotenv()],
  resolve: {
    fallback: {
      path: "path-browserify",
      os: "os-browserify/browser",
      crypto: "crypto-browserify",
    },
  },
};
