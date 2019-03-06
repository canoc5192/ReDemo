var path = require('path');
var MiniCssExtractPlugin = require ('mini-css-extract-plugin');


module.exports = {
  entry: {
   index : './index.js',
    trangchu : "./trangchu.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      { test :/\.(sa|sc|c)ss$/,
        use : [
          {
            loader : MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  },
 
};



/// đóng gói những file có đuối css,scss,jpg png.



