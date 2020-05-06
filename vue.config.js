const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/less/variable.less")]
    }
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false, //map文件是js文件压缩后，文件的变量名替换对应、变量所在位置等原信息数据文件。
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true, //去除所有的console
              drop_debugger: true
            },
            output: {
              comments: false // 去除所有注释
            }
          }
        })
      ]
    }
  }
};
