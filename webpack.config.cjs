const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "main.cjs",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  target: "node",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel for .js and .jsx files
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
