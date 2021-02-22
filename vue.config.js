/*
 * @Author: your name
 * @Date: 2021-02-04 20:36:39
 * @LastEditTime: 2021-02-22 23:32:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\vue.config.js
 */
const path = require('path')
const resolve = (dir)=>{
  return path.join(__dirname,dir)
}
module.exports = {
    publicPath:process.env.NODE_ENV === 'production' ? '/':'/',
    lintOnSave: false,
    chainWebpack:(config)=>{
      config.resolve.alias
      .set('@',resolve('./src'))
      .set('_c',resolve('./src/components'))
      .set('_v',resolve('./src/views'))
      .set('_u',resolve('./src/utils'))
　　　　
    },
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