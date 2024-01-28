const path = require("path");
const webpack = require("webpack");

const serverConfig = {
  target: "node",
  mode: "development",
  entry: "./src/server/server.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "server.cjs",
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Inline images smaller than 8KB as data URLs
              fallback: "file-loader",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      PORT: 3003,
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
};

module.exports = [serverConfig];
