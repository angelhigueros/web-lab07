const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    index: "./src/index.js",
    // Todo (parte de la historia)
    indexTodo: "./src/todo/index.js",

    // Todo: dormir
    dormirIndex: "./src/todo/dormir/index.js",
    dormiralmorzar: "./src/todo/dormir/almorzar.js",
    dormirfinal_alt_2: "./src/todo/dormir/final_alt_2.js",
    dormirfinal_alt: "./src/todo/dormir/final_alt.js",
    dormirfinal: "./src/todo/dormir/final.js",
    dormirhotel: "./src/todo/dormir/hotel.js",
    dormirnadar: "./src/todo/dormir/nadar.js",
    dormirotra_actividad: "./src/todo/dormir/otra_actividad.js",

    // Todo: despiero
    despiertoindex: "./src/todo/despierto/index.js",
    despiertofinal: "./src/todo/despierto/final.js",
    despiertocansado: "./src/todo/despierto/cansado.js",

    // Necesario (parte de la historia)
    necesarioindexTodo: "./src/necesario/index.js",

    // Necesario: dormir
    necesariodormirIndex: "./src/necesario/dormir/index.js",
    necesariodormiralmorzar: "./src/necesario/dormir/almorzar.js",
    necesariodormirfinal_alt: "./src/necesario/dormir/final_alt.js",
    necesariodormirfinal: "./src/necesario/dormir/final.js",
    necesariodormirhotel: "./src/necesario/dormir/hotel.js",
    necesariodormirnadar: "./src/necesario/dormir/nadar.js",
    necesariodormirotra_actividad: "./src/necesario/dormir/otra_actividad.js",

    // Necesario: despiero
    necesariodespiertoindex: "./src/necesario/despierto/index.js",
    necesariodespiertofinal: "./src/necesario/despierto/final.js",
    necesariodespiertocansado: "./src/necesario/despierto/cansado.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "budle_sin_babel"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({ filename: "main.bundle.css" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/todo/index.html",
      filename: "todo/index.html",
      chunks: ["indexTodo"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/todo/dormir/index.html",
      filename: "todo/dormir/index.html",
      chunks: ["dormirIndex"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/todo/dormir/final_alt_2.html",
      filename: "todo/dormir/final_alt_2.html",
      chunks: ["dormirfinal_alt_2"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/todo/dormir/final_alt.html",
      filename: "todo/dormir/final_alt.html",
      chunks: ["dormirfinal_alt"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/todo/dormir/final.html",
      filename: "todo/dormir/final.html",
      chunks: ["dormirfinal"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/todo/dormir/hotel.html",
      filename: "todo/dormir/hotel.html",
      chunks: ["dormirhotel"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/todo/dormir/nadar.html",
      filename: "todo/dormir/nadar.html",
      chunks: ["dormirnadar"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/todo/dormir/otra_actividad.html",
      filename: "todo/dormir/otra_actividad.html",
      chunks: ["dormirotra_actividad"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/todo/despierto/index.html",
      filename: "todo/despierto/index.html",
      chunks: ["despiertoindex"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/todo/despierto/cansado.html",
      filename: "todo/despierto/cansado.html",
      chunks: ["despiertocansado"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/todo/despierto/final.html",
      filename: "todo/despierto/final.html",
      chunks: ["despiertofinal"],
    }),

    //

    new HtmlWebpackPlugin({
      template: "./src/necesario/index.html",
      filename: "necesario/index.html",
      chunks: ["necesarioindexnecesario"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/necesario/dormir/index.html",
      filename: "necesario/dormir/index.html",
      chunks: ["necesariodormirIndex"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/necesario/dormir/final_alt.html",
      filename: "necesario/dormir/final_alt.html",
      chunks: ["necesariodormirfinal_alt"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/necesario/dormir/final.html",
      filename: "necesario/dormir/final.html",
      chunks: ["necesariodormirfinal"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/necesario/dormir/hotel.html",
      filename: "necesario/dormir/hotel.html",
      chunks: ["necesariodormirhotel"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/necesario/dormir/nadar.html",
      filename: "necesario/dormir/nadar.html",
      chunks: ["necesariodormirnadar"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/necesario/dormir/otra_actividad.html",
      filename: "necesario/dormir/otra_actividad.html",
      chunks: ["necesariodormirotra_actividad"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/necesario/despierto/index.html",
      filename: "necesario/despierto/index.html",
      chunks: ["necesariodespiertoindex"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/necesario/despierto/cansado.html",
      filename: "necesario/despierto/cansado.html",
      chunks: ["necesariodespiertocansado"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/necesario/despierto/final.html",
      filename: "necesario/despierto/final.html",
      chunks: ["necesariodespiertofinal"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader, //3. Inject styles into a new file
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"],
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env"],
      //       plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime']
      //     },
      //   },
      // },
    ],
  },
};
