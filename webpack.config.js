let HtmlWebpackPlugin=require("html-webpack-plugin");
/* let MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css 打包
let CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //css 压缩 */
let  CopyPlugin = require('copy-webpack-plugin');//赋值静态文件
let {CleanWebpackPlugin} = require('clean-webpack-plugin'); //清理防止一些无法覆盖的信息

module.exports = {
    entry: './src/js/index.js',
    output: {
      path: __dirname+'/dist',
      filename: 'index.js'
    },
    /* module: {
        rules: [
          {

            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
      }, */
    plugins: [
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html",
            minify:true
        }),
       /*  new MiniCssExtractPlugin({
            filename:"index.css"
        }), */
        new CopyPlugin({
            patterns: [
              { from: 'static', to: 'static' }
            ]
          }),
        new CleanWebpackPlugin()
       
    ],
   /*  optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin({
          
          }),
          
        ],
      }, */
      devServer: {
        contentBase: __dirname + 'dist',
        open:true, //服务器是否直接打开页面，true 打开，默认不打开
        port:6789 //设置端口号 m默认8080

	}
  
  };