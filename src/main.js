/*
 * @Author: your name
 * @Date: 2021-02-03 20:18:15
 * @LastEditTime: 2021-02-09 14:13:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import {useAntdFnc} from './antd.js'
useAntdFnc()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')