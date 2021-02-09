/*
 * @Author: your name
 * @Date: 2021-02-04 20:36:39
 * @LastEditTime: 2021-02-09 14:36:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\vue.config.js
 */
const path = require('path')
module.exports = {
    publicPath:process.env.NODE_ENV === 'production' ? '/':'/dev',
    lintOnSave: false,
    pluginOptions: {
        "style-resources-loader": {
          preProcessor: "less",
          patterns: [
              path.resolve(__dirname, "./src/styles/variable.less"),
              path.resolve(__dirname, "./src/styles/mixin.less")
          ]
        }
      },
}